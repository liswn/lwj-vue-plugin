<template>
  <i :class="'l-icon-' + name"></i>
</template>

<script>
export default {
  name: 'LIcon',
  props: {
    name: String
  }
}
</script>
