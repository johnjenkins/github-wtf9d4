// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['nuxt-security'],
  // Following configuration is only necessary to make Stackblitz work correctly.
  // For local projects, you do not need any configuration to try it out.
  security: {
    headers: {
      crossOriginResourcePolicy: 'cross-origin',
      contentSecurityPolicy: false,
      xFrameOptions: false,
    },
  },
});
