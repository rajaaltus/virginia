<template>
  <!-- STRAT NAVBAR -->
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark" id="navbar">
    <div class="container">
      <!-- LOGO -->
      <a class="navbar-brand logo text-uppercase" href="/">
        <img src="/logo.png" alt="" id="logo">
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu()"
      >
        <i class="mdi mdi-menu"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav navbar-center" id="mySidenav" v-scroll-spy-active="{class: 'active'}">
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#home'}"
              class="nav-link"
              data-scroll-spy-id="home"
              href="javascript: void(0);"
            >Home</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#features', offset: -5}"
              class="nav-link"
              data-scroll-spy-id="features"
              href="javascript: void(0);"
            >Features</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#services', offset: -5}"
              class="nav-link"
              data-scroll-spy-id="services"
              href="javascript: void(0);"
            >Services</a>
          </li>
          <!-- <li class="nav-item">
            <a
              v-scroll-to="{ el:'#about', offset: -5}"
              class="nav-link"
              data-scroll-spy-id="about"
              href="javascript: void(0);"
            >About</a>
          </li> -->
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#testi', offset: -5}"
              class="nav-link"
              data-scroll-spy-id="testi"
              href="javascript: void(0);"
            >Testimonial</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#blog'}"
              class="nav-link"
              data-scroll-spy-id="blog"
              href="javascript: void(0);"
            >Blog</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#contact'}"
              class="nav-link"
              data-scroll-spy-id="contact"
              href="javascript: void(0);"
            >Contact</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  <!-- END NAVBAR -->
</template>


<script>
/**
 * Navbar component
 */
export default {
  mounted: () => {
    window.onscroll = function() {
      onwindowScroll();
    };
    var navbar = document.getElementById("navbar");
    var logo = document.getElementById("logo");
    function onwindowScroll() {
      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        navbar.style.backgroundColor = "#2C1245";
        navbar.style.padding = "10px";
        logo.style.width = "50%";
      } else {
        navbar.style.backgroundColor = "";
        navbar.style.padding = "20px";
        logo.style.width = "100%";
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    }
  }
};
</script>

