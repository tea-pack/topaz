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
        <date-picker></date-picker>
    </div>

    <div class="day" v-if="active==2">
        <day-picker></day-picker>
    </div>

    <div class="time" v-if="active==3">
        <time-picker :label="`Начало`"></time-picker>
        <time-picker :label="`Конец`"></time-picker>
    </div>

    <div class="buttons">
        <button class="clear">Применить</button>
        <button class="accept">Очистить</button>
    </div>
</div>    
</template>

<script setup lang = "ts">
import { ref } from "vue"
import TimePicker from "@/components/TimePicker.vue"
import DatePicker from "@/components/DatePicker.vue";
import DayPicker from "@/components/DayPicker.vue";

const active = ref(3)

function setActive(tab: number) {
    active.value = tab
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
}

button {
    padding: 14px 0;
    margin: 0 34px;
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
    margin: 16px 16px 33px 16px;
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
</style>