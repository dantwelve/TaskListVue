import { createRouter, createWebHistory } from 'vue-router'
import AppTasks from '@/views/AppTasks.vue'
import NewTask from '@/views/NewTask.vue'
import AppTask from '@/views/AppTask.vue'

const routes = [
    { path: '/', component: AppTasks },
    { path: '/new', component: NewTask },
    { path: '/task/:id', component: AppTask },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})



export default router
