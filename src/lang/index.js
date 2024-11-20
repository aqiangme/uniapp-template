import {createI18n} from "vue-i18n"
import en from './en.json'
import zhHans from './zh-Hans.json'

let i18nConfig = {
	locale: uni.getLocale(),
	messages:{
		en,
		"zh": zhHans
	}
}

let i18n = createI18n(i18nConfig)
export default i18n