import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AnimalCatalog from '@/components/AnimalCatalog.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/catalog', component: AnimalCatalog }
]
const router = createRouter({
    history: createWebHistory(),
    base: "http://localhost:8080",
    routes,
})

export default router