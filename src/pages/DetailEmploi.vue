<template>
  <Banner title="Détail de l'offre" image="/assets/img/images/images-about.jpg" />

  <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" style="background: #fff;">
    <div class="container">
      <div v-if="offre" class="row gy-5 gx-4">
        <!-- Partie principale -->
        <div class="col-lg-8">
          <div class="d-flex align-items-center mb-5">
            
            <div class="text-start ps-4">
              <h3 class="mb-3 mt-5" style="font-size: 30px;">{{ offre.title }}</h3>
              <span class="text-truncate me-3">
                <i class="fa fa-map-marker-alt text-primary me-2"></i>
                Lomé, Togo
              </span>
              <span class="text-truncate me-3">
                <i class="far fa-clock text-primary me-2"></i>
                Durée: {{ offre.dure }} jours
              </span>
              <span class="text-truncate me-0">
                <i class="far fa-calendar-alt text-primary me-2"></i>
                Date limite: {{ formatDate(offre.datefin) }}
              </span>
            </div>
          </div>

          <div class="mb-5">
            <h4 class="mb-3">Description du poste</h4>
            <div v-html="offre.description"></div>
          </div>

          <div>
            <!-- <h4 class="mb-4">Postuler à l'offre</h4> -->
            <form>
              <!-- À personnaliser -->
              <!-- <p>Formulaire à venir...</p> -->
            </form>
          </div>
        </div>

        <!-- Résumé et entreprise -->
        <div class="col-lg-4">
          <div class="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
            <h4 class="mb-4">Résumé de l'offre</h4>
            <p>
              <i class="fa fa-angle-right text-primary me-2"></i>
              Publié le: {{ formatDate(offre.created_at) }}
            </p>
            <p>
              <i class="fa fa-angle-right text-primary me-2"></i>
              Durée: {{ offre.dure }} jours
            </p>
            <p>
              <i class="fa fa-angle-right text-primary me-2"></i>
              Date limite: {{ formatDate(offre.datefin) }}
            </p>
            <p v-if="offre.fichier">
              <i class="fa fa-angle-right text-primary me-2"></i>
              Fichier :
              <a :href="`/storage/${offre.fichier}`" target="_blank" style="color: red;" download>Télécharger</a>
            </p>
          </div>

          <div class="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
            <h4 class="mb-4">Entreprise</h4>
            <p class="m-0">2N Multi Service – Experts en sécurité humaine et électronique.</p>
          </div>
        </div>
      </div>

      <!-- Chargement ou erreur -->
      <div v-else class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Chargement...</span>
        </div>
        <p class="mt-3">Chargement de l'offre...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Banner from '@/components/Banner.vue'

const route = useRoute()
const offre = ref(null)

onMounted(async () => {
  const id = route.params.id
  console.log('Paramètre ID :', id)

  try {
    const res = await fetch(`http://localhost:8000/api/job-offers/${id}`)
    const data = await res.json()
    console.log('Données récupérées :', data)

    // correction ici
    offre.value = data.offres
  } catch (error) {
    console.error("Erreur lors de la récupération de l'offre :", error)
  }
})

function formatDate(dateStr) {
  if (!dateStr) return 'Non défini'
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateStr).toLocaleDateString('fr-FR', options)
}
</script>


<style scoped>
/* Tu peux ajouter tes styles ici */
</style>
