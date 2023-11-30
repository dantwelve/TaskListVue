<template lang="">
    <h2 class="card-title">
        {{ task.title }}
        <AppStatus :status="task.status" />
    </h2>
    <p>
        <strong>
            <small>
                {{ task.deadline }}
            </small>
        </strong>
    </p>
    <button
        @click="navigate"
        class="btn primary"
    >
        Посмотреть
    </button>
</template>

<script>
import AppStatus from './AppStatus.vue'
import { useRouter } from 'vue-router'

export default {
    props: ['task'],
    components: { AppStatus },
    setup(props) {
        const router = useRouter()

        function navigate() {
            router.push('/task/' + props.task.id)
        }
        return { navigate }
    },
}
</script>

<style lang=""></style>
