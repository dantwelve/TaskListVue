<template>
    <the-navbar></the-navbar>
    <div class="container with-nav">
        <router-view />
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
    components: {
        TheNavbar,
    },
    setup() {
        const localTasks = JSON.parse(localStorage.getItem('tasks'))
        const store = useStore()

        onMounted(() => {
            if (!localTasks) {
                return
            }
            store.state.tasks = localTasks
        })
    },
}
</script>

<style></style>
