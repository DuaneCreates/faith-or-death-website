<template>
  <div class="quote-container">
    <cite>
      Feed your faith and your fears will starve to death.
    </cite>
  </div>
</template>

<script>
export default {
  name: 'Quote'
}
</script>

<style lang="scss" scoped>
.quote-container {
  @apply flex flex-row justify-center my-12;

  cite {
    @apply text-yellow font-heading italic text-lg text-center relative w-64 leading-loose;

    @screen lg {
      @apply text-3xl w-175;
    }

    &:before {
      @apply hidden text-yellow absolute opacity-10 font-back-quote text-back-quote-small font-bold;
      content: '’’';
      left: -5.5rem;
      top: -6.5rem;
      pointer-events: none;

      @screen xs {
        @apply block;
      }

      @screen lg {
        left: -5.5rem;
        top: -6.5rem;
      }
    }
  }
}
</style>
