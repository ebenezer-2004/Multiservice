<template>
  <div class="video-container">
    <video autoplay muted loop playsinline class="background-video">
      <source src="/assets/video/2n-video.mp4" type="video/mp4" playbackRate="2" />
      Votre navigateur ne supporte pas la lecture de vidéos HTML5.
    </video>

    <div class="text-overlay" >
      <div class="text-content" style="backdrop-filter: blur(5px);padding: 30px;">
        <h1 class="hero-title">
          2N Multi Service — L’expertise au service de votre tranquillité.
        </h1>
        <p class="hero-subtitle">
          Votre sécurité, notre mission. Chez 2N Multi Service, nous allions
          présence humaine et innovation technologique pour une protection
          fiable, 24h/24.
        </p>

        <div class="header-info-right mt-4">
          <a href="/a-propos" class="btn btn-primary">
            Nous découvrir <i class="ti-arrow-right"></i>
          </a>
        </div>
      </div>

      <div class="scroll-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.background-video');
    if (video) {
      video.playbackRate = 2;
    }
  });
</script>

<style scoped>
.video-container {
  position: relative;
  height: 82vh;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.4); */
  padding: 1rem;
  /* backdrop-filter: blur(5px); */
}

.text-content {
  max-width: 900px;
  padding: 1rem;
}

.hero-title {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.hero-subtitle {
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-20px);
  }
  60% {
    transform: translateX(-50%) translateY(-10px);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .text-content {
    padding: 1rem 0.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>
