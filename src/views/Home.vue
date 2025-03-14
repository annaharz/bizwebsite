<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gray-100 py-20 md:py-32">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Lisa Scct
            </h1>
            <div class="text-xl md:text-2xl text-gray-600 mb-8">
              <p class="mb-1">Ich biete individuelle Tattoos</p>
              <p class="mb-1">als entschleunigte Erfahrung</p>
              <p>in einem sicheren Raum an.</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/portfolio" class="btn btn-primary">
                Portfolio ansehen
              </router-link>
              <router-link to="/contact" class="btn bg-gray-200 text-gray-800 hover:bg-gray-300">
                Kontakt
              </router-link>
            </div>
          </div>
          
          <div class="order-1 md:order-2 overflow-hidden rounded-lg shadow-lg border-4 border-primary p-1">
            <OptimizedImage 
              src="backgrounds/landing.JPG" 
              alt="Lisa Tattoo Artist" 
              className="w-full h-auto object-cover rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Introduction Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <p class="text-lg text-gray-700 leading-relaxed">
            Tätowieren als Kunstform ist meine große Leidenschaft. Dabei lege ich hohen Wert auf einen offenen Austausch. Es ist mir wichtig, uns die Zeit zu nehmen, die wir brauchen, um diese Erfahrung aus dem Trubel des Alltags heraus entschleunigt zu gestalten. Wenn du dich für mich als Künstlerin entscheidest, bedeutet das, einen sicheren Raum zu erleben, um den gesamten Prozess in vollen Zügen genießen zu können.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Portfolio Preview Section -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <h2 class="section-title">Tattoo Portfolio</h2>
        <p class="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Ich habe ein paar Beispiele ausgewählt, um dir ein Gefühl für meine Arbeiten zu vermitteln. Meine Priorität liegt jedoch darin, deinen individuellen Tattoo Wunsch zu verstehen und ihn gemeinsam umzusetzen.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/gingko.jpg" 
              alt="Ginkgo-Blatt Tattoo" 
              className="h-64" 
              :useBackgroundImage="true" 
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Ginkgo-Blatt</h3>
              <p class="text-gray-600">
                Manche Tattoo-Reisen beginnen klein. Wie dieses Ginkgo-Blatt. Die Person wählte dieses Motiv aufgrund der Schönheit des Blattes selbst sowie seiner Symbolik.
              </p>
            </div>
          </div>
          
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/Pfingstrosen schwarz.jpg" 
              alt="Heilende Hände Tattoo" 
              className="h-64" 
              :useBackgroundImage="true" 
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Heilende Hände</h3>
              <p class="text-gray-600">
                Dieses Tattoo hat für mich eine besondere Bedeutung, da die Kundin im Gesundheitswesen tätig ist. Ich fühle mich geehrt, einen Arm zu tötowieren, der dazu beiträgt, Menschen zu heilen.
              </p>
            </div>
          </div>
          
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <OptimizedImage 
              src="portfolio/rote pfingstrose.jpg" 
              alt="Farbakzente Tattoo" 
              className="h-64" 
              :useBackgroundImage="true" 
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Farbakzente</h3>
              <p class="text-gray-600">
                Manchmal ist es die beste Entscheidung, Farbe gezielt einzusetzen, um Akzente zu setzen oder Zartheit zu erzielen.
              </p>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/portfolio" class="btn btn-primary">
            Vollständiges Portfolio ansehen
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section bg-accent text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Bereit für dein nächstes Tattoo?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Jede Reise ist einzigartig, und ich würde mich sehr freuen, ein Teil deiner Reise zu sein.
        </p>
        <router-link to="/contact" class="btn bg-white text-accent hover:bg-gray-100">
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