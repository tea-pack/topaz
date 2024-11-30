<template>
    <div class="sort-picker">
      <div class="header">
        <span>{{ title }}</span>
        <label class="toggle-switch">
          <input type="checkbox" v-model="enabled" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="sort-options" :class="{ disabled: !enabled }">
        <button
          class="sort-btn"
          :class="{ active: sort === 1 }"
          @click="updateSort(1)"
          :disabled="!enabled"
        >
          ↑ По возрастанию
        </button>
        <button
          class="sort-btn"
          :class="{ active: sort === 0 }"
          @click="updateSort(0)"
          :disabled="!enabled"
        >
          Не сортировать
        </button>
        <button
          class="sort-btn"
          :class="{ active: sort === -1 }"
          @click="updateSort(-1)"
          :disabled="!enabled"
        >
          ↓ По убыванию
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
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 1rem;
    background-color: #fdf7f4;
    font-family: Arial, sans-serif;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 20px;
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
    background-color: #4caf50;
  }
  
  input:checked + .slider:before {
    transform: translateX(14px);
  }
  
  .sort-options {
    display: flex;
    gap: 0.5rem;
  }
  
  .sort-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  
  .sort-btn {
    padding: 0.5rem;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
  }
  
  .sort-btn.active {
    background-color: #f5c6a5;
    color: #fff;
  }
  
  .sort-btn:disabled {
    cursor: not-allowed;
  }
  </style>