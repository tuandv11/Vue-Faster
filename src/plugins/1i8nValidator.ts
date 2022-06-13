import { configure, defineRule } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from "@vee-validate/i18n"

defineRule('required', (value: any) => {
  if (!value || !value.length) {
    return 'This field is required'
  }
  return true;
})

// Object.keys(AllRules).forEach(rule => {
//   defineRule(rule, AllRules[rule])
// })
//
// configure({
//   generateMessage: localize({
//     en: {
//       messages: {
//         required: 'This field is required',
//       }
//     },
//     vi: {
//       messages: {
//         required: '{field} là bắt buộc',
//       }
//     },
//   })
// })

// setLocale('vi')

