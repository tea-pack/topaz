<template>
<div class="time-picker">
    <span class="label">
        {{ props.label }}
    </span>

    <div class="clock">
        <input type="text">
        <span class="column">:</span>
        <input type="text">
    </div>

    <div class="clock-label">
        <span class="hours">Часы</span>
        <span class="minutes">Минуты</span>
    </div>
</div>
</template>

<script setup lang = "ts">
const props = defineProps<{
    label: string
}>()
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