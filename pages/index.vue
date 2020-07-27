<template>
  <div class="container">
    <Header />
    <CallAction />
    <Quote />
  </div>
</template>

<script>
import Header from '../components/Header'
import CallAction from '../components/CallAction'
import Quote from '../components/Quote'

export default {
  components: { Quote, CallAction, Header }
}
</script>

<style lang="scss" scoped>
.container {
  @apply mx-auto;
}
</style>
