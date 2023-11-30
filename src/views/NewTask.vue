<template>
    <form
        class="card"
        @submit.prevent="submitForm"
    >
        <h1>Создать новую задачу</h1>
        <div class="form-control">
            <label for="title">Название</label>
            <input
                type="text"
                id="title"
                v-model="newTask.title"
            />
        </div>

        <div class="form-control">
            <label for="date">Дата дэдлайна</label>
            <input
                type="date"
                id="date"
                v-model="newTask.deadline"
            />
        </div>

        <div class="form-control">
            <label for="description">Описание</label>
            <textarea
                v-model="newTask.description"
                id="description"
            ></textarea>
        </div>

        <button
            :disabled="!isValid"
            class="btn primary"
        >
            Создать
        </button>
    </form>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const newTask = reactive({
    status: 'active',
    title: '',
    description: '',
    deadline: '',
})

const isValid = computed(() => newTask.title && newTask.description && newTask.deadline)

function submitForm() {
    if (new Date(newTask.deadline) < new Date()) {
        newTask.status = 'cancelled'
    }
    newTask.id = Date.now()
    store.commit('addNewTask', newTask)
    router.push('/')
    localStorage.setItem('tasks', JSON.stringify(store.state.tasks))
}
</script>
