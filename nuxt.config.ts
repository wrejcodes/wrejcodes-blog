// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/fontaine',
        '@nuxt/image-edge',
    ],
    content: {
        navigation: {
            fields: ['date', 'image', 'tags'],
        },
        highlight: {
            theme: 'github-dark',
        },
    },
    image: {
        provider: 'ipx',
    }, 
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.scss'
    },
})
