<template>
  <div class="app-container">
    <nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
.app-container {
  @apply min-h-screen;
}
</style>
<script>
import Footer from '../components/Footer'
export default {
  components: { Footer }
}
</script>
