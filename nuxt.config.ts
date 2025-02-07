//--------@/nuxt.config.ts---------------------------------------------------->
export default defineNuxtConfig({
  telemetry: false, // F Telemetry
  compatibilityDate: '2024-09-28',
  devtools: { enabled: false },

  modules: ['@nuxt/ui', '@nuxt/content', '@nuxtjs/mdc'],
  content: {
    documentDriven: true,
  },
});
//--------@/nuxt.config.ts----------------------------------------------------->
