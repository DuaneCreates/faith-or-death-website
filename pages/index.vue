<template>
  <div class="container">
    <Header />
    <CallAction />
  </div>
</template>

<script>
import Header from '../components/Header'
import CallAction from '../components/CallAction'

export default {
  components: { CallAction, Header }
}
</script>

<style lang="scss" scoped>
.container {
  @apply mx-auto;
}
</style>
