<template>
  <div dir="rtl">
    <footer class="footer-light">
      <!-- <div class="light-layout">
        <div class="container">
          <section class="small-section border-section border-top-0">
            <div class="row">
              <div class="col-lg-6">
                <div class="subscribe">
                  <div>
                    <h4 class="text-right">با کاراکلاب به روز باشید!</h4>
                    <p class="text-right">با عضویت در خبرنامه کاراکلاب از آخرین اخبار ما مطلع باشید</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <form
                  class="form-inline subscribe-form auth-form needs-validation"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                >
                  <div class="form-group mx-sm-3">
                    <input
                      type="text"
                      class="form-control"
                      name="EMAIL"
                      id="mce-EMAIL"
                      placeholder="ایمیل خود را وارد کنید!"
                      required="required"
                    />
                  </div>
                  <button type="submit" class="btn btn-solid" id="mc-submit">سابسکرایب</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div> -->
      <section class="section-b-space light-layout d-lg-block d-none" dir="ltr">
        <div class="container">
          <div class="row footer-theme partition-f">
            <div class="col-lg-4 col-md-6">
              <div class="footer-title footer-mobile-title">
                <h4 class="text-right pr-1">درباره</h4>
              </div>
              <div class="footer-contant">
                <div class="footer-logo text-right">
                  <img :src="'@/assets/images/icon/logo.png'" alt="logo" />
                </div>
                <p class="text-right">
                  یک متن ساختگی که در وصف سایت باید در این محل قرار بگیرد.
                </p>
                <div class="footer-social justify-content-end">
                  <ul class="px-0">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-rss" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col offset-xl-1">
              <div class="sub-title">
                <div class="footer-title">
                  <h4 class="text-right">حساب کاربری من</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <a href="#">مردان</a>
                    </li>
                    <li>
                      <a href="#">بانوان</a>
                    </li>
                    <li>
                      <a href="#">پوشاک</a>
                    </li>
                    <li>
                      <a href="#">اکسسوری</a>
                    </li>
                    <li>
                      <a href="#">ویژگی ها</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="sub-title">
                <div class="footer-title">
                  <h4 class="text-right">چرا ما؟</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <a href="#">حرید آسان</a>
                    </li>
                    <li>
                      <a href="#">خرید امن</a>
                    </li>
                    <li>
                      <a href="#">گالری</a>
                    </li>
                    <li>
                      <a href="#">پشتیبانی سریع</a>
                    </li>
                    <li>
                      <a href="#">ارتباط با ما</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="sub-title">
                <div class="footer-title">
                  <h4 class="text-right">اطلاعات فروشگاه</h4>
                </div>
                <div class="footer-contant">
                  <ul class="contact-list">
                    <li>
                      <i class="fa fa-map-marker"></i>کاراکلاب فروشگاهی برای همه
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>ارتباط با ما : 09999999999
                    </li>
                    <li>
                      <i class="fa fa-envelope-o"></i>آدرس ایمیل :
                      <a href="#">karaclub@shop.com</a>
                    </li>
                    <li><i class="fa fa-fax"></i>شماره فکس : 123456</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="sub-footer d-lg-block d-none">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="footer-end">
                <p class="text-right">
                  <i class="fa fa-copyright" aria-hidden="true"></i> کلیه حقوق
                  این سایت متعلق به کاراکلاب است
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="payment-card-bottom">
                <ul>
                  <li>
                    <a href="#">
                      <img :src="'@/assets/images/icon/visa.png'" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src="'@/assets/images/icon/mastercard.png'" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src="'@/assets/images/icon/paypal.png'" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        :src="'@/assets/images/icon/american-express.png'"
                        alt
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src="'@/assets/images/icon/discover.png'" alt />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-mobile d-block d-lg-none">
        <div class="top-section">
          <h4 class="text-center">درباره سایت</h4>
          <p class="text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی
          </p>
        </div>
        <div class="download-boxes d-flex jusyify-content-around mt-2 pb-2">
          <img
            src="https://epasazh.com/_nuxt/img/cafebazaar-dl-app-icon.77c34e7.svg"
            alt=""
          />
          <img
            src="https://epasazh.com/_nuxt/img/google-play-dl-app-icon.43eead7.svg"
            alt=""
          />
        </div>
        <div class="bottom-section">
          <p class="text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.footer-contant ul li {
  text-align: right;
}
.footer-mobile {
  .top-section {
    border-bottom: 1px solid #eaeaea;
    padding: 10px 15px 15px;
    h4 {
      font-size: 15px;
    }
    p {
      font-size: 11px;
      line-height: 21px;
      color: #5d5d5d;
    }
  }
  .download-boxes {
    justify-content: space-around;
    border-bottom: 1px solid #eaeaea;
    img {
      width: 40%;
    }
  }
  .bottom-section {
    padding: 10px 15px 15px;
    p {
      font-size: 11px;
      line-height: 21px;
      color: #5d5d5d;
    }
  }
}
</style>
