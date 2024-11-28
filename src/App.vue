<script setup lang="ts">
import NavigationDrawer from '@/components/NavigationDrawer.vue';
</script>

<template>
    <div class="container light">
        <div class="nav">
            <navigation-drawer></navigation-drawer>
        </div>
        <div class="view">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
}

.nav {
    height: 100%;
    width: 253px;
}

.view {
    flex: 1;
    margin: 10px;
}
</style>
