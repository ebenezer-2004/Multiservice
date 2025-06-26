import { createRouter, createWebHistory } from 'vue-router';
import Acceuil from '@/pages/Acceuil.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Acceuil,
  },
 

  // Ajoutez d'autres routes ici
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
