<template>
    <div class="data-table">
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
        <table>
            <thead>
                <tr>
                    <th v-if="sort[0].enabled">Канал</th>
                    <th v-if="sort[1].enabled">Программа</th>
                    <th v-if="sort[2].enabled">Уникальных клиентов</th>
                    <th v-if="sort[3].enabled">Среднее время просмотра</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in sortedValues.slice(from, to)" :key="row.channel">
                    <td v-if="sort[0].enabled">{{ row.channel }}</td>
                    <td v-if="sort[1].enabled">{{ row.program }}</td>
                    <td v-if="sort[2].enabled">{{ row.uniqueClients }}</td>
                    <td v-if="sort[3].enabled">{{ row.watchTime }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup lang = "ts">
import { ref, useTemplateRef, watch, computed } from 'vue'

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
    data: ProgramRecord[],
    sort: {title: string, enabled: boolean, sort: number}[]
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

const sortedValues = computed(() => {
    console.log("rearranging")
    // console.log(sortParams.value[2].sort)
    // console.log(mockData.sort((a, b)=>sortParams.value[2].sort * (a.uniqueClients - b.uniqueClients)))
    console.log([...props.data].sort((a, b)=>{return (props.sort[2].sort * (a.uniqueClients - b.uniqueClients))}))
    return [...props.data].sort((a, b)=>{return (props.sort[2].sort * (a.uniqueClients - b.uniqueClients))})
})
</script>

<style scoped>
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
    color: var(--md-sys-color-on-surface);
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
    position: relative;
    color: var(--md-sys-color-on-surface);
}

.controls {
    flex: 1;
    display: flex;
    justify-content: center;
}

.showing {
    position: absolute;
    right: 20px;
}

input {
    background: none;
    box-shadow: none;
    border-radius: 4px;
    border: 1px solid var(--md-sys-color-outline-variant);
    padding: 10px;
    color: var(--md-sys-color-on-surface-variant);
}

button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: var(--md-sys-color-on-surface-variant);
}
</style>