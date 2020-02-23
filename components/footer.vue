<script>
/**
 * Footer component
 */
export default {
  name: 'Footer'
}
</script>

<template>
  <div>
    <!--START FOOTER-->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 margin-t-20">
            <img src="/logo.png" alt="" width="50%">
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>Information</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Bookmarks</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>Support</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href>FAQ</a>
                </li>
                <li>
                  <a href>Contact</a>
                </li>
                <li>
                  <a href>Disscusion</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>Subscribe</h4>
            <div class="text-muted margin-t-20">
              <p>Interested about our services? Just drop your email address to us. We will keep you posted about our news!</p>
            </div>
            <form class="form subscribe">
              <input placeholder="Email" class="form-control" required />
              <a href="#" class="submit">
                <i class="pe-7s-paper-plane"></i>
              </a>
            </form>
          </div>
        </div>
      </div>
    </footer>
    <!--END FOOTER-->

    <!--START FOOTER ALTER-->
    <div class="footer-alt">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="float-left pull-none">
              <p
                class="copy-rights text-muted mb-3 mb-sm-0"
              >2019 - {{ new Date().getFullYear()}} © VIRGINIA Enterprises - Powered by <a href="https://altusinfotech.com" target="_blank">ALTUS</a></p>
            </div>
            <div class="float-right pull-none">
              <ul class="list-inline social m-0">
                <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-linkedin"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-google-plus"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <!--START FOOTER ALTER-->
  </div>
</template>