<template>
  <div class="footer-container">
    <nav>
      <a>Presskit</a>
      <a>Creator</a>
      <a>Devblog</a>
    </nav>
    <p class="copyright">
      &copy; {{ new Date().getFullYear() }} Faith or Death
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer-container {
  @apply flex flex-col pb-4;

  @screen lg {
    @apply flex-row justify-between mx-4 pb-8;
  }

  @screen xl {
    @apply max-w-screen-xl mx-auto px-4;
  }

  nav {
    @apply flex flex-row mb-8 justify-center;

    @screen lg {
      @apply mb-0 justify-start;
    }

    a {
      @apply text-yellow text-14 mx-4;

      @screen lg {
        @apply text-18;
      }

      &:hover,
      &:focus {
        @apply text-green;
      }

      &:first-of-type {
        @apply ml-0;
      }

      &:last-of-type {
        @apply mr-0;
      }
    }
  }

  p.copyright {
    @apply text-yellow text-12 text-center;

    @screen lg {
      @apply text-14 text-left;
    }
  }
}
</style>
