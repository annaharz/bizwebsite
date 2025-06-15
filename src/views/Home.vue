<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gray-100 h-screen flex items-center">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Lisa Scct
            </h1>
            <div class="text-lead mb-8">
              <p class="mb-1">Tattoos in einem Safe Space</p>
              <p>als entschleunigte Erfahrung.</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/portfolio" class="btn btn-primary">
                Portfolio ansehen
              </router-link>
              <router-link to="/contact" class="btn btn-secondary">
                Kontakt
              </router-link>
            </div>
          </div>
          
          <div class="order-1 md:order-2 overflow-hidden rounded-lg">
            <OptimizedImage 
              src="backgrounds/profilbild.jpg" 
              alt="Lisa Tattoo Artist" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Introduction Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-quote mx-auto border-l-0 md:border-l-4 pl-0 md:pl-6 text-xl">
            Tätowieren als Kunstform ist meine Leidenschaft. Dabei lege ich viel Wert auf einen offenen Austausch und dass wir uns die Zeit nehmen, um diese Erfahrung aus dem Trubel des Alltags heraus entschleunigt zu gestalten. Entscheidest du dich für mich als Künstlerin, erwartet dich ein sicherer Raum, in welchem du den gesamten Prozess bewusst erleben kannst.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Portfolio Preview Section -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <h2 class="section-title">Tattoo Portfolio</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Portfolio Item 1 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/Portfolio1.jpg" 
              alt="Heilende Hände Tattoo" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
            <div class="p-6">
              <p class="text-card">
                Dieses Tattoo hat für mich eine <span class="text-emphasis">besondere Bedeutung</span>, da die Kundin im Gesundheitswesen tätig ist und das Motiv mich an meine Zeit als Physiotherapeutin erinnert.
              </p>
            </div>
          </div>
          
          <!-- Portfolio Item 2 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/Portfolio2.jpg" 
              alt="Farbakzente Tattoo" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
            <div class="p-6">
              <p class="text-card">
                Neben dem Tätowieren male ich auch, Vögel in Aquarellfarbe sind eins meiner <span class="text-emphasis">Lieblingsmotive</span>, das ich auch sehr gerne mehr tätowieren möchte.
              </p>
            </div>
          </div>
          
          <!-- Portfolio Item 3 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/Portfolio3.jpg" 
              alt="Weitere Farbakzente Tattoo" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
            <div class="p-6">
              <p class="text-card">
                Farbe kann bewusst eingesetzt werden, um <strong>Akzente zu setzen</strong> oder Zartheit zu erzielen. In diesem Fall haben wir Rot für die Pfingstrosen ausgewählt, um einen sanften Übergang von der Haut zur Blume zu schaffen. (Der Vogel auf dem Arm und die Schrift auf der Wirbelsäule sind nicht von mir.)
              </p>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/portfolio" class="btn btn-primary text-animate-on-hover">
            Vollständiges Portfolio ansehen
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section bg-primary text-gray-800">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Bereit für dein Tattoo?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Schreibe mir eine Email oder Whats App
        </p>
        <router-link to="/contact" class="btn btn-accent text-white text-animate-on-hover">
          Kontaktiere mich
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import OptimizedImage from '@/components/OptimizedImage.vue';

export default {
  name: 'Home',
  components: {
    OptimizedImage
  }
}
</script> 