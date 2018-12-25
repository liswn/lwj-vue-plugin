<template>
  <div class="hello">
    <div>
      <h1>货币格式化</h1>
      <p>{{ 100 | FormatCurrencyFilter('￥') }}</p>
      <p>{{$FormatCurrency(100, '￥', 'suffix') }}</p>
    </div>
    <div>
      <h1>手机号码脱敏</h1>
      <p>{{ '13981911257' | DoMobileFilter }}</p>
      <p>{{$DoMobile('13981911257') }}</p>
    </div>
    <svg-icon iconClass="errorImg"></svg-icon>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>
