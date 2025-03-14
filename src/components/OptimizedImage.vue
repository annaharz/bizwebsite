<template>
  <div 
    v-if="useBackgroundImage" 
    class="bg-cover bg-center" 
    :class="className"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  ></div>
  <img 
    v-else 
    :src="imageUrl" 
    :alt="alt" 
    :class="className"
  />
</template>

<script>
export default {
  name: 'OptimizedImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Image'
    },
    className: {
      type: String,
      default: ''
    },
    useBackgroundImage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageUrl() {
      try {
        // Use dynamic import to handle spaces in filenames
        return new URL(`../assets/images/${this.src}`, import.meta.url).href;
      } catch (error) {
        console.error('Error loading image:', error);
        return '';
      }
    }
  }
}
</script> 