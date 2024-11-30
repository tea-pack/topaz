<template>
    <button
        :class="{ 'toggled': props.toggled }"
    >
        <span class="tick" v-if="props.toggled">✓</span>
        {{ props.label }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    toggled: boolean, 
    label: string
}>()

</script>

<style scoped>
button {
    padding: 12px !important;
    color: var(--md-sys-color-on-surface-variant) !important;
    background: var(--md-sys-color-surface) !important;
    border: 1px solid var(--md-sys-color-outline-variant) !important;
    border-radius: 8px !important;
    font-size: 14px !important;
    cursor: pointer !important;
    font-weight: 500 !important;
}

.toggled {
    background: var(--md-sys-color-secondary-container) !important;
    border: 1px solid var(--md-sys-color-secondary-container) !important;
}
</style>