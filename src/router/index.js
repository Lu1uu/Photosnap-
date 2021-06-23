import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stories from '@/views/Stories.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/stories',
        name: 'Stories',
        component: Stories,
    },
    {
        path: '/features',
        name: 'features',
        redirect: '/',
    },
    {
        path: '/pricing',
        name: 'pricing',
        redirect: '/',
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
