<template>
    <div
        v-if="task"
        class="card"
    >
        <h2>{{ task.title }}</h2>
        <p><strong>Статус</strong>: <AppStatus :status="task.status" /></p>
        <p><strong>Дэдлайн</strong>: {{ task.deadline }}</p>
        <p><strong>Описание</strong>: {{ task.description }}</p>
        <div>
            <button
                class="btn"
                @click="pend"
            >
                Взять в работу
            </button>
            <button
                class="btn primary"
                @click="finish"
            >
                Завершить
            </button>
            <button
                class="btn danger"
                @click="cancel"
            >
                Отменить
            </button>
        </div>
    </div>
    <h3
        v-else
        class="text-white center"
    >
        Задачи с id = <strong>{{ route.params.id }}</strong> нет.
    </h3>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus.vue'

export default {
    components: { AppStatus },
    setup() {
        const route = useRoute()
        const store = useStore()
        const task = store.getters.tasks.find(task => task.id == route.params.id)

        function pend() {
            task.status = 'pending'
            localStorage.setItem('tasks', JSON.stringify(store.state.tasks))
        }
        function finish() {
            task.status = 'done'
            localStorage.setItem('tasks', JSON.stringify(store.state.tasks))
        }
        function cancel() {
            task.status = 'cancelled'
            localStorage.setItem('tasks', JSON.stringify(store.state.tasks))
        }

        return {
            route,
            task,
            pend,
            finish,
            cancel,
        }
    },
}
</script>

<style scoped></style>
