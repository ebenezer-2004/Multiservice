<template>
  <header>
    <div class="header-area">
      <div class="main-header">
        <div class="header-top d-none d-lg-block">
          <div class="container">
            <div class="col-xl-12">
              <div
                class="row d-flex justify-content-between align-items-center"
              >
                <div class="header-info-left">
                  <ul>
                    <li><i class="fas fa-phone"></i> +880 278 367 367</li>
                    <li>
                      <i class="far fa-envelope"></i>brexitsupport@gmail.com
                    </li>
                  </ul>
                </div>
                <div class="header-info-right">
                  <a href="/contact" class="btn"
                    >Contact <i class="ti-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header-bottom header-sticky">
          <div class="container">
            <div class="row align-items-center">
              <!-- Logo -->
              <div class="col-xl-2 col-lg-2">
                <div class="logo">
                  <a href="/"
                    ><img
                      src="/assets/img/logo/2nmultiservice_logo.png"
                      alt=""
                      style="height: 70px"
                  /></a>
                </div>
              </div>
              <div class="col-xl-9 col-lg-8">
                <div class="menu-wrapper d-flex align-items-center">
                  <!-- Main-menu -->
                  <div class="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li :class="{ active: route.path === '/' }">
                          <a href="/">Acceuil</a>
                        </li>
                        <li :class="{ active: route.path === '/a-propos' }">
                          <a href="/a-propos">A propos</a>
                        </li>
                        <li :class="{ active: route.path === '/services' }">
                          <a href="/services">Services</a>
                        </li>
                        <li :class="{ active: route.path === '/blog' }">
                          <a href="/blog">Blog</a>
                        </li>
                        <li :class="{ active: route.path === '/offres' }">
                          <a href="/offres">Offres</a>
                        </li>

                        <li :class="{ active: route.path === '/contact' }">
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="col-xl-1 col-lg-2">
                <!-- Search Box -->
                <div class="search d-none d-lg-block">
                  <ul>
                    <li>
                      <div class="nav-search search-switch">
                        <!-- <span class="fas fa-search"></span> -->
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Mobile Menu -->
              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header End -->
  </header>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped></style>
