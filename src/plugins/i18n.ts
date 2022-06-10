import { createI18n } from "vue-i18n"
import messages from "@/plugins/messages"

const i18n = createI18n({
  locale: 'vi',
  fallbackLocale: 'vi',
  messages
})

export default i18n
