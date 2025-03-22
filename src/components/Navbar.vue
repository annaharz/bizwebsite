<template>
  <nav class="bg-primary shadow-md fixed w-full z-50">
    <div class="container-custom py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-2xl font-serif font-bold text-accent">
          Lisa Scct
        </router-link>
        
        <!-- Mobile menu button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden focus:outline-none text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- Desktop menu -->
        <div class="hidden md:flex space-x-8">
          <router-link v-for="item in menuItems" :key="item.path" :to="item.path" 
            class="text-white hover:text-gray-100 transition-colors duration-300"
            active-class="text-white font-medium border-b-2 border-white">
            {{ item.name }}
          </router-link>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-2">
        <div class="flex flex-col space-y-4">
          <router-link v-for="item in menuItems" :key="item.path" :to="item.path" 
            class="text-white hover:text-gray-100 transition-colors duration-300 py-2"
            active-class="text-white font-medium border-l-2 border-white pl-2"
            @click="isMenuOpen = false">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <div class="h-20"></div> <!-- Spacer for fixed navbar -->
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Collaboration', path: '/collaboration' },
        { name: 'FAQ', path: '/faq' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ]
    }
  }
}
</script> 