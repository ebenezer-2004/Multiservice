<template>
  <div class="contact-form testimonial-area section-padding40 mb-40">
    <div class="container">
      <!-- Titre -->
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10">
          <div class="section-tittle text-center mb-100">
            <span class="element">Contact</span>
            <h2>Contactez-Nous</h2>
          </div>
        </div>
      </div>

      <div class="row no-gutters">
        <div class="col-lg-6 col-md-12">
          <div class="single-gallery">
            <div class="gallery-img" style="background-image: url(/assets/img/images/image-verification.jpg);"></div>
            <div class="thumb-content-box">
              <div class="thumb-content">
                <h3><a href="#">Besoin de plus<br> d'informations?</a></h3>
                <p>Envoyez-nous un message via ce formulaire pour plus d'éclaircissements.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="form-wrapper">
            <div class="row">
              <div class="col-xl-12">
                <div class="section-tittle section-tittle2 mb-30">
                  <h2>Laisser un message</h2>
                </div>
              </div>
            </div>

            <form @submit.prevent="submitForm">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-box user-icon mb-15">
                    <input type="text" v-model="form.name" placeholder="Votre nom" />
                    <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-box email-icon mb-15">
                    <input type="email" v-model="form.email" placeholder="Email" />
                    <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-box email-icon mb-15">
                    <input type="text" v-model="form.telephone" placeholder="Numéro de téléphone" />
                    <span class="text-danger" v-if="errors.telephone">{{ errors.telephone }}</span>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-box message-icon mb-15">
                    <textarea v-model="form.message" placeholder="Message"></textarea>
                    <span class="text-danger" v-if="errors.message">{{ errors.message }}</span>
                  </div>
                  <div class="submit-info">
                    <button class="submit-btn2" type="submit">Envoyer un message</button>
                  </div>
                  <p v-if="successMessage" class="text-success mt-2">{{ successMessage }}</p>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        telephone: '',
        message: ''
      },
      errors: {},
      successMessage: ''
    };
  },
  methods: {
    async submitForm() {
      this.errors = {};
      this.successMessage = '';

      try {
        const response = await fetch('http://localhost:8000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(this.form)
        });

        if (!response.ok) {
          const data = await response.json();
          if (data.errors) {
            this.errors = data.errors;
          }
        } else {
          this.successMessage = 'Message envoyé avec succès !';
          this.form = { name: '', email: '', telephone: '', message: '' };
        }
      } catch (error) {
        console.error('Erreur lors de l’envoi du message :', error);
      }
    }
  }
};
</script>

<style scoped>
.text-danger {
  color: red;
  font-size: 0.9em;
}
.text-success {
  color: green;
  font-size: 1em;
}
</style>
