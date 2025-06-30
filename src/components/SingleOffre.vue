<template>
  <Banner title="Emploi" image="/assets/img/images/images-about.jpg" />
  <div class="container-xxl py-5" style="background: #fff">
    <div class="container">
      <h1 class="text-center mb-5 wow animate__animated animate__fadeInUp">
        Liste des Offres
      </h1>

      <!-- Search Bar -->
      <div class="row align-items-center mb-4">
        <div class="col-12 col-md-6 mb-3 mb-md-0">
          <div class="input-group">
            <input
              type="text"
              class="form-control search-input custom-input"
              placeholder="Rechercher un poste..."
              v-model="searchQuery"
            />
          </div>
        </div>
      </div>

      <!-- Tabs Navigation -->
      <div class="tab-class text-center mt-5">
        <div class="tab-content">
          <div id="tab-1" class="tab-pane fade show active p-0">
            <div
              v-for="job in paginatedJobs"
              :key="job.id"
              class="job-item p-4 mb-4 animate__animated animate__fadeInUp"
            >
              <div class="row g-4 align-items-center justify-content-between" style="padding-left: 20px;">
                
                <div class="col-md-6 col-9">
                  <div class="text-start" style="text-align: left">
                    <h5 class="mb-3" style="font-size: 20px">
                      {{ job.title }}
                    </h5>
                    <div
                      class="small text-muted"
                      style="font-size: 15px"
                      v-html="truncateHtml(job.description, 100)"
                    ></div>
                  </div>
                </div>
                <div class="col-md-4 text-md-end text-start">
                  <a class="btn btn-primary mb-2" :href="`/emploi/${job.id}`">
                    Postuler
                  </a>
                  <br />
                  <small class="text-muted" style="font-size: 15px">
                    <i class="far fa-calendar-alt text-primary me-1"></i>
                    Date limite : {{ job.dateLine }}
                  </small>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="d-flex justify-content-center mt-4">
              <nav>
                <ul class="pagination">
                  <li
                    class="page-item"
                    :class="{ disabled: currentPage === 1 }"
                  >
                    <a
                      class="page-link"
                      href="#"
                      @click.prevent="goToPage(currentPage - 1)"
                      >Précédent</a
                    >
                  </li>
                  <li
                    v-for="page in totalPages"
                    :key="page"
                    class="page-item"
                    :class="{ active: currentPage === page }"
                  >
                    <a
                      class="page-link"
                      href="#"
                      @click.prevent="goToPage(page)"
                      >{{ page }}</a
                    >
                  </li>
                  <li
                    class="page-item"
                    :class="{ disabled: currentPage === totalPages }"
                  >
                    <a
                      class="page-link"
                      href="#"
                      @click.prevent="goToPage(currentPage + 1)"
                      >Suivant</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
            <!-- Fin pagination -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from "@/components/Banner.vue";
import { ref, computed, onMounted } from "vue";

const jobs = ref([]);
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 5;

// Charger les offres depuis l'API
const fetchJobs = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/job-offers");
    const data = await response.json();
    jobs.value = data.offres.map((offre) => ({
      id: offre.id,
      title: offre.title,
      description: decodeHtml(offre.description),
      dateLine: new Date(offre.datefin).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    }));
  } catch (error) {
    console.error("Erreur lors du chargement des offres :", error);
  }
};

onMounted(fetchJobs);

// Recherche
const filteredJobs = computed(() =>
  jobs.value.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

// Pagination
const totalPages = computed(() =>
  Math.ceil(filteredJobs.value.length / itemsPerPage)
);

const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredJobs.value.slice(start, start + itemsPerPage);
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

// Décoder les entités HTML dans la description
const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

// Tronquer le texte nettoyé
const truncateHtml = (html, limit) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};
</script>


<style scoped>
.job-item {
  border-radius: 8px;
  background-color: #fdfdfd;
  transition: all 0.3s ease;
}
.job-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}
.text-muted {
  text-align: left;
  align-items: center;
}
.search-input,
.form-select {
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ced4da;
}
.search-input:focus,
.form-select:focus {
  box-shadow: none;
}
.btn-primary {
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}
.tab-class ul.nav {
  border-bottom: 2px solid #e0e0e0;
}
.tab-class .nav-link {
  padding: 10px 20px;
  font-weight: 500;
  color: #333;
}
.tab-class .nav-link.active {
  border-bottom: 3px solid #0d6efd;
  background-color: transparent;
  color: #0d6efd;
}
.custom-input {
  height: 48px;
  max-width: 100%;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 16px;
  box-shadow: none;
  border: 1px solid #ced4da;
  transition: border-color 0.3s ease;
}
.custom-input:focus {
  border-color: #0d6efd;
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}
</style>
