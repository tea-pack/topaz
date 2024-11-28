import { createRouter, createWebHashHistory } from "vue-router";
import Stats from "@/views/Stats.vue";
import Patterns from "@/views/Patterns.vue";
import Recommend from "@/views/Recommend.vue";
import Settings from "@/views/Settings.vue";
import Help from "@/views/Help.vue";
import About from "@/views/About.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/stats", component: Stats},
        { path: "/patterns", component: Patterns},
        { path: "/recommend", component: Recommend},
        { path: "/settings", component: Settings},
        { path: "/help", component: Help},
        { path: "/about", component: About}
    ]
});

export default router;