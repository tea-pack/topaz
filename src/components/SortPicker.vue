<template>
    <div class="sort-picker">
      <div class="header">
        <span class="label">{{ title }}</span>
        <label class="toggle-switch">
          <input type="checkbox" v-model="enabled" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="sort-options" :class="{ disabled: !enabled }">
        <button
          class="sort-btn btn-1"
          :class="{ active: sort === 1 }"
          @click="updateSort(1)"
          :disabled="!enabled"
        >
        <span class="material-symbols-outlined" v-if="sort === 1">
            arrow_upward
        </span>
            По возрастанию
        </button>
        <button
          class="sort-btn btn-2"
          :class="{ active: sort === 0 }"
          @click="updateSort(0)"
          :disabled="!enabled"
        >
          Не сортировать
        </button>
        <button
          class="sort-btn btn-3"
          :class="{ active: sort === -1 }"
          @click="updateSort(-1)"
          :disabled="!enabled"
        >
            <span class="material-symbols-outlined" v-if="sort === -1">
                arrow_downward
            </span>
            По убыванию
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SortPicker",
    props: {
      title: {
        type: String,
        required: true,
      },
      modelValue: {
        type: Boolean,
        required: true,
      },
      sortValue: {
        type: Number,
        required: true,
      },
    },
    emits: ["update:modelValue", "update:sortValue"],
    computed: {
      enabled: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
        },
      },
      sort: {
        get() {
          return this.sortValue;
        },
        set(value) {
          this.$emit("update:sortValue", value);
        },
      },
    },
    methods: {
      updateSort(value) {
        this.sort = value;
      },
    },
  };
  </script>
  
<style scoped>
.sort-picker {
    margin: 10px 20px;
    font-family: "Roboto", sans-serif;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.header .label {
    padding: 16px;
}

.toggle-switch {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 20px;
    margin: 20px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 34px;
    cursor: pointer;
}

.slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: var(--md-sys-color-primary);
}

input:checked + .slider:before {
    transform: translateX(14px);
}

.sort-options {
    display: flex;
}

.sort-options.disabled {
    opacity: 0.5;
    pointer-events: none;
}

.sort-btn {
    border: 1px solid var(--md-sys-color-outline);
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-1 {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    padding: 10px 0;
    width: 160px;
}

.btn-2 {
    padding: 10px 27px;
    border-left: none;
    border-right: none;
    width: 160px;
}

.btn-3 {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    padding: 10px 0x;
    width: 160px;
}

.sort-btn.active {
    background-color: var(--md-sys-color-secondary-container);
}

.sort-btn:disabled {
    cursor: not-allowed;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 12 !important;
  font-size: 16px;
  margin-right: 11px;
}
</style>