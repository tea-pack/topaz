<template>
<div class="time-picker">
    <span class="label">
        {{ props.label }}
    </span>

    <div class="clock">
        <input type="text" v-model="internalHours">
        <span class="column">:</span>
        <input type="text" v-model="internalMinutes">
    </div>

    <div class="clock-label">
        <span class="hours">Часы</span>
        <span class="minutes">Минуты</span>
    </div>
</div>
</template>

<script setup lang = "ts">
import { ref, watch } from "vue"

const time = defineModel<number>({required: true})

const props = defineProps<{
    label: string
}>()

let initialMinutes = (time.value % 60).toString()
let initialHours = Math.floor(time.value / 60).toString()

const internalMinutes = ref(initialMinutes == "0" ? "" : initialMinutes)!
const internalHours = ref(initialHours == "0" ? "" : initialHours)

watch(internalHours, updateTime)
watch(internalMinutes, updateTime)

const clearTime = () => {
    internalHours.value = "";
    internalMinutes.value = "";
};

defineExpose({ clearTime });

function updateTime() {
    let minutes = "";
    if (internalMinutes.value != undefined) {
        minutes = internalMinutes.value
    } else {
        minutes = "0"
    }

    let hours = "";
    if (internalHours.value != undefined) {
        hours = internalHours.value
    } else {
        hours = "0"
    }

    let minutesInt = parseInt(minutes)
    let hoursInt = parseInt(hours)
    if (isNaN(minutesInt)) {
        minutesInt = 0
    }
    if (isNaN(hoursInt)) {
        hoursInt = 0
    }

    time.value = minutesInt + hoursInt * 60
}

</script>

<style scoped>
.time-picker {
    background: var(--md-sys-color-surface-container-high);
    padding: 24px;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
}

.label {
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 20px;
    color: var(--md-sys-color-on-surface-variant);
}

.clock {
    display: flex;
    align-items: center;
}

input {
    font-size: 45px;
    width: 121px;
    border-radius: 8px;
    height: 72px;
    background: var(--md-sys-color-surface-container-highest);
    border: 2px solid var(--md-sys-color-surface-container-highest);
    text-align: center;
}

input:focus {
    border: 2px solid var(--md-sys-color-primary);
    background: var(--md-sys-color-primary-container);
    outline: none;
}

.column {
    font-size: 57px;
    height: 72px;
    line-height: 66px;
}

.clock-label {
    margin-top: 7px;
    font-size: 12px;
    color: var(--md-sys-color-on-surface-variant);
}

.hours {
    display: inline-block;
    width: 135px;
}
</style>