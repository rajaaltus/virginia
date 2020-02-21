<script>
/**
 * Features component
 */
export default {
  name: 'Features'
};
</script>

<template>
  <!--START FEATURES-->
  <section class="section" id="features">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>A modern freight company bridging the gap between you and your goods</h3>
            <p
              class="text-muted web-desc"
            >Get your goods delivered perfecty with no fuss. whatever your business needs, we'll get it to you.</p>
            <ul class="text-muted list-unstyled margin-t-30 features-item-list">
              <li class>We put a lot of effort in design.</li>
              <li class>The most important ingredient of successful website.</li>
              <li class>Submit Your Orgnization.</li>
            </ul>
            <a href="#" class="btn btn-custom margin-t-30">
              Learn More
              <i class="mdi mdi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/growth-analytics.svg" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--END FEATURES-->
</template>