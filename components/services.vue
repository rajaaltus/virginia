<script>
export default {
  name: 'Services'
}
</script>

<template>
  <div>
    <!--START SERVICES-->
    <section class="section bg-light" id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h1 class="section-title text-center">Our Services</h1>
            <div class="section-title-border margin-t-20"></div>
            <blockquote class="blockquote text-center">
              <p class="lead pt-3">"Instead of focusing on the competition, focus on the customer."</p>
              <footer class="blockquote-footer text-right">Scott Cook <cite title="Source Title">Intuit</cite></footer>
            </blockquote>
          </div>
        </div>
        <div class="row margin-t-30">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-gift text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Import</h4>
                  <p
                    class="pt-2 text-muted"
                  >We bring what you need right to your doorstep.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-plane text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Export</h4>
                  <p
                    class="pt-2 text-muted"
                  >We send your goods to wherever you need them to be</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-way text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Consulting</h4>
                  <p
                    class="pt-2 text-muted"
                  >We offer consulting services to help you find the right choices for your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-help2 text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Medical Supplies</h4>
                  <p
                    class="pt-2 text-muted"
                  >We ship pharmaceuticals, surgical equipment, and other articles that you might use in a hospital or clinic.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-star text-custom"></i>
                <div class="media-body ml-4">
                  <h4>FMG Products</h4>
                  <p
                    class="pt-2 text-muted"
                  >We quickly deliver products which are time sensitive to you exactly when you need it.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-leaf text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Spices</h4>
                  <p
                    class="pt-2 text-muted"
                  >We transport chillies, peppers, and other spices for use in cooking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-hammer text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Supply On-Demand</h4>
                  <p
                    class="pt-2 text-muted"
                  >We source from various sellers by using our vast network of agents to bring you the most bang for your buck</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-helm text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Regular Supply Chain</h4>
                  <p
                    class="pt-2 text-muted"
                  >We regularly deliver consignments through our tightly connected network of raw material suppliers to make sure you never miss a consignments.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-exapnd2 text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Large Scale quantities</h4>
                  <p
                    class="pt-2 text-muted"
                  >If your needs are high, we can obtain goods from multiple sources to make sure your needs are fullfilled.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--START SERVICES-->

    <!--START WEBSITE-DESCRIPTION-->
    <section
      class="section bg-web-desc"
      :style="{'background-image': 'url(' + require('@/assets/images/call.jpg') + ')', 'background-size': 'cover','background-position': 'center'}"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="text-white">Want to know about our pricing?</h2>
            <p
              class="padding-t-15 home-desc mx-auto"
            >Our dedicated support team will assist you to get the overall cost of your demand at the earliest.</p>
            <a
              href="#contact"
              class="btn btn-bg-white margin-t-30"
            >Send Enquiry</a>
          </div>
        </div>
      </div>
    </section>
    <!--END WEBSITE-DESCRIPTION-->
  </div>
</template>