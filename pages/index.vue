<template>
  <div id="app">
    <Navbar />

    <div v-scroll-spy>
      <!--START HOME-->
      <section
        class="section bg-home home-half"
        id="home"
        :style="{
          'background-image': 'url(' + '/images/bg-home.jpg' + ')',
          'background-size': 'cover',
          'background-position': 'center',
        }"
      >
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-white text-center">
              <h4 class="home-small-title">Connected. Gloabally.</h4>
              <h1 class="home-title">We bring your world closer</h1>
              <p class="padding-t-15 home-desc mx-auto">
                We are connected to ports around the world to bring you your
                goods.
              </p>
              <p class="play-shadow margin-l-r-auto mb-4">
                <a v-b-modal.modal class="play-btn video-play-icon">
                  <i class="mdi mdi-play text-center"></i>
                </a>
                <b-modal
                  id="modal"
                  hide-footer
                  size="lg"
                  centered
                  header-close-variant="white"
                >
                  <youtube
                    video-id="9VHdmh4MFd4"
                    ref="youtube"
                    width="900"
                    height="500"
                  ></youtube>
                </b-modal>
              </p>
            </div>
          </div>
        </div>
        <div class="wave-effect wave-anim">
          <div class="waves-shape shape-one">
            <div
              class="wave wave-one"
              :style="{
                'background-image':
                  'url(' + '/images/wave-shape/wave1.png' + ')',
              }"
            ></div>
          </div>
          <div class="waves-shape shape-two">
            <div
              class="wave wave-two"
              :style="{
                'background-image':
                  'url(' + '/images/wave-shape/wave2.png' + ')',
              }"
            ></div>
          </div>
          <div class="waves-shape shape-three">
            <div
              class="wave wave-three"
              :style="{
                'background-image':
                  'url(' + '/images/wave-shape/wave3.png' + ')',
              }"
            ></div>
          </div>
        </div>
      </section>
      <!--END HOME-->
      <section class="section-sm bg-light">
        <div class="container">
          <div class="col-md-10">
            <div class="row">
              <img width="25%" src="/kottram.svg" alt="Kottram Logo" />
              <img width="10%" src="/virginia.svg" alt="Virginia Logo" />
              <p class="mt-4 px-3">
                Kottram Healthcare private Limited is offering its exim services
                since 2009. Our company based in India. Virginia Enterprises has
                joint ventured with Kottram Healthcare Private limited to expand
                our services in east asian region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Services />
      <!-- <About /> -->
      <Testimonial />
      <!-- <GetStarted /> -->
      <!-- <Blog /> -->
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title:
        "VIRGINIA ENTERPRISES - IMPORT | EXPORT | TRADING, Vientiane, Laos",
    };
  },
};
</script>

<style scoped>
::v-deep .modal-content {
  background-color: #000000;
  color: white;
  background: none;
  border: none;
}
::v-deep .modal-header {
  border: none;
}
::v-deep .modal-backdrop {
  opacity: 0.5;
}
</style>
