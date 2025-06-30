<template>
  <section class="home-blog-area pb-bottom">
    <div class="container">
      <div class="row">
        <!-- Section titre -->
        <div class="col-lg-4 col-md-6">
          <div class="section-tittle mb-100">
            <span class="element">Actualités</span>
            <h2>Nos Récentes activités</h2>
            <p>
              Notre équipe partage ici les dernières nouvelles et réflexions sur
              la sécurité privée et technologique.
            </p>
            <a href="/blog" class="all-btn">Voir plus</a>
          </div>
        </div>

        <!-- Articles dynamiques -->
        <div
          class="col-lg-4 col-md-6"
          v-for="article in articles"
          :key="article.id"
        >
          <div class="home-blog-single mb-30">
            <div class="blog-img-cap">
              <div class="blog-img">
                <img
                  :src="`http://localhost:8000/storage/${article.image}`"
                  alt="Image blog"
                  class="img-fluid rounded"
                />
              </div>
              <div class="blog-cap mt-3">
                <p class="text-muted mb-1">{{ formatDate(article.created_at) }}</p>
                <h3 class="h5">
                  <a :href="`/blog/${article.id}`" class="text-dark text-decoration-none">
                    {{ article.titre }}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <!-- Message si aucun article -->
        <div class="col-12" v-if="articles.length === 0" style="margin-top: -50px;">
          <div class="alert alert-info text-center py-5 shadow-sm rounded">
            <h4 class="mb-3">
              <i class="bi bi-info-circle-fill me-2"></i>
              Aucun article disponible pour le moment
            </h4>
            <p class="mb-0">Revenez bientôt pour découvrir nos dernières actualités et interventions.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const articles = ref([])

const fetchArticles = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/blog')
    const data = await response.json()
    const allBlogs = data.Blog || []

    // Trier par date décroissante et prendre les deux plus récents
    articles.value = allBlogs
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 2)
  } catch (error) {
    console.error('Erreur lors du chargement des articles :', error)
  }
}

const formatDate = (dateStr) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateStr).toLocaleDateString('fr-FR', options)
}

onMounted(fetchArticles)
</script>

<style scoped>
.home-blog-single img {
  max-height: 220px;
  object-fit: cover;
}
</style>
