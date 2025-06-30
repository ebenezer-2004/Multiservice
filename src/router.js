import { createRouter, createWebHistory } from "vue-router";
import Acceuil from "@/pages/Acceuil.vue";
import About from "@/pages/About.vue";
import Blog from "@/pages/Blog.vue";
import Contact from "@/pages/Contact.vue";
import Services from "@/pages/Services.vue";
import DetailService from "@/pages/DetailService.vue";
import DetailBlog from "@/pages/DetailBlog.vue";
import SecuriteCynophile from "@/Services/SecuriteCynophile.vue";
import SecuriteElectronique from "@/Services/SecuriteElectronique.vue";
import SecuriteGardiennage from "@/Services/SecuriteGardiennage.vue";
import SecuriteIncendie from "@/Services/SecuriteIncendie.vue";
import SurveillanceEvenementielle from "@/Services/SurveillanceEvenementielle.vue";
import NettoyageProprete from "@/Services/NettoyageProprete.vue";
import Offre from "@/pages/Offres.vue";
import DetailOffre from "@/pages/DetailEmploi.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Acceuil,
  },
  {
    path: "/a-propos",
    name: "About",
    component: About,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
   {
    path: '/services',
    name: 'Services',
    component: Services,
  },
   {
    path: '/offres',
    name: 'Offres',
    component: Offre,
  },
  {
    path: '/emploi/:id',
    name: 'Detail Emploi',
     props:true,
    component: DetailOffre,
  },
   {
    path: '/blog/:id',
    name: 'BlogDetail',
    props:true,
    component: DetailBlog,
  },

  //Routes des serivices
   {
    path: '/service/securite-gardiennage',
    name: 'SecuriteGardiennage',
    component: SecuriteGardiennage,
  },
  {
    path: '/service/securite-cynophile',
    name: 'SecuriteCynophile',
    component: SecuriteCynophile,
  },
   {
    path: '/service/surveillance-evenementielle',
    name: 'SurveillanceEvenementielle',
    component: SurveillanceEvenementielle,
  },
  {
    path: '/service/securite-incendie',
    name: 'SecuriteIncendie',
    component: SecuriteIncendie,
  },
  {
    path: '/service/nettoyage-proprete',
    name: 'NetoyagePropreté',
    component: NettoyageProprete,
  },
 {
    path: '/service/electronique',
    name: 'Electronique',
    component: SecuriteElectronique,
  },

//Route des services
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
