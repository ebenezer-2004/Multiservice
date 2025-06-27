<template>
  <Banner title="Surveillance Evénementielle" image="/assets/img/images/images-evenement-2.jpg" />
  <section class="service-detail container py-5 mb-5">
    <div class="row">
      <!-- Navigation latérale -->
      <Aside />

      <!-- Article principal -->
      <article class="col-lg-8">
        <div class="service-article p-4 p-md-5">
          <h2 class="section-title">Surveillance Evénementielle</h2>
          <img
             src="/assets/img/images/image-verification.jpg" style="height: 100%;"
            alt="Agent de sécurité professionnel en uniforme bleu marine surveillant un site industriel avec une posture attentive et professionnelle"
            class="service-img"
          />
          <p
            id="lead"
            style="font-size: 15px; text-align: justify"
            class="lead"
          >
            Nous intervenons sur tous types d'événements entre autres Concerts,
            Soirées privées, Compétitions sportives, Conférences, Festivals,
            Salons professionnels, etc.
          </p>

          <p style="text-align: justify">
            La réussite d’un événement repose autant sur sa qualité
            organisationnelle que sur la sécurité des lieux, des participants et
            du personnel. Avec <strong>2N MULTI SERVICE, </strong> vous
            bénéficiez d’un service de surveillance événementielle professionnel
            et rassurant, adapté à tout type de manifestation.
          </p>
          <p style="text-align: justify">Nos missions incluent :</p>
          <ul>
            <li>• Contrôle des accès et filtrage rigoureux à l’entrée ;</li>
            <li>
              • Gestion des flux de personnes et prévention des mouvements de
              foule ;
            </li>
            
            <li>
              •Intervention rapide en cas d’incident ou de situation anormale.
            </li>
          </ul>
          <br />
          <p style="text-align: justify">
            Nos agents spécialisés assurent une présence discrète mais
            dissuasive, pour garantir le bon déroulement de votre événement en
            toute sérénité.
          </p>

          <div class="row g-4 mt-4">
            <div class="col-md-6">
              <div class="service-card card h-100">
                <div class="card-body">
                  <h5>Sites industriels & commerciaux</h5>
                  <p>
                    Solutions complètes pour la sécurisation de vos zones
                    sensibles avec contrôle d'accès rigoureux, filtrage des
                    visiteurs et prévention des intrusions 24h/24.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-card card h-100">
                <div class="card-body">
                  <h5>Surveillance de chantiers</h5>
                  <p>
                    Protection efficace contre le vol de matériel et vandalisme
                    avec des agents mobiles ou fixes adaptés aux contraintes
                    spécifiques de votre chantier.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-card card h-100">
                <div class="card-body">
                  <h5>Gardiennage résidentiel</h5>
                  <p>
                    Sécurité discrète pour résidences privées et copropriétés
                    avec gestion professionnelle des visiteurs et rondes de
                    surveillance régulières.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-card card h-100">
                <div class="card-body">
                  <h5>Rondes avec traçabilité</h5>
                  <p>
                    Système de contrôle et suivi en temps réel des agents avec
                    rapports automatisés pour une transparence totale de nos
                    interventions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5 pt-3 border-top">
            <h4 class="mb-4"></h4>
            <div class="row g-3">
              <div class="col-md-4">
                <div class="d-flex">
                  <!-- <i class="fas fa-check-circle text-success me-3 fs-4 mt-1"></i> -->
                  <div>
                    <h6 style="font-size: 20px">Formation continue</h6>
                    <p class="small mb-0">
                      Agents régulièrement formés aux dernières techniques de
                      sécurité
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex">
                  <!-- <i class="fas fa-check-circle text-success me-3 fs-4 mt-1"></i> -->
                  <div>
                    <h6 style="font-size: 20px">Réactivité</h6>
                    <p class="small mb-0">
                      Intervention rapide avec temps de réponse inférieur à 15
                      minutes
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex">
                  <!-- <i class="fas fa-check-circle text-success me-3 fs-4 mt-1"></i> -->
                  <div>
                    <h6 style="font-size: 20px">Surveillance 24/7</h6>
                    <p class="small mb-0">
                      Service ininterrompu toute l'année, jours fériés inclus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="header-info-right">
            <a href="/contact" class="btn mt-5"
              >Contact <i class="ti-arrow-right"></i>
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
  <Contact style="background: #fff; margin-top: 100px; padding: 20px" />
</template>
<script setup>
import Banner from "@/components/Banner.vue";
import Aside from "@/components/Aside.vue";
import Contact from "@/components/SingleBlog.vue";
// Animation au scroll optionnelle
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(card);
  });
});
</script>
<style>
:root {
  --primary-color: #1a4b84;
  --secondary-color: #d8323c;
  --accent-color: #d8323c;
  --light-bg: #f8f9fa;
  --dark-text: #2c3e50;
  --border-radius: 12px;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: var(--dark-text);
  background-color: #f5f7fa;
}

/* Navigation latérale */
.service-sidebar {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 20px;
  overflow: hidden;
}

.service-sidebar h4 {
  color: var(--primary-color);
  font-weight: 700;
  border-bottom: 2px solid var(--light-bg);
  padding-bottom: 15px;
  margin-bottom: 20px;
  position: relative;
}

.service-sidebar h4::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 50px;
  height: 2px;
  background: var(--secondary-color);
}

.service-sidebar ul {
  padding-left: 0;
}

.service-sidebar li {
  margin-bottom: 12px;
  transition: all 0.3s ease;
}

.service-sidebar li:hover {
  transform: translateX(5px);
}

.col-md-6 {
  margin-bottom: 30px;
  margin-top: 20px;
}
.service-sidebar li a {
  display: block;
  padding: 8px 15px;
  color: var(--dark-text);
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.service-sidebar li a:hover {
  background-color: rgba(26, 75, 132, 0.05);
  color: var(--primary-color);
}

#lead {
  background-color: rgba(26, 75, 132, 0.05);
  color: var(--primary-color);
  padding: 10px;
  border-radius: 5px;
  border-left: 4px solid;
}

.service-sidebar li a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background: transparent;
  transition: all 0.3s ease;
}

.service-sidebar li a:hover::before {
  background: var(--primary-color);
}

/* Contenu principal */
.service-article {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-article:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.section-title {
  color: var(--primary-color);
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 25px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--primary-color),
    var(--secondary-color)
  );
  border-radius: 3px;
}

.service-img {
  border-radius: var(--border-radius);
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.lead {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
  font-weight: 500;
}

/* Cartes de services */
.service-card {
  border: none;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(26, 75, 132, 0.1) 0%,
    rgba(233, 185, 73, 0.05) 100%
  );
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
}

.service-card:hover::before {
  opacity: 1;
}

.service-card .card-body {
  padding: 25px;
}

.service-card h5 {
  color: var(--primary-color);
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
  position: relative;
}

.service-card h5::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--secondary-color);
}

.service-card p {
  color: #555;
  line-height: 1.6;
}

/* Bouton de contact */
.contact-btn {
  background: linear-gradient(90deg, var(--primary-color), #2a5f9e);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(26, 75, 132, 0.3);
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 20px;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(26, 75, 132, 0.4);
  color: white;
}

/* Responsive */
@media (max-width: 991.98px) {
  .service-sidebar {
    position: static;
    margin-bottom: 30px;
  }
}
</style>
