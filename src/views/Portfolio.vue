<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-100 py-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-center">Tattoo Portfolio</h1>
      </div>
    </section>
    
    <!-- Portfolio Gallery -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Portfolio Item 1 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/Portfolio1.jpg" 
              alt="Heilende Hände Tattoo" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
          </div>
          
          <!-- Portfolio Item 2 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/Portfolio2.jpg" 
              alt="Farbakzente Tattoo" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
          </div>
          
          <!-- Portfolio Item 3 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/Portfolio3.jpg" 
              alt="Weitere Farbakzente Tattoo" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
          </div>
          
          <!-- Portfolio Item 4 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/Portfolio4.jpg" 
              alt="Portfolio Tattoo 4" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
          </div>

          <!-- Portfolio Item 5 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/Portfolio5.jpg" 
              alt="Portfolio Tattoo 5" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
          </div>

          <!-- Portfolio Item 6 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/Portfolio6.jpg" 
              alt="Portfolio Tattoo 6" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
          </div>
          
          <!-- Instagram Feed Card -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md md:col-span-2 lg:col-span-3">
            <div class="p-4 border-b">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div>
                  <a href="https://instagram.com/lisa_scct" target="_blank" class="font-semibold hover:text-pink-500 transition-colors">@lisa_scct</a>
                  <p class="text-xs text-gray-500">Frankfurt, Deutschland</p>
                </div>
              </div>
            </div>
            
            <!-- Instagram Feed Preview -->
            <div class="p-4">
              <p class="text-gray-600 leading-relaxed">
                Mein vollständiges Portfolio ist auf Instagram zu sehen. Dort findest du auch verschiedene "Wanna Dos" – Designs, die ich erstellt habe und die ich gerne in der gleichen Version oder auch angepasst tätowieren würde.
              </p>
              <div class="mt-4 text-center">
                <a href="https://instagram.com/lisa_scct" target="_blank" class="btn btn-primary inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Auf Instagram ansehen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Portfolio Introduction (Moved below gallery) -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <p class="text-quote mx-auto text-lg text-gray-600 pl-4 border-l-4 border-accent italic">
            Meine Priorität liegt darin, deinen individuellen Tattoo Wunsch zu verstehen und ihn gemeinsam umzusetzen. Ich beschränke mich nicht auf einen bestimmten Stil, eine Farbpalette oder Motive. Bitte fühl dich frei, dich so offen und kreativ wie möglich auszudrücken!
          </p>
          <p class="text-quote mx-auto text-lg text-gray-600 pl-4 border-l-4 border-accent italic mt-8">
            Ich poste viele meiner Werke auf Instagram, das sind neben Tattoos auch Gemälde und Fotografien, also schau gerne dort vorbei. Es ist ebenfalls eine einfache Möglichkeit, mit mir in Kontakt zu treten.
          </p>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section bg-primary text-gray-800">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Bereit für dein Tattoo?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Ich freue mich von dir zu hören.
        </p>
        <router-link to="/contact" class="btn btn-secondary text-animate-on-hover">
          Kontaktiere mich
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import OptimizedImage from '@/components/OptimizedImage.vue';

export default {
  name: 'Portfolio',
  components: {
    OptimizedImage
  }
}
</script> 