<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-100 py-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-center">Über Mich</h1>
      </div>
    </section>
    
    <!-- About Content -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="overflow-hidden rounded-lg shadow-md">
              <OptimizedImage 
                src="about/profile.JPG" 
                alt="Lisa Tattoo Artist" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-6">Hallo nochmal, ich bin Lisa</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Hier bekommst du die Gelegenheit, etwas mehr über mich zu erfahren. Ich bin Tätowiererin aus Frankfurt und freue mich sehr, dass du hier bist!
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mt-4">
              Mit einem Hintergrund in der Physiotherapie habe ich ein tiefes Verständnis für den menschlichen Körper, was mir ermöglicht, jedes Tattoo mit einem Fokus auf sowohl Kunstfertigkeit als auch Komfort zu gestalten. Mein Ziel ist es, einen sicheren, einladenden Raum zu schaffen, in dem du dich während deiner Tattoo-Reise entspannt und sicher fühlen kannst.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Philosophy Section -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Meine Philosophie</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            Mein Anspruch ist nicht nur, Kunst auf deiner Haut zu schaffen, sondern dir auch eine Erfahrung zu bieten, die genauso persönlich und bedeutungsvoll ist wie die Tätowierung selbst. Ob du dein erstes Tattoo bekommst oder deine Sammlung erweiterst – ich möchte sicherstellen, dass du dich in jedem Schritt des Prozesses wohlfühlst.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mt-4">
            Wenn du auf der Suche nach einer professionellen Künstlerin bist, die den Körper versteht und wunderschöne, maßgeschneiderte Tattoos in einem sicheren Raum schafft, lass uns zusammenarbeiten, um deine Ideen zum Leben zu erwecken!
          </p>
        </div>
      </div>
    </section>
    
    <!-- Skills Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <h2 class="section-title">Meine Expertise</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-lg p-6 shadow-md">
            <div class="text-accent text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Künstlerische Vielseitigkeit</h3>
            <p class="text-gray-600">
              Von filigranen Linien bis zu ausdrucksstarken Farbakzenten - ich passe meinen Stil an deine Vision an.
            </p>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-6 shadow-md">
            <div class="text-accent text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Anatomisches Verständnis</h3>
            <p class="text-gray-600">
              Mein Hintergrund in der Physiotherapie hilft mir, Tattoos zu gestalten, die mit dem natürlichen Fluss deines Körpers harmonieren.
            </p>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-6 shadow-md">
            <div class="text-accent text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Persönliche Betreuung</h3>
            <p class="text-gray-600">
              Jeder Kunde erhält meine volle Aufmerksamkeit - von der ersten Beratung bis zur Nachsorge deines fertigen Tattoos.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section bg-accent text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Bereit, deine Tattoo-Reise zu beginnen?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Lass uns gemeinsam etwas Besonderes schaffen, das deine Geschichte erzählt.
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
  name: 'About',
  components: {
    OptimizedImage
  }
}
</script> 