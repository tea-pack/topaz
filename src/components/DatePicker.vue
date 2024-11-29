<template>
    <div class="picker">
        <input type="text">
        <div class="label">
            {{ props.label }}
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    label: string
}>()
</script>

<style scoped>
.picker {
    position: relative;
}

.label {
    position: absolute;
    top: -10px;
    left: 16px;
    background: var(--md-sys-color-surface);
    font-weight: 400;
    font-size: 12px;
    padding: 5px;
}

input {
    padding: 16px;
    border-radius: 4px;
    background: var(--md-sys-color-surface);
    border: 1px solid var(--md-sys-color-outline);
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    color: var(--md-sys-color-on-surface);
}

input:focus {
    border: 3px solid var(--md-sys-color-primary);
    outline: none
}
</style>