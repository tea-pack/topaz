<template>
    <div class="data-table">
        <table>
            <tr>
                <th>Канал</th>
                <th>Программа</th>
                <th>Уникальных клиентов</th>
                <th>Среднее время просмотра</th>
            </tr>
            <tr v-for="row in props.data.slice(from, to)">
                <td>{{ row.channel }}</td>
                <td>{{ row.program }}</td>
                <td>{{ row.uniqueClients }}</td>
                <td>{{ row.watchTime }}</td>
            </tr>
        </table>
        <div class="table-footer">
            <div class="controls">
                <button @click="last">&larr;</button>
                <input 
                    type="text" 
                    inputmode="numeric" 
                    autocomplete="off" 
                    placeholder="Введите номер ряда..."
                    @keypress.enter="find"
                    ref="recnum"
                >
                <button @click="next">&rarr;</button>
            </div>
            <div class="showing">Ряды {{ from + 1 }}-{{ to }} из {{ props.data.length }}</div>
        </div>
    </div>
</template>

<script setup lang = "ts">
import { ref, useTemplateRef } from 'vue'

export interface ProgramRecord {
    channel: string;
    program: string;
    uniqueClients: number;
    watchTime: number;
}


const barChart = useTemplateRef('recnum')!

function find() {
    let str = barChart.value?.value
    if (str != undefined) {
        let n = parseInt(str) - 1
        if (n > props.data.length) {
            return
        }
        from.value = n - n % 5
        to.value = Math.min(from.value + 5, props.data.length)
        if (barChart.value != null) {
            barChart.value.value = ""
        }
    }
}

const props = defineProps<{
    data: ProgramRecord[]
}>()

const from = ref(0)
const to = ref(5)

function next() {
    if (from.value + 5 < props.data.length) {
        from.value += 5;
        to.value = Math.min(from.value + 5, props.data.length)
    } 
}

function last() {
    if (from.value - 5 >= 0) {
        from.value -= 5;
        to.value = Math.min(from.value + 5, props.data.length)
    } 
}



</script>

<style>
.data-table {
    background: var(--md-sys-color-surface);
    font-family: "Roboto", sans-serif !important;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--md-sys-color-outline);
    width: 800px;
    /* height: 410px; */
}

th, td {
    padding: 8px 16px !important;
    font-size: 16px !important;
    height: 57px;
    line-height: 41px !important;
    text-align: left;
}

td {
    border-bottom: 1px solid var(--md-sys-color-outline-variant) !important;
}

.table-footer {
    padding: 12px;
    display: flex;
    align-items: center;
    align-self: stretch;
    margin: 0 30px;
}

.controls {
    flex: 1;
    display: flex;
    justify-content: center;
    /* margin-right: -100px; */
    position: relative;
}

.showing {
    position: absolute;
    right: 220px;
}

input {
    background: none;
    box-shadow: none;
    border-radius: 4px;
    border: 1px solid var(--md-sys-color-outline-variant);
    padding: 10px;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
}
</style>