<template>
    <div id="network" ref="graph"></div>
</template>

<script lang = "ts" setup>
import { Edge, Node, Options, Network} from "vis-network"
import { onMounted, useTemplateRef } from "vue"

const container = useTemplateRef("graph");

// Define nodes
var nodes: Node[] = [
  { id: 1, label: "Информационный\nканал", group: "1" },
  { id: 2, label: "Сегодня", group: "1" },
  { id: 3, label: "Вести", group: "1" },
  { id: 4, label: "Телеканал\n'Доброе утро'", group: "1" },
  { id: 5, label: "60 минут", group: "1" },
  { id: 6, label: "Новости", group: "1" },
  { id: 7, label: "Утро России", group: "1" },
  { id: 8, label: "Новости\n(с субтитрами)", group: "1" },
  { id: 9, label: "Время", group: "1" },
  { id: 10, label: "Вечер с\nВладимиром...", group: "1" },
  { id: 11, label: "Информационная\nпрограмма 112", group: "1" },
  { id: 12, label: "Местное время.\nВести-Воронеж", group: "1" },
  { id: 13, label: "Чрезвычайное\nпроисшествие", group: "1" },
  { id: 14, label: "Известия", group: "1" },

  { id: 15, label: "Три кота", group: "2" },
  { id: 16, label: "Простоквашино", group: "2" },
  { id: 17, label: "Барбоскины", group: "2" },
  { id: 18, label: "Маша и Медведь", group: "2" },
  { id: 19, label: "Ералаш", group: "2" },
  { id: 20, label: "Время малышей", group: "2" },
  { id: 21, label: "Мультфильмы", group: "2" },

  { id: 22, label: "Давай поженимся!", group: "3" },
  { id: 23, label: "Мужское \n/ Женское", group: "3" },
  { id: 24, label: "Моя свекровь \n- монстр", group: "3" },
  { id: 25, label: "Мама в 16", group: "3" },
  { id: 26, label: "Тест на\nотцовство", group: "3" },
  { id: 27, label: "ДНК", group: "3" },
  { id: 28, label: "За гранью", group: "3" },

  { id: 29, label: "Шоу 'Уральские...", group: "4" },
  { id: 30, label: "Comedy Club Classic", group: "4" },
  { id: 31, label: "Малахов", group: "4" },
  { id: 32, label: "Ералаш", group: "4" },
  { id: 33, label: "Монстромания", group: "4" },

  { id: 34, label: "Жить здорово!", group: "5" },
  { id: 35, label: "О самом главном", group: "5" },
  { id: 36, label: "Фитнес", group: "5" },
  { id: 37, label: "Модный приговор", group: "5" },

  { id: 38, label: "Самые шокирующие гипотезы", group: "6" },
  { id: 39, label: "Засекреченные списки", group: "6" },
  { id: 40, label: "Загадки человечества", group: "6" },
  { id: 41, label: "'Как устроен\nмир", group: "6" },
  { id: 42, label: "'Невероятно\nинтересные истории'", group: "6" },
  { id: 43, label: "'Самые шокирующие\nгипотезы'", group: "6" },
  { id: 44, label: "Военная тайна", group: "6" },
  { id: 45, label: "Чадо из ада", group: "6" },
];

