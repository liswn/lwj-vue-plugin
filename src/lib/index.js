import formatDateTime from './utils/dateTime/format'
import formatCurrency from './utils/currency/format'
import textClip from './utils/text/clip'
import SHA from './utils/SHA'

// 注册全局过滤器
const registerFilters = (Vue) => {
  Vue.filter('FormatDateTimeFilter', formatDateTime)
  Vue.filter('FormatCurrencyFilter', formatCurrency)
  Vue.filter('TextClipFilter', textClip)
}

// 注册全局方法
const registerMethods = (Vue) => {
  Vue.prototype.$FormatDateTime = formatDateTime
  Vue.prototype.$FormatCurrency = formatCurrency
  Vue.prototype.$TextClip = textClip
  Vue.prototype.$SHA = SHA
}

const lwjPluginVue = {
  install: (Vue, options) => {
    registerFilters(Vue)
    registerMethods(Vue)
  }
}

export default lwjPluginVue
