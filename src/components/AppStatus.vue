<template>
    <span
        v-if="status === 'active'"
        class="badge primary"
        >Активен</span
    >
    <span
        v-else-if="status === 'done'"
        class="badge primary"
        >Завершен</span
    >
    <span
        v-else-if="status === 'pending'"
        class="badge warning"
        >Выполняется</span
    >
    <span
        v-else-if="status === 'cancelled'"
        class="badge danger"
        >Отменен</span
    >
</template>
<script>
export default {
    props: ['status'],
}
</script>
