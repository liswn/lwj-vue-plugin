import {
  formatDateTime,
  formatCurrency,
  textClip,
  doMobile,
  SHA
} from './utils'

import {
  SvgIcon,
  requiredSvg
} from './components'

// 注册全局过滤器
const registerFilters = (Vue) => {
  Vue.filter('FormatDateTimeFilter', formatDateTime)
  Vue.filter('FormatCurrencyFilter', formatCurrency)
  Vue.filter('TextClipFilter', textClip)
  Vue.filter('DoMobileFilter', doMobile)
}

// 注册全局方法
const registerMethods = (Vue) => {
  Vue.prototype.$FormatDateTime = formatDateTime
  Vue.prototype.$FormatCurrency = formatCurrency
  Vue.prototype.$TextClip = textClip
  Vue.prototype.$DoMobile = doMobile
  Vue.prototype.$SHA = SHA
}

// 注册全局组件
const registerComponents = (Vue) => {
  Vue.component('SvgIcon', SvgIcon)
  requiredSvg()
}

const lwjPluginVue = {
  install: (Vue, options) => {
    registerFilters(Vue)
    registerMethods(Vue)
    registerComponents(Vue)
  }
}

export default lwjPluginVue
