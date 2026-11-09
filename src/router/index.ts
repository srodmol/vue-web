import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../components/paginae/domus/domus.vue";
import Batman from "../components/paginae/batman/Batman.vue";
import Primus from "../components/paginae/simpsons/Primus.vue";
import Responsum from "../components/paginae/responsum/Responsum.vue";
import Layout from "@/components/paginae/simpsons/Layout.vue";
import Circa from "@/components/paginae/simpsons/Circa.vue";
import Collection from "@/components/paginae/simpsons/Collection.vue";
import Character from "@/components/paginae/simpsons/Character.vue";

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
            children: [
                {
                    path: '',   // /simpsons
                    name: 'simpsons',
                    component: Primus
                },
                {
                    path: 'about',
                    component: Layout,
                    children: [
                        {
                            path: '',   // /simpsons/about
                            name: 'simpsons-about',
                            component: Circa
                        }
                    ]
                },
                {
                    path: 'gallery',
                    component: Layout,
                    children: [
                        {
                            path: '',   // /simpsons/gallery
                            name: 'simpsons-characters',
                            component: Collection
                        },
                        {
                            path: ':id',   // /simpsons/gallery/:id
                            name: 'simpsons-character',
                            component: Character
                        }
                    ]
                }
            ]
        },
        {
            path: '/indecision',
            name: 'indecision',
            component: Responsum
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
})
