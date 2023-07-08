<template>
    <div>
        <header>
            <ul>
                <li>
                    <NuxtLink to="/">home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/meals/breakfast">breakfast</NuxtLink>
                </li>
            </ul>
        </header>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>