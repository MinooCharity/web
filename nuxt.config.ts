import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/sitemap','nuxt-jsonld',
    ],
    plugins:[
        { src: '~/plugins/checkUser.js', mode: 'client' },
    ],
    build: {
        transpile: ['@heroicons/vue','@headlessui/vue'],
    },
    css: [
        '@/assets/main.css',
       'leaflet/dist/leaflet.css',
    ],
    head : {
        title : "تولیدی مینو ( خیریه )",
        Link:
            {rel:'icon',type:'image' , href: '/favicon.ico'}
    }

})
