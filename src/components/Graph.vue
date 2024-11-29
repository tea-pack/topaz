<template>
    <div id="network" ref="graph"></div>
</template>

<script lang = "ts" setup>
import { Edge, Node, NodeOptions, Options, Network} from "vis-network"
import { onMounted, useTemplateRef } from "vue"

const container = useTemplateRef("graph");

// Define nodes
var nodes: Node[];

// Define edges
var edges: Edge[]


async function fetchData() {
    try {
        // Fetch the JSON file
        const response = await fetch('../../data/100.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const data = await response.json();

        // Convert the nodes array
        nodes = data.nodes.map((node: any) => ({
            id: node.id,
            title: node.name,
            group: node.category,
            value: node.hours,
        }));

        // Convert the edges array
        edges = data.edges
            .filter((edge: any) => edge.weight > 300)
            .map((edge: any) => ({
                from: edge.from,
                to: edge.to,
                hidden: false
            }));

        makeGraph()
        // Log the results (or use them in your application)
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}

onMounted(() => {
  fetchData()
}) 
//barnesHut, repulsion, hierarchicalRepulsion, forceAtlas2Based
function makeGraph() {
  if (container.value != null) {
        const data = { nodes: nodes, edges: edges };
        // Network options
        const options: Options = {
          physics: {
            enabled: true,
            barnesHut: {
              theta: 1,
              gravitationalConstant: -2000,
              centralGravity: 0.05,
              springLength: 100,
              springConstant: 0.05,
            },
            maxVelocity: 5,
            stabilization: { iterations: 100 },
          },
          interaction: {
              dragNodes: false,
              tooltipDelay: 0,
          },
          nodes: { shape: "dot" },
        };

        const network = new Network(container.value, data, options);
        network.on("selectNode", (params) => {
            console.log("Selected node:", params.nodes);
        });

        network.on("hoverNode", (params) => {
          console.log(params)
        });
    }
}

</script>

<style scoped>
#network {
    border-radius: 12px;
    border: 1px solid var(--md-sys-color-outline-variant);
    flex: 1;
}
</style>

<style>
.vis-tooltip {
    position: fixed;
    margin-left: 300px;
    margin-top: 35px;
    z-index: 10000;
    font-family: "Roboto", sans-serif;
    padding: 5px;
    background: var(--md-sys-color-on-primary);
    color: var(--md-sys-color-on-surface-variant);
    border-radius: 8px;
    border: 3px solid var(--md-sys-color-primary);
    /* color: va */
}
</style>