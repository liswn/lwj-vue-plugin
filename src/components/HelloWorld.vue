<template>
  <div class="hello">
    <div>
      <h1>货币格式化</h1>
      <p>{{ 10000 | FormatCurrencyFilter({unit: '￥'}) }}</p>
      <p>{{$FormatCurrency(100000.12, {unit: '$', position: 'suffix'}) }}</p>
      <p>{{$FormatCurrency(100000.12, {places: 0}) }}</p>
    </div>
    <div>
      <h1>手机号码脱敏</h1>
      <p>{{ '13981911257' | DoMobileFilter }}</p>
      <p>{{$DoMobile('13981911257') }}</p>
    </div>
    {{$getMillisecondsOfTwoDate('2019-01-08 10:50:20', '2019-01-08 10:50:49')}}
    <LIcon name="loading" class="lwj_loading_icon"></LIcon>
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
