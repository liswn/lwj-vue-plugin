<template>
  <div class="hello">
    {{ 100 | FormatCurrency('￥') }}
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
