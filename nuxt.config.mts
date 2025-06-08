export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  components: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3000/api', // Ganti dengan URL backend Anda
    },
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    exposeConfig: true,
  },
});