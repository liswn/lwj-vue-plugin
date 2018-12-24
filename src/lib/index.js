import formatDateTime from './utils/dateTime/format'
import formatCurrency from './utils/currency/format'
import SHA from './utils/SHA'

// 注册全局过滤器
const registerFilters = (Vue) => {
  Vue.filter('FormatDateTime', formatDateTime)
  Vue.filter('FormatCurrency', formatCurrency)
}

// 注册全局方法
const registerMethods = (Vue) => {
  Vue.prototype.$FormatDateTime = formatDateTime
  Vue.prototype.$FormatCurrency = formatCurrency
  Vue.prototype.$SHA = SHA
}

const lwjPluginVue = {
  install: (Vue, options) => {
    registerFilters(Vue)
    registerMethods(Vue)
  }
}

export default lwjPluginVue
