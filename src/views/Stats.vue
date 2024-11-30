<template>
    <div class="stats">
        <div class="data">
            <data-table :data="mockData" :sort="sortParams"></data-table>
            <sorted-bar-chart :data="mockData"></sorted-bar-chart>
        </div>
        <controls-sidebar @update-sort="sort"></controls-sidebar>
    </div>
</template>

<script setup lang = "ts">
import ControlsSidebar from '@/components/ControlsSidebar.vue';
import DataTable, { ProgramRecord } from '@/components/DataTable.vue';
import SortedBarChart from "@/components/SortedBarChart.vue";
import { ref, computed } from "vue"

const sortParams = ref(
    [
        {title: "Канал", enabled: true, sort: 0},
        {title: "Программа", enabled: true, sort: 0},
        {title: "Уникальных клиентов", enabled: true, sort: 1},
        {title: "Среднее время просмотра", enabled: true, sort: 0},
    ]
)

function sort(sort: {title: string, enabled: boolean, sort: number}[]) {
    sortParams.value = sort
    // console.log(sortParams.value)
    // console.log("ABOBA")
}

const mockData: ProgramRecord[] = [
  { channel: "Первый канал", program: "Программа 1", uniqueClients: 120, watchTime: 423 },
  { channel: "Третий канал", program: "Новости", uniqueClients: 450, watchTime: 12 },
  { channel: "Четверг", program: "Лучший боевик", uniqueClients: 120, watchTime: 423 },
  { channel: "Автобус", program: "Мстители", uniqueClients: 764, watchTime: 554 },
  { channel: "Карусель", program: "Заголовок", uniqueClients: 92, watchTime: 23 },
  { channel: "Ноутбук", program: "henlo", uniqueClients: 54, watchTime: 420 },
  { channel: "Пятница", program: "Орел и Решка", uniqueClients: 123, watchTime: 47 },
  { channel: "Россия 1", program: "Вести", uniqueClients: 150, watchTime: 289 },
  { channel: "НТВ", program: "Сегодня", uniqueClients: 100, watchTime: 310 },
  { channel: "ТВ Центр", program: "Доктор", uniqueClients: 80, watchTime: 192 },
  { channel: "Культура", program: "Балет", uniqueClients: 60, watchTime: 215 },
  { channel: "Матч ТВ", program: "Футбол", uniqueClients: 220, watchTime: 400 },
  { channel: "СТС", program: "Кухня", uniqueClients: 140, watchTime: 360 },
  { channel: "РЕН ТВ", program: "Тайны", uniqueClients: 90, watchTime: 278 },
  { channel: "ТНТ", program: "Смех", uniqueClients: 180, watchTime: 425 },
  { channel: "ТВ+7", program: "Детектив", uniqueClients: 125, watchTime: 300 },
];



// async function fetchUsers(url: string): Promise<ProgramRecord[]> {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data: ProgramRecord[] = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching items:", error);
//     throw error;
//   }
// }

// const url = "http://localhost:8081/get-users";
// fetchUsers(url)
//     .then((items) => {
//         console.log("Fetched items:", items);
//     })
//     .catch((error) => {
//         console.error("Failed to fetch items:", error);
//     });



</script>

<style scoped>
.stats {
    display: flex;
    justify-content: space-between;
    flex: 1;
}

.data {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24
}
</style>