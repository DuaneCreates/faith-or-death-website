<template>
  <div class="gallery-container">
    <div v-for="image in images" :key="image.src" class="image-wrapper">
      <img :src="image.src" :alt="image.alt" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      images: [
        {
          src: null,
          alt: null
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery-container {
  @apply flex flex-col w-auto mt-4 mb-12;

  @screen sm {
    @apply flex-row flex-wrap mx-2;
  }

  @screen xl {
    @apply max-w-screen-xl mx-auto;
  }

  .image-wrapper {
    @apply w-full;

    @screen sm {
      @apply w-1/2 p-2;
    }

    @screen lg {
      @apply w-1/3;
    }

    @screen xl {
      @apply p-4;
    }

    img {
      @apply w-full object-cover;
    }
  }
}
</style>
