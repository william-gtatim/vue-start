import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
const Preset = definePreset(Aura, {

    semantic: {
        primary: {
            50: 'oklch(97% 0.014 254.604)',
            100: 'oklch(93.2% 0.032 255.585)',
            200: 'oklch(88.2% 0.059 254.128)',
            300: 'oklch(80.9% 0.105 251.813)',
            400: 'oklch(70.7% 0.165 254.624)',
            500: 'oklch(62.3% 0.214 259.815)',
            600: 'oklch(54.6% 0.245 262.881)',
            700: 'oklch(48.8% 0.243 264.376)',
            800: 'oklch(42.4% 0.199 265.638)',
            900: 'oklch(37.9% 0.146 265.522)',
            950: 'oklch(28.2% 0.091 267.935)',
        },
        surface: {
            50: '{gray.50}',
            100: '{gray.100}',
            200: '{gray.200}',
            300: '{gray.300}',
            400: '{gray.400}',
            500: '{gray.500}',
            600: '{gray.600}',
            700: '{gray.700}',
            800: '{gray.800}',
            900: '{gray.900}',
            950: '{gray.950}'
        },
        formField: {
            paddingX: "0.625rem",
            paddingY: "0.375rem",
            borderRadius: "{border.radius.md}",
            transitionDuration: "{transition.duration}",

            sm: {
                paddingX: "0.625rem",
                paddingY: "0.375rem",
                fontSize: "0.875rem"
            },

            lg: {
                paddingX: "0.875rem",
                paddingY: "0.625rem",
                fontSize: "1.125rem"
            }
        }
    },

});

import { VueQueryPlugin } from '@tanstack/vue-query'


const app = createApp(App)
app.use(VueQueryPlugin)
app.use(PrimeVue, {
    theme: {
        preset: Preset
    }
});
app.use(createPinia())
app.use(router)

app.mount('#app')
