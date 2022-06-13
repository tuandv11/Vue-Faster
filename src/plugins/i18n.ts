import { createI18n } from "vue-i18n"
import messages from "@/plugins/messages"
import config from "@/config";

const i18n = createI18n({
  locale: config.VITE_LOCALE,
  fallbackLocale: 'vi',
  messages
})

export default i18n
