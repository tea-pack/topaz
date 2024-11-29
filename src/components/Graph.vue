<template>
    <div id="network" ref="graph"></div>
</template>

<script lang = "ts" setup>
import { Edge, Node, Options, Network } from "vis-network"
import { onMounted, useTemplateRef } from "vue"

const container = useTemplateRef("graph");

// Define nodes
const nodes: Node[] = [
  { id: 1, label: "Node 1" },
  { id: 2, label: "Node 2" },
  { id: 3, label: "Node 3" },
  { id: 4, label: "Node 4" },
  { id: 5, label: "Node 5" },
];

// Define edges
const edges: Edge[] = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
];
// Create the network
const data = { nodes: nodes, edges: edges };

// Network options
const options: Options = {
  physics: {
    enabled: true,
    solver: "forceAtlas2Based",
    forceAtlas2Based: {
      gravitationalConstant: -50,
      centralGravity: 0.01,
      springLength: 100,
      springConstant: 0.08,
    },
    maxVelocity: 50,
    stabilization: { iterations: 150 },
  },
  interaction: { dragNodes: true },
  nodes: { shape: "circle" },
};


onMounted(() => {
    if (container.value != null) {
        const network = new Network(container.value, data, options);
        // Optional: Add event listeners
        network.on("selectNode", (params) => {
            console.log("Selected node:", params.nodes);
        });
    }
}) 
// Initialize the network

</script>

<style scoped>
#network {
    border-radius: 12px;
    border: 1px solid var(--md-sys-color-outline-variant)
}
</style>