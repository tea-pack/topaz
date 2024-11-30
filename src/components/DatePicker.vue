<template>
    <div class="picker">
        <input type="text" v-model="internalDate">
        <div class="label">
            {{ props.label }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
const props = defineProps<{
    label: string
}>()

const date = defineModel<string>({required: true})

let initialDate = date.value;
const internalDate = ref(initialDate)
watch(internalDate, () => {
    date.value = internalDate.value
})

const clearDate = () => {
    internalDate.value = "";
};

defineExpose({ clearDate });
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