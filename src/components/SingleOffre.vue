<template>
  <Banner title="Emploi" />
  <div class="container-xxl py-5" style="background: #fff">
    <div class="container">
      <h1 class="text-center mb-5 wow animate__animated animate__fadeInUp">
        <!-- Liste des Offres -->
      </h1>

      <!-- Search Bar -->
      <div class="row  align-items-center mb-4">
        <!-- Champ de recherche -->
        <div class="col-12 col-md-6 mb-3 mb-md-0">
          <div class="input-group">
            <input
              type="text"
              class="form-control search-input custom-input"
              placeholder="Rechercher un poste ou une entreprise..."
              v-model="searchQuery"
            />
          </div>
        </div>

       
      </div>

      <!-- Tabs Navigation -->
      <div class="tab-class text-center mt-5">
        <!-- Tab Content -->
        <div class="tab-content">
          <div id="tab-1" class="tab-pane fade show active p-0">
            <div
              v-for="job in filteredJobs"
              :key="job.id"
              class="job-item p-4 mb-4 animate__animated animate__fadeInUp"
            >
              <div class="row g-4 align-items-center">
                <div class="col-md-2 col-3">
                  <img
                    class="img-fluid border rounded"
                    :src="job.logo"
                    alt="logo"
                    style="max-width: 100%; height: auto"
                  />
                </div>
                <div class="col-md-6 col-9">
                  <div class="text-start" style="text-align: left">
                    <h5 class="mb-5" style="font-size: 20px">
                      {{ job.title }}
                    </h5>

                    <div class="small text-muted" style="font-size: 15px">
                      <i
                        class="fa fa-map-marker-alt text-primary me-1"
                        style="font-size: 20px"
                      ></i>
                      {{ job.location }} |
                      <i class="far fa-clock text-primary me-1"></i>
                      {{ job.type }} |
                      <i class="far fa-money-bill-alt text-primary me-1"></i>
                      {{ job.salary }}
                    </div>
                  </div>
                </div>
                <div class="col-md-4 text-md-end text-start">
                  <a class="btn btn-primary mb-2" href="/emploi/1"
                    >Postuler</a
                  ><br />
                  <small class="text-muted" style="font-size: 15px"
                    ><i class="far fa-calendar-alt text-primary me-1"></i> Date
                    limite : {{ job.dateLine }}</small
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Tabs tab-2 et tab-3 peuvent être ajoutés dynamiquement si besoin -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from "@/components/Banner.vue";
import { ref, computed } from "vue";

const jobs = ref([
  {
    id: 1,
    title: "Développeur Vue.js",
    location: "Paris, France",
    type: "Full Time",
    salary: "3000€ - 5000€",
    logo: "/img/com-logo-1.jpg",
    applyLink: "#",
    dateLine: "01 Juil. 2025",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    location: "Lomé, Togo",
    type: "Featured",
    salary: "400.000 - 800.000 FCFA",
    logo: "/img/com-logo-2.jpg",
    applyLink: "#",
    dateLine: "05 Juil. 2025",
  },
  {
    id: 3,
    title: "Développeur Laravel",
    location: "Abidjan, Côte d’Ivoire",
    type: "Part Time",
    salary: "250.000 - 400.000 FCFA",
    logo: "/img/com-logo-3.jpg",
    applyLink: "#",
    dateLine: "10 Juil. 2025",
  },
  {
    id: 4,
    title: "Analyste Données",
    location: "Remote",
    type: "Full Time",
    salary: "5000€ / mois",
    logo: "/img/com-logo-4.jpg",
    applyLink: "#",
    dateLine: "15 Juil. 2025",
  },
  {
    id: 5,
    title: "Community Manager",
    location: "Cotonou, Bénin",
    type: "Featured",
    salary: "200.000 - 300.000 FCFA",
    logo: "/img/com-logo-5.jpg",
    applyLink: "#",
    dateLine: "20 Juil. 2025",
  },
]);

const searchQuery = ref("");
const selectedFilter = ref("");
const currentPage = ref(1);
const itemsPerPage = 10;

const filteredJobs = computed(() => {
  return jobs.value
    .filter((job) => {
      const matchTitle = job.title
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());
      const matchType = selectedFilter.value
        ? job.type.toLowerCase() === selectedFilter.value.toLowerCase()
        : true;
      return matchTitle && matchType;
    })
    .slice(
      (currentPage.value - 1) * itemsPerPage,
      currentPage.value * itemsPerPage
    );
});
</script>

<style scoped>
.job-item {
  /* border: 1px solid #dee2e6; */
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

.custom-input,
.custom-select {
  height: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
}


.custom-input:focus {
  border-color: #0d6efd;
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}

.custom-select {
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
}
</style>
