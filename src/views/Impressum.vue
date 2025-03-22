<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-100 py-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-center">Impressum</h1>
      </div>
    </section>
    
    <!-- Impressum Content -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-700 mb-8">
            Das Impressum ist als PDF-Dokument verfügbar. Bitte klicken Sie auf den Button unten, um es zu öffnen.
          </p>
          
          <a 
            :href="pdfUrl" 
            target="_blank" 
            class="btn bg-accent text-white hover:bg-accent/90 transition-colors duration-300 inline-flex items-center"
          >
            <span>Impressum öffnen</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Impressum',
  computed: {
    pdfUrl() {
      return new URL('../assets/impressum_www_lisascct_com_de.pdf', import.meta.url).href;
    }
  }
}
</script> 