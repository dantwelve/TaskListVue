<template>
    <h1
        v-if="!haveTasks"
        class="text-white center"
    >
        Задач пока нет
    </h1>
    <template v-else>
        <div class="menu">
            <h3 class="text-white">Всего активных задач: {{ store.getters.activeTasks }}</h3>
            <button
                style="align-self: flex-end"
                class="btn"
            >
                Фильтр
            </button>
        </div>
        <FilterModal />
        <div
            class="card"
            :key="task.id"
            v-for="task in store.getters.filteredTasks"
        >
            <TaskBody :task="task" />
        </div>
    </template>
</template>

<script>
import { ref } from 'vue'
import TaskBody from '../components/TaskBody.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import FilterModal from '@/components/FilterModal.vue'

export default {
    components: { TaskBody, FilterModal },
    setup() {
        const haveTasks = ref(true)
        const store = useStore()
        const router = useRouter()

        return {
            haveTasks,
            store,
            router,
        }
    },
}
</script>

<style>
.menu {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}
</style>
