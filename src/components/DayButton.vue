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
    padding: 12px;
    color: var(--md-sys-color-on-surface-variant);
    background: var(--md-sys-color-surface);
    border: 1px solid var(--md-sys-color-outline-variant);
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
}

.toggled {
    background: var(--md-sys-color-secondary-container);
    border: 1px solid var(--md-sys-color-secondary-container);
}
</style>