<template>
  <div class="slider-area position-relative">
    <div class="slider-active">
      <video autoplay muted loop playsinline class="background-video">
        <source src="/assets/video/2n-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos HTML5.
      </video>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.slider-active {
  position: relative;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>
