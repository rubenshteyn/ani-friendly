import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import vSelect from 'vue-select'
import "@/sass/_init.scss"
import "@/sass/plugins.scss"
import "@/sass/style.scss"
import "vue-select/dist/vue-select.css";

import "@/sass/_init.scss"
import "@/sass/plugins.scss"
import "@/sass/style.scss"

createApp(App)
    .use(router)
    .component('v-select', vSelect)
    .mount('#app')
