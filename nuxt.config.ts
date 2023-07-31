// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Full Day Meal',
      meta: [
        {name: 'description', content: 'Order for your meal'}
      ],
      link: [
        {}
      ]
    }
  }
})
