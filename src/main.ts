import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from "@/plugins/i18n"

const app = createApp(App)

// sass
import '@/assets/sass/app.scss'

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
