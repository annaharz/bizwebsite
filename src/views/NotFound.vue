<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-100 py-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-center">404 - Seite nicht gefunden</h1>
      </div>
    </section>
    
    <!-- Not Found Content -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            Die von dir gesuchte Seite existiert leider nicht. Vielleicht wurde sie verschoben oder gelöscht.
          </p>
          <div class="flex justify-center">
            <router-link to="/" class="btn btn-primary">
              Zurück zur Startseite
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script> 