import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../components/paginae/domus/domus.vue";
import Batman from "../components/paginae/batman/Batman.vue";
import Simpsons from "../components/paginae/simpsons/Simpsons.vue";
import Responsum from "../components/paginae/responsum/Responsum.vue";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'home',
            component: Domus
        },
        {
            path: '/batman',
            name: 'batman',
            component: Batman
        },
        {
            path: '/simpsons',
            name: 'simpsons',
            component: Simpsons
        },
        {
            path: '/indecision',
            name: 'indecision',
            component: Responsum
        },
        {
            path: '/: pathMatch(.*)*',
            redirect:  '/'
        }
    ]
})