import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        analyze: true
    },
    nitro: {
        preset: 'netlify'
    }
})
