<template>
  <div class="description-container">
    <p class="main">
      A game where you play as a nun on an important mission to save humans from
      the zombie apocalypse.
    </p>
    <p class="will">
      In this game you will:
    </p>
    <ul>
      <li>Kill a bunch of zombies</li>
      <li>Set your destination to the next level</li>
      <li>Find guns and equipment</li>
      <li>Customize your nun</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Description'
}
</script>

<style lang="scss" scoped>
.description-container {
  @apply mx-2 mt-12 mb-24;

  @screen lg {
    @apply mx-4;
  }

  @screen xl {
    @apply max-w-screen-xl mx-auto px-4;
  }

  p.main {
    @apply text-yellow text-16 font-body leading-loose text-center;

    @screen lg {
      @apply text-32 text-left leading-relaxed;
    }
  }

  p.will {
    @apply text-yellow text-18 font-heading leading-loose font-bold mt-6 text-center mb-4;

    @screen lg {
      @apply text-32 text-left leading-relaxed mt-16 mb-8;
    }
  }

  ul {
    @apply list-none;

    li {
      @apply text-yellow text-14 text-center mb-4;

      @screen lg {
        @apply text-24 text-left mb-6;
      }

      &::before {
        @screen lg {
          content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
          @apply text-green font-bold inline-block;
          width: 1em; /* Also needed for space (tweak if needed) */
        }
      }
    }
  }
}
</style>
