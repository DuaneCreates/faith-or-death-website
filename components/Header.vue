<template>
  <header class="header">
    <img
      src="~/assets/images/cover.png"
      alt="Cover of Faith or Death, a camper van and hanging woman in a post-apocalyptic world"
    />
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  img {
    @apply w-full object-contain;
  }
}
</style>
