<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-100 py-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-center">Tattoo Portfolio</h1>
      </div>
    </section>
    
    <!-- Portfolio Introduction -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            Ich habe ein paar Beispiele ausgewählt, um dir ein Gefühl für meine Arbeiten zu vermitteln. Meine Priorität liegt jedoch darin, deinen individuellen Tattoo Wunsch zu verstehen und ihn gemeinsam umzusetzen, weshalb ich mich nicht auf einen bestimmten Stil, eine Farbpalette oder Motive beschränke, die du hier siehst. Bitte fühl dich frei, dich so offen und kreativ wie möglich auszudrücken, auch wenn es nicht sofort mit dem übereinstimmt, was du hier entdecken kannst!
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Ich poste viele meiner Werke auf Instagram, das sind neben Tattoos auch Gemälde und Fotografien, also schau gerne dort vorbei. Es ist ebenfalls eine einfache Möglichkeit, mit mir in Kontakt zu treten, um deine Fragen und Ideen zu besprechen.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Portfolio Gallery -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Portfolio Item 1 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <OptimizedImage 
              src="portfolio/gingko.jpg" 
              alt="Ginkgo-Blatt Tattoo" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Ginkgo-Blatt</h3>
              <p class="text-gray-600">
                Manche Tattoo-Reisen beginnen klein. Wie dieses Ginkgo-Blatt. Die Person wählte dieses Motiv aufgrund der Schönheit des Blattes selbst sowie seiner Symbolik. Es steht für Hoffnung, Stärke und Resilienz – alles Werte, die dieser Person sehr am Herzen liegen.
              </p>
            </div>
          </div>
          
          <!-- Portfolio Item 2 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <OptimizedImage 
              src="portfolio/Pfingstrosen schwarz.jpg" 
              alt="Heilende Hände Tattoo" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Heilende Hände</h3>
              <p class="text-gray-600">
                Dieses Tattoo hat für mich eine besondere Bedeutung, da die Kundin im Gesundheitswesen tätig ist. Ich fühle mich geehrt, einen Arm zu tötowieren, der dazu beiträgt, Menschen zu heilen. Jede Reise ist einzigartig, und ich würde mich sehr freuen, ein Teil deiner Reise zu sein.
              </p>
            </div>
          </div>
          
          <!-- Portfolio Item 3 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <OptimizedImage 
              src="portfolio/rote pfingstrose.jpg" 
              alt="Farbakzente Tattoo" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Farbakzente</h3>
              <p class="text-gray-600">
                Manchmal ist es die beste Entscheidung, Farbe gezielt einzusetzen, um Akzente zu setzen oder Zartheit zu erzielen. In diesem Fall haben wir uns dafür entschieden, Rot für die Pfingstrosen zu verwenden, um einen sanften Übergang von der Haut zur Blume zu schaffen. (Der Vogel auf dem Arm und die Schrift auf der Wirbelsäule sind nicht von mir.)
              </p>
            </div>
          </div>
          
          <!-- Portfolio Item 4 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <OptimizedImage 
              src="portfolio/rote pfingstrose 2.jpg" 
              alt="Weitere Farbakzente Tattoo" 
              className="h-80" 
              :useBackgroundImage="true" 
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Weitere Farbakzente</h3>
              <p class="text-gray-600">
                Ein weiteres Beispiel für den gezielten Einsatz von Farbe. Die rote Pfingstrose strahlt Wärme und Lebendigkeit aus, während die filigranen Linien die Eleganz des Designs unterstreichen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Instagram Link -->
    <section class="section bg-white">
      <div class="container-custom text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-6">Mein vollständiges Portfolio</h2>
        <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Mein vollständiges Portfolio ist auf Instagram zu sehen. Dort findest du auch verschiedene "Wanna Dos" – Designs, die ich erstellt habe und die ich gerne in der gleichen Version oder auch angepasst tätowieren würde.
        </p>
        <div class="flex justify-center">
          <a href="https://instagram.com/lisa_scct" target="_blank" class="btn btn-primary flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section bg-accent text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Bereit für dein eigenes Tattoo?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Lass uns gemeinsam deine Ideen zum Leben erwecken.
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
  name: 'Portfolio',
  components: {
    OptimizedImage
  }
}
</script> 