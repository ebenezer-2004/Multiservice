<template>
    <Banner title="Détail actualité" image='/assets/img/images/images-about.jpg'/>
  <section class="blog_area single-post-area section-padding" style="background:#fff">
    <div class="container">
      <div class="row">
        <!-- Article principal -->
        <div class="col-lg-8 posts-list" v-if="blog">
          <div class="single-post">
            <div class="feature-img">
              <img
                class="img-fluid"
                :src="`http://localhost:8000/storage/${blog.image}`"
                :alt="blog.titre"
              />
            </div>
            <div class="blog_details">
              <h2 style="color: #2d2d2d">{{ blog.titre }}</h2>
              <ul class="blog-info-link mt-3 mb-4">
                <li>
                  <a :href="`blog/${blog.id}`"
                    ><i class="fa fa-user"></i> {{ blog.type }}</a
                  >
                </li>
                <li>
                  <a :href="`blog/${blog.id}`"
                    ><i class="fa fa-comments"></i>
                    {{ blog.comments.length }} Commentaire(s)</a
                  >
                </li>
              </ul>
              <p class="excert" v-html="blog.contenu"></p>
            </div>
          </div>

          <!-- Zone des commentaires -->
          <!-- Zone des commentaires -->
          <div class="comments-area mt-5">
            <h4 class="mb-4">{{ blog.comments.length }} Commentaire(s)</h4>

            <div class="comment-list" v-if="paginatedComments.length">
              <div
                class="single-comment d-flex mb-5"
                v-for="(comment, index) in paginatedComments"
                :key="index"
              >
                <!-- <div class="thumb me-3">
                  <img src="/assets/img/blog/comment_1.png" alt="avatar" />
                </div> -->
                <div class="desc flex-grow-1">
                  <p class="comment mb-2">{{ comment.contenu }}</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h5 class="mb-0">{{ comment.name || "Anonyme" }}</h5>
                      <small class="text-muted">{{
                        new Date(comment.created_at).toLocaleString()
                      }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="mt-3">
              <p>Aucun commentaire pour le moment.</p>
            </div>

            <!-- Pagination -->
            <div
              class="pagination mt-4 d-flex justify-content-center"
              v-if="totalPages > 1"
            >
              <button
                class="btn btn-sm btn-outline-primary mx-1"
                :disabled="currentPage === 1"
                @click="goToPage(currentPage - 1)"
              >
                Précédent
              </button>
              <button
                v-for="page in totalPages"
                :key="page"
                class="btn btn-sm mx-1"
                :class="
                  page === currentPage ? 'btn-primary' : 'btn-outline-primary'
                "
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
              <button
                class="btn btn-sm btn-outline-primary mx-1"
                :disabled="currentPage === totalPages"
                @click="goToPage(currentPage + 1)"
              >
                Suivant
              </button>
            </div>

            <!-- Formulaire de commentaire -->
            <div class="comment-form mt-5">
              <h4 class="mb-4">Laisser un commentaire</h4>
              <form
                class="form-contact comment_form"
                @submit.prevent="submitComment"
              >
                <div class="row">
                  <div class="col-12 mb-3">
                    <textarea
                      class="form-control"
                      v-model="commentForm.comment"
                      rows="5"
                      placeholder="Écrire un commentaire"
                    ></textarea>
                  </div>
                  <div class="col-md-6 mb-3">
                    <input
                      class="form-control"
                      v-model="commentForm.name"
                      type="text"
                      placeholder="Nom"
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <input
                      class="form-control"
                      v-model="commentForm.email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="submitting"
                  >
                    {{ submitting ? "Envoi..." : "Poster le commentaire" }}
                  </button>
                </div>
                <p v-if="successMessage" class="text-success mt-2">
                  {{ successMessage }}
                </p>
                <p v-if="errorMessage" class="text-danger mt-2">
                  {{ errorMessage }}
                </p>
              </form>
            </div>
          </div>

          <!-- Formulaire de commentaire -->
         
        </div>

        <!-- Barre latérale -->
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

            <!-- Articles récents filtrés -->
            <aside class="single_sidebar_widget popular_post_widget">
              <h3 class="widget_title" style="color: #2d2d2d">
                Articles récents
              </h3>
              <div
                class="media post_item"
                v-for="recent in filteredRecentBlogs"
                :key="recent.id"
              >
                <img
                  :src="`http://localhost:8000/storage/${recent.image}`"
                  alt="post"
                  style="width: 80px; height: 60px; object-fit: cover"
                />
                <div class="media-body">
                  <router-link :to="`/blog/${recent.id}`">
                    <h3 style="color: #2d2d2d">{{ recent.titre }}</h3>
                  </router-link>
                  <p>
                    {{
                      new Date(recent.created_at).toLocaleDateString("fr-FR")
                    }}
                  </p>
                </div>
              </div>
              <div v-if="filteredRecentBlogs.length === 0" class="mt-3">
                <p>Aucun article trouvé.</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Banner from "@/components/Banner.vue"

const route = useRoute();
const blog = ref(null);
const allBlogs = ref([]);
const searchQuery = ref("");

const commentForm = ref({
  name: "",
  email: "",
  comment: "",
});
const submitting = ref(false);
const successMessage = ref("");
const errorMessage = ref("");
const currentPage = ref(1);
const commentsPerPage = 3;

const paginatedComments = computed(() => {
  if (!blog.value) return [];
  const start = (currentPage.value - 1) * commentsPerPage;
  return blog.value.comments.slice(start, start + commentsPerPage);
});

const totalPages = computed(() => {
  return blog.value
    ? Math.ceil(blog.value.comments.length / commentsPerPage)
    : 1;
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const submitComment = async () => {
  if (!blog.value) return;

  submitting.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  try {
    const response = await fetch(
      `http://localhost:8000/api/commentaires/${blog.value.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: commentForm.value.name,
          email: commentForm.value.email,
          comment: commentForm.value.comment,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Erreur lors de l’envoi du commentaire."
      );
    }

    const result = await response.json();
    blog.value.comments.push(result.comment);
    successMessage.value = result.message || "Commentaire envoyé avec succès.";
    commentForm.value = { name: "", email: "", comment: "" };
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    submitting.value = false;
  }
};

onMounted(async () => {
  try {
    const id = route.params.id;

    // Récupérer l'article en détail
    const detailRes = await fetch(
      `http://localhost:8000/api/blog/detail/${id}`
    );
    const detailData = await detailRes.json();
    blog.value = detailData.Blog[0];

    // Récupérer tous les articles pour la sidebar
    const allRes = await fetch("http://localhost:8000/api/blog");
    const allData = await allRes.json();
    allBlogs.value = allData.Blog;
  } catch (error) {
    console.error("Erreur lors du chargement des données :", error);
  }
});

const filteredRecentBlogs = computed(() => {
  return allBlogs.value
    .filter((b) =>
      b.titre.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .slice(0, 4);
});
</script>

<style scoped>
.feature-img img {
  max-height: 400px;
  object-fit: cover;
  width: 100%;
}

.comment-list .single-comment {
  flex-wrap: wrap;
}

.comment-list .thumb img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.pagination button {
  min-width: 36px;
}
</style>
