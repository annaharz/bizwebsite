<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-100 py-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-center">Kontakt</h1>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Kontaktiere Mich</h2>
          <p class="text-lg text-gray-700 mb-12">
            Ich freue mich darauf, von dir zu hören! Ob du Fragen zu meinen Tattoo-Services hast, einen Termin vereinbaren möchtest oder an einer Zusammenarbeit interessiert bist - kontaktiere mich gerne über Instagram oder per Email.
          </p>
          
          <div class="space-y-8">
            <!-- Instagram -->
            <div class="flex flex-col items-center">
              <div class="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Instagram</h3>
              <a href="https://instagram.com/lisa_scct" target="_blank" class="text-lg text-accent hover:text-accent/80 transition-colors duration-300">
                @lisa_scct
              </a>
            </div>
            
            <!-- Email -->
            <div class="flex flex-col items-center">
              <div class="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:lisa.scct.art@gmail.com" class="text-lg text-accent hover:text-accent/80 transition-colors duration-300">
                lisa.scct.art@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script> 