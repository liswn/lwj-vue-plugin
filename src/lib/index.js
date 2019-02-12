import {
  formatDateTime,
  compareDateTime,
  getMillisecondsOfTwoDate,
  formatCurrency,
  textClip,
  doMobile,
  SHA
} from './utils'
import {
  SvgIcon,
  LIcon
} from './components'

// 注册全局过滤器
const registerFilters = (Vue) => {
  Vue.filter('FormatDateTimeFilter', formatDateTime)
  Vue.filter('FormatCurrencyFilter', formatCurrency)
  Vue.filter('TextClipFilter', textClip)
  Vue.filter('DoMobileFilter', doMobile)
}

// 注册全局方法
const registerMethods = (Vue, options) => {
  Vue.prototype.$FormatDateTime = formatDateTime
  Vue.prototype.$compareDateTime = compareDateTime
  Vue.prototype.$getMillisecondsOfTwoDate = getMillisecondsOfTwoDate
  Vue.prototype.$FormatCurrency = formatCurrency
  Vue.prototype.$TextClip = textClip
  Vue.prototype.$DoMobile = doMobile
  Vue.prototype.$SHA = SHA
  if (options.router) {
    Vue.prototype.$RedirectToUrl = (url) => {
      options.router.push(url)
    }
  }
}

// 注册全局组件
const registerComponents = (Vue) => {
  Vue.component('SvgIcon', SvgIcon)
  Vue.component('LIcon', LIcon)
}

const lwjPluginVue = {
  install: (Vue, options) => {
    registerFilters(Vue)
    registerMethods(Vue, options)
    registerComponents(Vue)
  }
}

export default lwjPluginVue
