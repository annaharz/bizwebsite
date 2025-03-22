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
                class="w-full h-full object-cover rounded-lg shadow-lg"
                src="backgrounds/profilbild.jpg"
                alt="Lisa Scct - Tattoo Artist"
              />
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-6">Hallo nochmal, ich bin Lisa</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Hier bekommst du die Gelegenheit, etwas mehr über mich zu erfahren. Ich bin Tätowiererin aus Frankfurt und freue mich sehr, dass du hier bist!
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mt-4">
              Mit einem Hintergrund in der Physiotherapie habe ich ein tiefes Verständnis für den menschlichen Körper, was mir ermöglicht, jedes Tattoo mit einem Fokus auf sowohl Kunstfertigkeit als auch Komfort zu gestalten. Mein Ziel ist es, einen sicheren, einladenden Raum zu schaffen, in dem du dich während deiner Tattoo-Erfahrung entspannt und sicher fühlen kannst.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section bg-accent text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Bereit für dein Tattoo?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Ich freue mich von dir zu hören.
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