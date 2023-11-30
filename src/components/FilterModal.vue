<template lang="">
    <form class="card card-w30">
        <div class="form-control">
            <select v-model="filter">
                <option
                    selected
                    value=""
                >
                    Выбрать все
                </option>
                <option value="active">Активные</option>
                <option value="pending">В работе</option>
                <option value="done">Завершенные</option>
                <option value="cancelled">Отмененные</option>
            </select>
        </div>
    </form>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

const filter = ref('')
const store = useStore()

watch(filter, () => {
    store.commit('setFilter', filter)
    console.log(store.state.filter)
})
</script>

<style lang=""></style>
