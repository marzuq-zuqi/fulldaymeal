<template>
    <div>
        <p>{{ id }}</p>
        <p>do you work?</p>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
</script>

<style scoped>

</style>