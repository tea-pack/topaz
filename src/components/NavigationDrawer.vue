<script setup lang = "ts">
const topRoutes = [
    {icon: "groups", name: "Cтатистика", route: "/"},
    {icon: "search", name: "Анализ закономерностей", route: "/patterns"},
    {icon: "favorite", name: "Рекомендации", route: "/recommend"},
]
const bottomRoutes = [
    {icon: "settings", name: "Настройки", route: "/settings"},
    {icon: "account_circle", name: "Помошь", route: "/help"},
    {icon: "help", name: "О приложении", route: "/about"},
]
</script>

<template>
    <nav>
        <h2>Topaz</h2>
        <router-link
            v-for="route in topRoutes"
            :to="route.route"
            class="link"
        >
            <span class="material-symbols-outlined">{{ route.icon }}</span>
            <span>{{ route.name }}</span>
        </router-link>
        <div class="divider">&nbsp;</div>
        <router-link
            v-for="route in bottomRoutes"
            :to="route.route"
            class="link"
        >
            <span class="material-symbols-outlined">{{ route.icon }}</span>
            <span>{{ route.name }}</span>
        </router-link>
    </nav>
</template>

<style scoped>


h2 {
    padding: 18px 16px;
    height: 56px;
    color: var(--md-sys-color-on-surface-variant);
    font-weight: 500;
    font-size: 14px;
}

nav {
    position: fixed;
    font-family: "Roboto", sans-serif;
    padding: 12px;
    display: flex;
    flex-direction: column;
    background-color: var(--md-sys-color-surface-container-low);
    border-radius: 16px;
    height: 100%; 
    z-index: 8
}

.link {
    padding: 12px;
    text-decoration: none;
    border-radius: 28px;
    color: var(--md-sys-color-on-surface-variant);
    line-height: 32px;
    font-size: 14px;
    font-weight: 500;
    height: 56px;
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
}

.link:hover {
    /* TODO: fix color */
    background-color: rgb(237, 224, 220);
    /* transition: background-color .1s; */
}

.router-link-active {
    background: none  !important;
    color: var(--md-sys-color-on-secondary-container);
    font-weight: 600;
}

.link.router-link-active::before  {
    opacity: 1;
    transform: scaleX(1);
}

.link::before {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: scaleX(.32);
    transition-duration: .2s;
    transition-property: transform,opacity;
    transition-timing-function: linear;
    border-radius: 100px;
    background: var(--md-sys-color-secondary-container);
    content: "";
    z-index: -1;
    left: 0;
}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.divider {
    height: 1px;
    background-color: var(--md-sys-color-outline-variant);
    margin: 0 16px;
}
</style>