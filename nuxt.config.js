require('dotenv').config()
export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'nugya',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Calligraffitti&family=Nunito&display=swap" }
        ],
        script: [{
            src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"
        }, {
            src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/TextPlugin.min.js"
        }, {
            src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/EasePack.min.js"
        }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    loading: {
        color: 'yellow'
    },

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/apollo',
        '@nuxtjs/dotenv',
        '@nuxtjs/markdownit',
        '@nuxtjs/strapi',
        '@nuxtjs/toast',
        '@nuxtjs/pwa'
    ],

    pwa: {
        meta: {
            title: 'NUGYA',
            author: 'Matthew',
        },
        manifest: {
            name: 'NUGYA',
            short_name: 'NUGYA',
            lang: 'en',
            display: 'standalone',
            theme_color: '#000',
        },
        workbox: {
            runtimeCaching: [{
                    urlPattern: 'https://fonts.googleapis.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },

                },
                {
                    urlPattern: 'https://fonts.gstatic.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },

                },
                {
                    urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },

                }
            ]
        }
    },

    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        entities: ['executives', 'members', 'users', 'messages', ]
    },

    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: true,
        injected: true,
    },

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: process.env.GRAPHQL_URL || 'http://localhost:1337/graphql'
            }
        }
    },


    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}