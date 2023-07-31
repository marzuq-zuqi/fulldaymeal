<template>
  <div>Ooops, my error page not found: {{error.statusCode}}!!! </div>
  <p>{{error.message}}</p>
  <button class="btn m-7" @click="handleClearError">Go back to the homepage</button>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({redirect: "/", fatal: true})
</script>

<style>

</style>