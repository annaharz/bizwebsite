<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4">Lisa Scct</h3>
          <p class="text-gray-300">
            Tattoos in einem Safe Space als entschleunigte Erfahrung.
          </p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">Links</h3>
          <ul class="space-y-2">
            <li v-for="item in menuItems" :key="item.path">
              <router-link :to="item.path" class="text-gray-300 hover:text-white transition-colors duration-300">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">Kontakt</h3>
          <div class="flex space-x-4 mb-4">
            <a href="https://instagram.com/lisa_scct" target="_blank" class="text-gray-300 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <p class="text-gray-300">
            Frankfurt am Main, Deutschland
          </p>
          <p class="text-gray-300 mt-2">
            <a href="mailto:lisa.scct.art@gmail.com" class="text-gray-300 hover:text-white transition-colors duration-300">
              lisa.scct.art@gmail.com
            </a>
          </p>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Lisa Litovkin. Alle Rechte vorbehalten.</p>
        <p class="mt-2">
          <router-link to="/impressum" class="text-gray-400 hover:text-white transition-colors duration-300">
            Impressum
          </router-link>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      menuItems: [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Collaboration', path: '/collaboration' },
        { name: 'FAQ', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ]
    }
  }
}
</script> 