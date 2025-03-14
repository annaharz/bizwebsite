<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-100 py-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-center">Kollaboration Kunst & Tattoos</h1>
      </div>
    </section>
    
    <!-- Collaboration Introduction -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <p class="text-lg text-gray-700 leading-relaxed">
            Kunst bildet für mich einen elementaren Bestandteil des Tätowierens.
            Seit Jahren versuchen Tätowierer*innen offiziell als Kunstschaffende anerkannt zu werden, leider gibt es ohne die offizielle Regelung einerseits keinen Zugang zu wichtigen Sozialleistungen, andererseits bleibt das Bild des Tätowierens als 'Hinterhof' Kunst bestehen.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mt-4">
            Um ein Zeichen zu setzen, habe ich es mir als Ziel gemacht, Tätowieren und Kunst zu vereinen - im Rahmen von Kollaborationen mit Künstler*innen aus anderen Disziplinen, tätowiere ich in Galerien und Ausstellungen.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Collaboration Gallery -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="bg-gray-300 h-96 rounded-lg shadow-md"></div>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-6">Kunst & Tattoos vereint</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Durch die Zusammenarbeit mit Künstler*innen aus verschiedenen Bereichen entstehen einzigartige Projekte, die die Grenzen zwischen traditioneller Kunst und Tätowierkunst verwischen. Diese Kollaborationen finden in Galerien, bei Kunstausstellungen und speziellen Events statt.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mt-4">
              Die Verbindung von verschiedenen künstlerischen Disziplinen eröffnet neue Perspektiven und Ausdrucksformen, die sowohl die Tattoo-Kunst als auch die traditionellen Kunstformen bereichern.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Past Collaborations -->
    <section class="section bg-white">
      <div class="container-custom">
        <h2 class="section-title">Bisherige Kollaborationen</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div class="h-64 bg-gray-300"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Galerie-Performance</h3>
              <p class="text-gray-600">
                Live-Tätowieren während einer Kunstausstellung, bei der Besucher*innen den kreativen Prozess beobachten konnten.
              </p>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div class="h-64 bg-gray-300"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Künstler-Kollaboration</h3>
              <p class="text-gray-600">
                Gemeinsame Gestaltung von Tattoo-Designs mit bildenden Künstler*innen, die ihre einzigartigen Stile einbringen.
              </p>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div class="h-64 bg-gray-300"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Kunstinstallation</h3>
              <p class="text-gray-600">
                Integration von Tattoo-Kunst in größere Kunstinstallationen, die verschiedene Medien und Ausdrucksformen verbinden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Collaboration CTA -->
    <section class="section bg-accent text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Interesse an einer Zusammenarbeit?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Bist du Künstler*in oder Galerist*in mit Interesse an einer Zusammenarbeit, melde dich gerne bei mir!
        </p>
        <router-link to="/contact" class="btn bg-white text-accent hover:bg-gray-100">
          Kontaktiere mich
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Collaboration'
}
</script> 