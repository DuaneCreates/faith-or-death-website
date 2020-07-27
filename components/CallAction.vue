<template>
  <div class="call-action-container">
    <div class="mobile">
      <a href="#">Download Now</a>
    </div>
    <div class="desktop">
      <iframe
        frameborder="0"
        src="https://itch.io/embed/682106?border_width=5&amp;bg_color=000000&amp;fg_color=CBC9A0&amp;link_color=6A8768&amp;border_color=000000"
        width="560"
        height="175"
        ><a href="https://duanecreates.itch.io/faith-or-death"
          >Faith or Death by Duane Creates</a
        ></iframe
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallAction'
}
</script>

<style lang="scss" scoped>
.call-action-container {
  .mobile {
    @apply flex flex-row justify-center -mt-4;

    @screen md {
      @apply hidden;
    }

    a {
      @apply rounded bg-green text-white font-bold font-heading py-2 px-4 mx-auto;
    }
  }

  .desktop {
    @apply hidden;

    @screen md {
      @apply flex flex-row justify-center -mt-20;
    }
  }
}
</style>
