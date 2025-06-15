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
            <h2 class="text-3xl font-bold mb-6">Hi, ich bin Lisa</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Mit dem Tätowieren habe ich die Möglichkeit gefunden, viele meiner Interessen zu verbinden: die Liebe zur Kunst, der direkte Austausch mit Menschen und die Arbeit am menschlichen Körper. Während meiner Ausbildung zur Physiotherapeutin habe ich ein tiefes Verständnis für Anatomie entwickelt. Das hilft mit dabei, jedes Tattoo mit einem Fokus auf Kunstfertigkeit und Komfort zu gestalten. Mein Ziel ist es, einen sicheren, einladenden Raum zu schaffen, in dem du dich während deiner Tattoo-Erfahrung entspannt und sicher fühlen kannst.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section bg-primary text-gray-800">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Bereit für dein Tattoo?</h2>
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
  name: 'About',
  components: {
    OptimizedImage
  }
}
</script> 