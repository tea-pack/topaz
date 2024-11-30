<template>
<div class="range-picker">
    <div class="header">
        <h3>Дата и время</h3>
        <p>Выберите фильтры по дате и времени</p>
    </div>
    <div class="selector">
        <button
            @click="setActive(1)"
            :class="{ active: active === 1 }"
        >Период</button>
        <button
            @click="setActive(2)"
            :class="{ active: active === 2 }"
        >Дни</button>
        <button
            @click="setActive(3)"
            :class="{ active: active === 3 }"
        >Время</button>

    </div>

    <div class="date" v-if="active==1">
        <date-picker :label="`Начало`" v-model="dateRange.start" ref="dateStart"></date-picker>
        <date-picker :label="`Конец`" v-model="dateRange.end" ref="dateEnd"></date-picker>
    </div>

    <div class="day" v-if="active==2">
        <div class="days">
        <day-button
            v-for="(day, index) in days"
            :label="day.label"
            :toggled="day.toggled"
            :key="day.label"
            @click="toggleDay(index)"
        ></day-button>
    </div>
    </div>

    <div class="time" v-if="active==3">
        <time-picker :label="`Начало`" v-model="timeRange.start" ref="timeStart"></time-picker>
        <time-picker :label="`Конец`" v-model="timeRange.end" ref="timeEnd"></time-picker>
    </div>

    <div class="buttons">
        <button class="clear" @click="clear()">Очистить</button>
        <button class="accept" @click="update()">Применить</button>
    </div>

</div>
<button class="save" @click="save()">Сохранить фильтр</button>

</template>

<script setup lang = "ts">
import { ref, reactive, useTemplateRef } from "vue"
import TimePicker from "@/components/TimePicker.vue"
import DatePicker from "@/components/DatePicker.vue";
import DayButton from '@/components/DayButton.vue';


const active = ref(3)
const timeRange = reactive({ start: 0, end: 0 });
const timeStart = useTemplateRef('timeStart')
const timeEnd = useTemplateRef('timeEnd')

const dateRange = reactive({ start: "", end: "" });
const dateStartRef = useTemplateRef('dateStart')
const dateEndRef = useTemplateRef('dateEnd')


const days = ref([
    { label: "Понедельник", toggled: false },
    { label: "Вторник", toggled: false },
    { label: "Среда", toggled: false },
    { label: "Четверг", toggled: false },
    { label: "Пятница", toggled: false },
    { label: "Суббота", toggled: false },
    { label: "Воскресенье", toggled: false },
])



function setActive(tab: number) {
    active.value = tab
}

function clear() {
    timeStart.value?.clearTime()
    timeEnd.value?.clearTime()
    timeRange.start=0
    timeRange.end=0
    days.value.forEach((day)=>day.toggled=false)
    dateRange.start = ""
    dateRange.end = ""

    dateStartRef.value?.clearDate()
    dateEndRef.value?.clearDate()
}

function toggleDay(index: number) {
    days.value[index].toggled =  !days.value[index].toggled
}

function save() {
    let data = `
        {
            "start_date": "${dateRange.start}",
            "end_date": "${dateRange.end}",
            "is_monday": ${days.value[0].toggled},
            "is_tuesday": ${days.value[1].toggled},
            "is_wednesday": ${days.value[2].toggled},
            "is_thursday": ${days.value[3].toggled},
            "is_friday": ${days.value[4].toggled},
            "is_saturday": ${days.value[5].toggled},
            "is_sunday": ${days.value[6].toggled},
            "start_time": "${timeRange.start}",
            "end_time": "${timeRange.end}"
        }
    `

    document.cookie = `${encodeURIComponent(Date.now())}=${encodeURIComponent(data)}; path=/`;
}

function update() {
    let data = `
        {
            "start_date": "${dateRange.start}",
            "end_date": "${dateRange.end}",
            "is_monday": ${days.value[0].toggled},
            "is_tuesday": ${days.value[1].toggled},
            "is_wednesday": ${days.value[2].toggled},
            "is_thursday": ${days.value[3].toggled},
            "is_friday": ${days.value[4].toggled},
            "is_saturday": ${days.value[5].toggled},
            "is_sunday": ${days.value[6].toggled},
            "start_time": "${timeRange.start}",
            "end_time": "${timeRange.end}"
        }
    `

    console.log(data)
}
</script>

<style scoped>
h3 {
    font-family: "Roboto", sans-serif !important;
    height: 24px;
    font-size: 16px;
    font-weight: 700;
}

p {
    font-size: 14px;
    height: 20px;
    line-height: 20px;
}

.header {
    padding: 24px 17px;
}

.range-picker {
    font-family: "Roboto", sans-serif;
    background: var(--md-sys-color-background);
    border: 1px solid var(--md-sys-color-outline-variant);
    border-radius: 12px;
    width: 400px;
    margin: 20px 20px 5px 20px;
}

button {
    padding: 14px 34px;
    font-weight: 500;
    font-size: 14px;
    background: none;
    border: none;
    cursor: pointer;
}

.active {
    /* before */
    border-bottom: 3px solid var(--md-sys-color-primary); 
}

.selector {
    margin-bottom: 18px;
    margin-right: 20px;
    margin-left: 20px;
    display: flex;
    flex-wrap: nowrap;
}

.time {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 42px;
}

.buttons {
    display: flex;
    justify-content: right;
    gap: 8px;
    text-align: right;
    margin: 16px;
}

.buttons button {
    padding: 10px 24px;
    border-radius: 100px;
    margin: 0;
}

.clear {
    border: 1px solid var(--md-sys-color-outline);
    color: var(--md-sys-color-primary);
}

.accept {
    background: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
}

.day {
    padding: 0 20px;
    width: 358px;

}

.date {
    display: flex;
    flex-direction: column;
    width: 303.12px;
    gap: 20px;
    margin: 0 43px;
}

.days {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.save {
    background: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    margin: 0 125px;
    border-radius: 8px;
}
</style>