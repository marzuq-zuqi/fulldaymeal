<template>
    <div>
        <Head>
            <Title></Title>
            <Meta name="description" :content="meal.strMeal"/>
        </Head>
        <p>{{ id }}</p>
        <p>{{ meal.id }}</p>
        <MealDetail :meal="meal"/>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const uri = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id

    // const {data: meal} = useFetch(uri, {key: id})

    // if(!meal.strId){
    //     throw createError({statusCode: 503, message: "meal not found"})
    // }

</script>

<style scoped>

</style>