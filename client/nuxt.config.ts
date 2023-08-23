// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
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