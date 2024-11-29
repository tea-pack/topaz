<template>
    <div class="days">
        <day-button
            v-for="(day, index) in days"
            :label="day.label"
            :toggled="day.toggled"
            :key="day.label"
            @click="toggleDay(index)"
        ></day-button>
    </div>
</template>

<script setup lang="ts">
import DayButton from '@/components/DayButton.vue';
import {ref} from "vue"

const days = ref([
    { label: "Понедельник", toggled: false },
    { label: "Вторник", toggled: false },
    { label: "Среда", toggled: false },
    { label: "Четверг", toggled: false },
    { label: "Пятница", toggled: false },
    { label: "Суббота", toggled: false },
    { label: "Воскресенье", toggled: false },
])

function toggleDay(index: number) {
    days.value[index].toggled =  !days.value[index].toggled
    console.log(days.value[index].toggled)
}
</script>

<style scoped>
.days {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
</style>