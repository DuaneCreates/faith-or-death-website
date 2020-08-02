<template>
  <div class="container">
    <Header />
    <CallAction />
    <Quote />
    <Gallery />
  </div>
</template>

<script>
import Header from '../components/Header'
import CallAction from '../components/CallAction'
import Quote from '../components/Quote'
import Gallery from '../components/Gallery'

export default {
  components: { Gallery, Quote, CallAction, Header }
}
</script>

<style lang="scss" scoped>
.container {
  @apply mx-auto max-w-1080;
}
</style>
