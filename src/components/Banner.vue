<template>
<div class="slider-area2 section-bg2"
     :style="{ backgroundImage: `url(${image})`}"
     :data-background="image" >
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap hero-cap2"  width="auto">
                                <h2 style='font-weight: 900;' >{{ title }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
</script>

<style scoped>

.section-bg2{
  background-position: center;
}
.slider-area2 {
  position: relative;
  background-size: cover;
  background-position: top center; 
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
}


.slider-area2::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45); /* Dark overlay */
  backdrop-filter: blur(5px);
  z-index: 1;
}

.slider-height2 {
  position: relative;
  z-index: 2;
  text-align: center;
  animation: fadeInUp 1s ease-out;
}

.hero-cap2 h2 {
  color: #fff;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* .slider-height2{
  backdrop-filter: blur(5px);
} */
</style>
