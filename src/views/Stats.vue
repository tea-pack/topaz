<template>
    <div class="stats">
        <div class="data">
            <data-table :data="mockData"></data-table>
            <sorted-bar-chart :data="mockData"></sorted-bar-chart>
        </div>
        <div class="show-controls">
          <div class="filters">
            <span class="icon">
              <span class="material-symbols-outlined">
                filter_alt
              </span>
            </span>
            <span class="label">Фильтры</span>
          </div>
          <div class="sorts">
            <span class="icon">
              <span class="material-symbols-outlined">
                sort
              </span>
            </span>
            <span class="label">Столбцы и<br>сортировки</span>
          </div>
        </div>
        <div 
          class="show-filter"
          @click="showingFilter = !showingFilter" 
        >
          {{ showingFilter ? "X" : "&larr;" }}
        </div>
        <div 
          class="filter" 
          :class="{'showing-filter': showingFilter}"
        >
            <range-picker></range-picker>
        </div>
    </div>
</template>

<script setup lang = "ts">
import RangePicker from '@/components/RangePicker.vue';
import DataTable, { ProgramRecord } from '@/components/DataTable.vue';
import SortedBarChart from "@/components/SortedBarChart.vue";
import { ref } from "vue"

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

const showingFilter = ref(false);

async function fetchUsers(url: string): Promise<ProgramRecord[]> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ProgramRecord[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}

const url = "http://localhost:8081/get-users";
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

.show-controls {
  position: absolute;
  top: 30px;
  right: 10px;
  border: 1px solid var(--md-sys-color-outline);
  background: var(--md-sys-color-surface);
  font-weight: 700;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  font-family: "Roboto", sans-serif;
  z-index: 10;
}

.sorts, .filters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
}

.sorts:hover .icon, .filters:hover .icon {
  background: var(--md-sys-color-secondary-container);
}

.icon {
  width: 64px;
  height: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}

.label {
  font-weight: 500;
  font-size: 12px;
  padding: 5px;
}

.show-controls span {
  text-align: center;
}

.filter {
  position: absolute;
  right: -500px;
  transition: right .2s;
}

.showing-filter {
  right: 10px;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24
}
</style>