<template>
  <div class="instagram-embed">
    <div v-if="loading" class="loading-container bg-gray-100 rounded-lg flex items-center justify-center p-8">
      <div class="animate-pulse text-gray-400 flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <p class="text-sm text-gray-500">Instagram-Post wird geladen...</p>
      </div>
    </div>
    <div v-else-if="error" class="error-container bg-gray-100 rounded-lg flex items-center justify-center flex-col p-8">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <p class="text-center text-gray-600 mb-2">{{ error }}</p>
      <a :href="instagramUrl" target="_blank" class="btn btn-primary mt-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        Auf Instagram ansehen
      </a>
    </div>
    <div v-else class="embed-container rounded-lg overflow-hidden">
      <iframe 
        :src="embedUrl" 
        class="instagram-iframe"
        frameborder="0" 
        scrolling="no" 
        allowtransparency="true"
        @load="onIframeLoad"
        ref="instagramIframe"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstagramEmbed',
  props: {
    postUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      error: null,
      loadTimeout: null
    }
  },
  computed: {
    // Extract the post ID from the URL
    postId() {
      try {
        // Handle different URL formats
        if (!this.postUrl) {
          throw new Error('Keine Instagram-URL angegeben');
        }
        
        // Extract the post ID from standard format URLs
        let match = this.postUrl.match(/instagram\.com\/p\/([^\/\?]+)/);
        if (match && match[1]) {
          return match[1];
        }
        
        // Try alternative format (reels)
        match = this.postUrl.match(/instagram\.com\/reel\/([^\/\?]+)/);
        if (match && match[1]) {
          return match[1];
        }
        
        // If we can't extract using regex, try using URL parsing
        try {
          const url = new URL(this.postUrl);
          const pathParts = url.pathname.split('/').filter(Boolean);
          
          // Check if the path contains 'p' or 'reel' followed by an ID
          const pIndex = pathParts.indexOf('p');
          const reelIndex = pathParts.indexOf('reel');
          
          if (pIndex !== -1 && pIndex + 1 < pathParts.length) {
            return pathParts[pIndex + 1];
          }
          
          if (reelIndex !== -1 && reelIndex + 1 < pathParts.length) {
            return pathParts[reelIndex + 1];
          }
          
          // Last resort: if there's any path component, use the last one
          if (pathParts.length > 0) {
            return pathParts[pathParts.length - 1];
          }
        } catch (urlError) {
          console.error('Error parsing URL:', urlError);
        }
        
        throw new Error('Konnte Post-ID nicht extrahieren');
      } catch (e) {
        console.error('Error parsing Instagram URL:', e);
        this.onError(e.message || 'Ungültige Instagram-URL');
        return null;
      }
    },
    
    // Generate the embed URL for the iframe
    embedUrl() {
      if (!this.postId) return '';
      // Use direct embed URL - more reliable than the oEmbed API
      return `https://www.instagram.com/p/${this.postId}/embed/`;
    },
    
    // Get the Instagram URL for the link
    instagramUrl() {
      if (!this.postId) return 'https://instagram.com/lisa_scct';
      return `https://www.instagram.com/p/${this.postId}/`;
    }
  },
  mounted() {
    this.initializeEmbed();
  },
  beforeUnmount() {
    this.clearTimeout();
  },
  watch: {
    postUrl() {
      this.clearTimeout();
      this.initializeEmbed();
    }
  },
  methods: {
    initializeEmbed() {
      this.loading = true;
      this.error = null;
      
      if (!this.postId) {
        this.loading = false;
        return;
      }
      
      // Set timeout for loading
      this.loadTimeout = setTimeout(() => {
        if (this.loading) {
          this.onError('Zeitüberschreitung beim Laden des Instagram-Posts');
        }
      }, 5000);
    },
    
    onIframeLoad() {
      this.loading = false;
      this.clearTimeout();
    },
    
    onError(message) {
      this.loading = false;
      this.error = message || 'Instagram-Post konnte nicht geladen werden';
      this.clearTimeout();
    },
    
    clearTimeout() {
      if (this.loadTimeout) {
        clearTimeout(this.loadTimeout);
        this.loadTimeout = null;
      }
    }
  }
}
</script>

<style scoped>
.instagram-embed {
  width: 100%;
  overflow: hidden;
}

.loading-container, .error-container {
  min-height: 350px;
}

.embed-container {
  position: relative;
  width: 100%;
  padding-bottom: 120%; /* Create space for the Instagram iframe */
  height: 0;
  overflow: hidden;
}

.instagram-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (min-width: 640px) {
  .embed-container {
    padding-bottom: 100%; /* Less padding needed on larger screens */
  }
}

@media (min-width: 768px) {
  .embed-container {
    padding-bottom: 80%; /* Even less padding on medium screens */
  }
}

@media (min-width: 1024px) {
  .embed-container {
    padding-bottom: 70%; /* Minimal padding on large screens */
  }
}
</style> 