// Define edges
var edges = [
  // Within group connections
  {from:1,to:3}, {from:1,to:5}, {from:1,to:13},
  {from:2,to:1}, {from:2,to:3}, {from:2,to:5}, {from:2,to:7}, {from:2,to:9}, {from:2,to:11}, {from:2,to:13},        
  {from:3,to:1}, {from:3,to:5}, {from:3,to:7}, {from:3,to:9}, {from:3,to:11}, {from:3,to:13},
  {from:4,to:1},  {from:9,to:7}, {from:9,to:11}, {from:9,to:13},
  {from:10,to:1},  {from:10,to:13}, 
  {from:11,to:1}, {from:11,to:3},  {from:11,to:13},
  {from:12,to:1},  {from:12,to:11}, {from:12,to:13}, 
  {from:13,to:1}, {from:13,to:3}, {from:13,to:5}, {from:13,to:7}, {from:13,to:9}, {from:13,to:11},
  {from:14,to:1}, {from:14,to:3}, {from:14,to:5}, {from:14,to:7}, {from:14,to:9}, {from:14,to:11}, {from:14,to:13}, 

  {from:15,to:17}, {from:15,to:19}, {from:15,to:21},
  {from:16,to:15}, {from:16,to:17}, {from:16,to:19}, {from:16,to:21}, 
  {from:17,to:15}, {from:17,to:19}, {from:17,to:21},
  {from:18,to:15}, {from:18,to:17}, {from:18,to:19}, {from:18,to:21}, 
  {from:19,to:15}, {from:19,to:17}, {from:19,to:21},
  {from:20,to:15}, {from:20,to:17}, {from:20,to:19}, {from:20,to:21},
  {from:21,to:15}, {from:21,to:17}, {from:21,to:19},

  {from:22,to:24}, {from:22,to:26}, {from:22,to:28}, 
  {from:23,to:22}, {from:23,to:24}, {from:23,to:26}, {from:23,to:28},
  {from:24,to:22}, {from:24,to:26}, {from:24,to:28},
  {from:25,to:22}, {from:25,to:24}, {from:25,to:26}, {from:25,to:28},
  {from:26,to:22}, {from:26,to:24}, {from:26,to:28},
  {from:27,to:22}, {from:27,to:24}, {from:27,to:26}, {from:27,to:28},
  {from:28,to:22}, {from:28,to:24}, {from:28,to:26},

  {from:29,to:31}, {from:29,to:33}, 
  {from:30,to:29}, {from:30,to:31}, {from:30,to:33},
  {from:31,to:29}, {from:31,to:33},
  {from:32,to:29}, {from:32,to:31}, {from:32,to:33},
  {from:33,to:29}, {from:33,to:31},

  {from:34,to:36}, 
  {from:35,to:34}, {from:35,to:36},
  {from:36,to:34},
  {from:37,to:34}, {from:37,to:36},

  {from:38,to:40}, {from:38,to:42}, {from:38,to:44}, 
  {from:39,to:38}, {from:39,to:40}, {from:39,to:42}, {from:39,to:44},
  {from:40,to:38}, {from:40,to:42}, {from:40,to:44},
  {from:41,to:38}, {from:41,to:40}, {from:41,to:42}, {from:41,to:44},
  {from:42,to:38}, {from:42,to:40}, {from:42,to:44},
  {from:43,to:38}, {from:43,to:40}, {from:43,to:42}, {from:43,to:44},
  {from:44,to:38}, {from:44,to:40}, {from:44,to:42},
  {from:45,to:38}, {from:45,to:40}, {from:45,to:42}, {from:45,to:44},

  {from:29,to:1}, {from:29,to:3}, {from:29,to:4}, {from:29,to:7}, {from:29,to:2}, {from:29,to:5},    
  {from:44,to:1}, {from:44,to:3}, {from:44,to:4}, {from:44,to:7}, {from:44,to:2}, {from:44,to:5},    
  {from:43,to:1}, {from:43,to:3}, {from:43,to:4}, {from:43,to:7}, {from:43,to:2}, {from:43,to:5},    
  {from:22,to:1}, {from:22,to:3}, {from:22,to:4}, {from:22,to:7}, {from:22,to:2}, {from:22,to:5},    
  {from:34,to:1}, {from:34,to:3}, {from:34,to:4}, {from:34,to:7}, {from:34,to:2}, {from:34,to:5},    
  
  {from:32,to:29},
  {from:29,to:15},{from:29,to:16},{from:29,to:17},
  {from:6,to:1},
  {from:6,to:8},
  {from:8,to:3},
];

// Create the network
const data = { nodes: nodes, edges: edges };
// Network options
const options: Options = {
  physics: {
    enabled: true,
    solver: "forceAtlas2Based",
    forceAtlas2Based: {
      gravitationalConstant: -1000,
      centralGravity: 0.05,
      springLength: 300,
      springConstant: 1,
    },
    maxVelocity: 50,
    stabilization: { iterations: 100 },
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