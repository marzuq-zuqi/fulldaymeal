<template>
    <div>
        <p>This is the breakfast section</p>
        <p>welcome {{ data }}</p>
    </div>
</template>

<script setup>
    useHead({
        title: 'FullDayMeal',
        meta: [
            {name: 'description', content: "breakfast or lunch"}
        ]
    })

    const {data} = await useFetch(`server/api?name=Dapo`, {
        method: 'post',
        body: {'age': 20}
    })
</script>

<style lang="scss" scoped>

</style>