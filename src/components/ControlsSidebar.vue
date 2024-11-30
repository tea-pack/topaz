<template>
    <div class="show-controls">
    <div class="filters" @click="showingFilter=true">
        <span class="icon">
        <span class="material-symbols-outlined">
            filter_alt
        </span>
        </span>
        <span class="label">Фильтры</span>
    </div>
    <div class="sorts">
        <span class="icon">
        <span class="material-symbols-outlined">
            sort
        </span>
        </span>
        <span class="label">Столбцы и<br>сортировки</span>
    </div>
    </div>
    <div 
        class="filter" 
        :class="{'showing-filter': showingFilter}"
    >
    <div class="filter-header">
        <div class="filter-label">Фильтры</div>
        <span class="material-symbols-outlined" @click="showingFilter=false">
        close
        </span>
    </div>
        <range-picker></range-picker>
    </div>
</template>

<script setup lang="ts">
import RangePicker from "@/components/RangePicker.vue";
import { ref } from "vue"

const showingFilter = ref(false);
// const showingSort = ref(false);
</script>

<style scoped>
.show-controls {
  position: absolute;
  top: 30px;
  right: 10px;
  border: 1px solid var(--md-sys-color-outline);
  background: var(--md-sys-color-surface);
  font-weight: 700;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  font-family: "Roboto", sans-serif;
  z-index: 10;
}

.sorts, .filters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
}

.sorts:hover .icon, .filters:hover .icon {
  background: var(--md-sys-color-secondary-container);
}

.icon {
  width: 64px;
  height: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}

.label {
  font-weight: 500;
  font-size: 12px;
  padding: 5px;
}

.show-controls span {
  text-align: center;
}

.filter {
  position: absolute;
  top: 0;
  right: -100%;
  transition: right .2s;
  height: 100%;
  z-index: 10;
  border: 1px solid var(--md-sys-color-outline);
  background: var(--md-sys-color-surface);
}

.filter-header {
  display: flex;
  padding: 12px 12px 16px 24px;
}

.filter-label {
  font-family: "Roboto", sans-serif;
  flex: 1;
  padding-top: 12px;
}

.filter-header span {
  cursor: pointer;
  padding: 8px;
}

.showing-filter {
  right: 0px;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24
}
</style>