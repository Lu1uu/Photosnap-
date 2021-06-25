import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stories from '@/views/Stories.vue'
import Features from '@/views/Features.vue'
import Pricing from '@/views/Pricing'

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
        component: Features,
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: Pricing,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
