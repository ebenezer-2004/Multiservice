<template>
  <Banner title="Actualités" image="/assets/img/images/images-about.jpg" />
  <section class="blog_area section-padding" style="background:white">
    <div class="container">
      <div class="row">
        <!-- Blog principal -->
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">
            <!-- Articles -->
            <article
              class="blog_item"
              v-for="blog in paginatedBlogs"
              :key="blog.id"
            >
              <div class="blog_item_img">
                <img
                  class="card-img rounded-0"
                  :src="`http://localhost:8000/storage/${blog.image}`"
                  alt=""
                />
                <a href="#" class="blog_item_date">
                  <h3>{{ new Date(blog.created_at).getDate() }}</h3>
                  <p>
                    {{
                      new Date(blog.created_at).toLocaleString("default", {
                        month: "short",
                      })
                    }}
                  </p>
                </a>
              </div>
              <div class="blog_details">
                <a class="d-inline-block" :href="`/blog/${blog.id}`">
                  <h2 class="blog-head" style="color: #2d2d2d">
                    {{ blog.titre }}
                  </h2>
                </a>
                <p v-html="blog.contenu"></p>
                <ul class="blog-info-link">
                  <li>
                    <a :href="`/blog/${blog.id}`"><i class="fa fa-user"></i> {{ blog.type }}</a>
                  </li>
                  <li>
                    <a
                      ><i class="fa fa-comments"></i>
                      {{ blog.comments.length }} Commentaire(s)</a
                    >
                  </li>
                </ul>
              </div>
            </article>

            <!-- Message si aucun résultat -->
            <div v-if="paginatedBlogs.length === 0" class="text-center mt-5">
              <h4>Aucun article ne correspond à votre recherche.</h4>
            </div>

            <!-- Pagination -->
            <nav
              class="blog-pagination justify-content-center d-flex"
              v-if="totalPages > 1"
            >
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a class="page-link" href="#" @click.prevent="prevPage">
                    <i class="ti-angle-left"></i>
                  </a>
                </li>
                <li
                  class="page-item"
                  v-for="page in totalPages"
                  :key="page"
                  :class="{ active: currentPage === page }"
                >
                  <a class="page-link" href="#" @click.prevent="goToPage(page)">{{
                    page
                  }}</a>
                </li>
                <li
                  class="page-item"
                  :class="{ disabled: currentPage === totalPages }"
                >
                  <a class="page-link" href="#" @click.prevent="nextPage">
                    <i class="ti-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4">
          <div class="blog_right_sidebar">
            <!-- Recherche -->
            <aside class="single_sidebar_widget search_widget">
              <form @submit.prevent>
                <div class="form-group">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Rechercher un article"
                      v-model="searchQuery"
                    />
                    <div class="input-group-append">
                      <button class="btns" type="submit">
                        <i class="ti-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <button
                class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                type="submit"
              >
                Rechercher
              </button>
            </aside>

            <!-- Articles récents -->
            <aside class="single_sidebar_widget popular_post_widget">
              <h3 class="widget_title" style="color: #2d2d2d">
                Articles récents
              </h3>
              <div
                class="media post_item"
                v-for="recent in blogs.slice(0, 4)"
                :key="recent.id"
              >
                <img
                  :src="`http://localhost:8000/storage/${recent.image}`"
                  alt="post"
                  style="width: 80px; height: 60px; object-fit: cover"
                />
                <div class="media-body">
                  <a :href="`/blog/${recent.id}`">
                    <h3 style="color: #2d2d2d">{{ recent.titre }}</h3>
                  </a>
                  <p>
                    {{
                      new Date(recent.created_at).toLocaleDateString("fr-FR")
                    }}
                  </p>
                </div>
              </div>
            </aside>

            <!-- Newsletter -->
            <!-- <aside class="single_sidebar_widget newsletter_widget">
              <h4 class="widget_title" style="color: #2d2d2d">Newsletter</h4>
              <form action="#">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Entrer votre email"
                    required
                  />
                </div>
                <button
                  class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                  type="submit"
                >
                  S'abonner
                </button>
              </form>
            </aside> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { API_BASE_URL } from '@/config/api.js'
import { ref, computed, onMounted } from "vue"
import Banner from "@/components/Banner.vue"

const blogs = ref([])
const searchQuery = ref("")
const currentPage = ref(1)
const perPage = 4

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:8000/api/blog")
    const data = await response.json()
    blogs.value = data.Blog
  } catch (error) {
    console.error("Erreur lors du chargement des blogs :", error)
  }
})

const filteredBlogs = computed(() => {
  return blogs.value.filter((blog) =>
    blog.titre.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const totalPages = computed(() =>
  Math.ceil(filteredBlogs.value.length / perPage)
)

const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredBlogs.value.slice(start, start + perPage)
})

function goToPage(page) {
  currentPage.value = page
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}
</script>

<style scoped>
.blog_item_img img {
  height: 300px;
  object-fit: cover;
}
</style>
