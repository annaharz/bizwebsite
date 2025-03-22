<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-100 py-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-center">Kollaboration Kunst & Tattoos</h1>
      </div>
    </section>
    
    <!-- Collaboration Gallery -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="h-[500px] w-full">
            <OptimizedImage 
              src="collaboration/Kunst1.jpg" 
              alt="Kunst & Tattoos vereint" 
              className="w-full h-full object-contain rounded-lg shadow-md" 
              :useBackgroundImage="false" 
            />
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
        <h2 class="section-title">Kollaborative Visionen</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="h-96 overflow-hidden">
              <OptimizedImage 
                src="collaboration/Kunst3.jpg" 
                alt="Galerie-Performance" 
                className="w-full h-auto object-cover object-top" 
                :useBackgroundImage="false" 
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Galerie-Performance</h3>
              <p class="text-gray-600 leading-relaxed">
                Live-Tätowieren während einer Kunstausstellung, bei der Besucher*innen den kreativen Prozess beobachten konnten.
              </p>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="h-96 overflow-hidden">
              <OptimizedImage 
                src="collaboration/flyer.jpg" 
                alt="Kunst-Kollaboration" 
                className="w-full h-auto object-cover object-top" 
                :useBackgroundImage="false" 
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Kunst-Kollaboration</h3>
              <p class="text-gray-600 leading-relaxed">
                Gemeinsame Gestaltung von Tattoo-Designs mit bildenden Künstler*innen, die ihre einzigartigen Stile einbringen.
              </p>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="h-96 overflow-hidden">
              <OptimizedImage 
                src="collaboration/Kunst4.jpg" 
                alt="Kunstinstallation" 
                className="w-full h-auto object-cover object-top" 
                :useBackgroundImage="false" 
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Kunstinstallation</h3>
              <p class="text-gray-600 leading-relaxed">
                Integration von Tattoo-Kunst in größere Kunstinstallationen, die verschiedene Medien und Ausdrucksformen verbinden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Collaboration Introduction (Moved after galleries) -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <p class="text-quote mx-auto text-lg text-gray-600 pl-4 border-l-4 border-accent italic">
            Kunst bildet für mich einen elementaren Bestandteil des Tätowierens.
            Seit Jahren versuchen Tätowierer*innen offiziell als Kunstschaffende anerkannt zu werden, leider gibt es ohne die offizielle Regelung einerseits keinen Zugang zu wichtigen Sozialleistungen, andererseits bleibt das Bild des Tätowierens als 'Hinterhof' Kunst bestehen.
          </p>
          <p class="text-quote mx-auto text-lg text-gray-600 pl-4 border-l-4 border-accent italic mt-8">
            Um ein Zeichen zu setzen, habe ich es mir als Ziel gemacht, Tätowieren und Kunst zu vereinen - im Rahmen von Kollaborationen mit Künstler*innen aus anderen Disziplinen, tätowiere ich in Galerien und Ausstellungen.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Collaboration CTA -->
    <section class="section bg-primary text-gray-800">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Interesse an einer Zusammenarbeit?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Bist du Künstler*in oder Galerist*in mit Interesse an einer Zusammenarbeit, melde dich gerne bei mir!
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
  name: 'Collaboration',
  components: {
    OptimizedImage
  }
}
</script> 