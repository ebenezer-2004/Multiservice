<template>
  <div class="container-xxl py-5">
    <div class="container">
<div class="text-center">
                <div class="bg-primary mb-3 mx-auto" style="width: 60px; height: 2px;"></div>
                <h1 class="display-5 mb-5">Our Services</h1>
            </div>

      <!-- Les 4 Blocs -->
      <div class="row g-4">
        <div class="col-sm-6 col-lg-3" v-for="(item, i) in items" :key="i">
          <div class="h-100 bg-dark p-4 p-xl-5 card-hover">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <div class="btn-square rounded-circle icon-wrapper">
                <img class="img-fluid" :src="item.icon" :alt="item.title" />
              </div>
              <h1 class="display-1 mb-0 text-black">0{{ i + 1 }}</h1>
            </div>
            <h5 class="text-white">{{ item.title }}</h5>
            <hr class="w-25" />
            <p class="mb-0 text-white-50">{{ item.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const items = [
  {
    icon: '/img/icon/icon-1.png',
    title: 'Solutions Personnalisées',
    desc: 'Des offres sur mesure adaptées à vos besoins spécifiques pour une sécurité personnalisée.',
  },
  {
    icon: '/img/icon/icon-2.png',
    title: 'Technologie de Pointe',
    desc: 'Nous intégrons les dernières innovations pour une surveillance intelligente et efficace.',
  },
  {
    icon: '/img/icon/icon-3.png',
    title: 'Surveillance 24/7',
    desc: 'Protection continue jour et nuit pour assurer votre tranquillité d’esprit en permanence.',
  },
  {
    icon: '/img/icon/icon-4.png',
    title: 'Accompagnement Global',
    desc: 'De l’audit à la maintenance, en passant par l’installation et la formation : on s’occupe de tout.',
  },
];
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Raleway:wght@600;800&display=swap');

.container-xxl {
  font-family: 'Raleway', 'Montserrat', sans-serif;
  overflow-x: hidden;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(90deg, #C21010, #2471A3, #000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  position: relative;
  margin-bottom: 0.5rem;
  animation: fadeDown 1s ease-in-out;
  
  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background-color: #C21010;
    margin: 8px auto 0;
    border-radius: 2px;
  }
}

.section-subtitle {
  font-size: 1.05rem;
  color: #ccc;
  animation: fadeUp 1.2s ease-in-out;
}

.card-hover {
  background-color: #141414;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid #292929;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;

  &:hover {
    background-color: #1d1d1d;
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
}

.card-hover:nth-child(1) {
  animation-delay: 0.2s;
}
.card-hover:nth-child(2) {
  animation-delay: 0.4s;
}
.card-hover:nth-child(3) {
  animation-delay: 0.6s;
}
.card-hover:nth-child(4) {
  animation-delay: 0.8s;
}

.text-black {
  color: #C21010 !important;
}

.icon-wrapper {
  background-color: #000;
  transition: transform 0.4s ease;
}

.icon-wrapper:hover {
  background-color: #C21010;
  transform: scale(1.1);
}

.btn-square img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.btn-square:hover img {
  transform: scale(1.15);
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

