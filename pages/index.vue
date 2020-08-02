<template>
  <div class="container">
    <Header />
    <CallAction />
    <Quote />
    <Gallery />
    <Description />
  </div>
</template>

<script>
import Header from '../components/Header'
import CallAction from '../components/CallAction'
import Quote from '../components/Quote'
import Gallery from '../components/Gallery'
import Description from '../components/Description'

export default {
  components: { Description, Gallery, Quote, CallAction, Header }
}
</script>

<style lang="scss" scoped>
.container {
  @apply mx-auto max-w-1080;
}
</style>
