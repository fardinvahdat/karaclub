<template>
  <div dir="rtl">
    <Header />
    <Breadcrumbs title="درباره ما" class="my-2" />
    <!-- about section start -->
    <section class="about-page section-b-space p-0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-11 mx-auto">
            <div class="banner-section">
              <img :src="aboutbanner" class="img-fluid w-100" alt />
            </div>
          </div>
          <div class="col-lg-11 mx-auto">
            <h4 class="text-right">{{ aboutTitle }}</h4>
            <p class="text-right">{{ aboutText }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- about section end -->
    <!--Testimonial start-->
    <!-- <section class="testimonial small-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper testimonial-slider">
                <div
                  class="swiper-slide"
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <div class="media">
                    <div class="text-center">
                      <img :src="item.imagepath" alt="#" />
                      <h5>{{ item.name }}</h5>
                      <h6>{{ item.role }}</h6>
                    </div>
                    <div class="media-body">
                      <p>{{ item.decs }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!--Testimonial ends-->
    <!--Team start-->
    <section id="team" class="team section-b-space ratio_asos" dir="ltr">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <h2 class="text-right">تیم ما</h2>
            <div v-swiper:mySwiper2="swiperOption2">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(team, index) in teams"
                  :key="index"
                >
                  <div>
                    <div>
                      <img :src="team.imagepath" class="img-fluid" alt />
                    </div>
                    <h4>{{ team.name }}</h4>
                    <h6>{{ team.post }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Team ends-->
    <Footer />
  </div>
</template>
<script>
import Header from "../../components/header/header3";
import Footer from "../../components/footer/footer1";
import Breadcrumbs from "../../components/widgets/breadcrumbs";
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop:true,
        breakpoints: {
          991: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      },
      swiperOption2: {
        slidesPerView: 4,
        spaceBetween: 20,
        loop:true,
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      items: [
        {
          imagepath: require("@/assets/images/2.jpg"),
          name: "علی عقیلی",
          role: "دیزاینر",
          decs: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        },
        {
          imagepath: require("@/assets/images/20.jpg"),
          name: "مصطفی فتحیان",
          role: "تستر",
          decs: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        },
      ],
      teams: [
        {
          imagepath: require("@/assets/images/team/1.jpg"),
          name: "صابر ابر",
          post: "مسئول منابع انسانی",
        },
        {
          imagepath: require("@/assets/images/team/2.jpg"),
          name: "بهنام چالش",
          post: "حسابدار",
        },
        {
          imagepath: require("@/assets/images/team/3.jpg"),
          name: "احمد موسوی",
          post: "مدیر پروژه",
        },
        {
          imagepath: require("@/assets/images/team/4.jpg"),
          name: "جواد قربانی",
          post: "توسعه دهنده",
        },
      ],
      aboutbanner: require("@/assets/images/about/about-us.jpg"),
      aboutTitle: "درباره کارا",
      aboutText:
        "شرکت کارآفرینان رقابت آریا فعالیت خود را با استفاده از تجارب چندین ساله موسسین ، در فروردین 1401آغاز کرده است و با همراهی تیمی سخت کوش و پرتلاش مسیری طولانی را پیموده است. مسیری نه چندان هموار که قدم گذاشتن در آن ، تنها با یک باور مشترک ممکن است. بر این باور هستیم که با هوشمندی بیشتر می توان خرید ارزان تر و زندگی آسان تر داشت. ما بستری برای رشد افراد و بهتر شدن سطح زندگی آنها فراهم می آوریم و همواره در تلاش برای بهبود و گسترش این بستر هستیم. در نظر داریم تمام نیاز های خدماتی افراد را در یک بستر واحد به کاربران عرضه کنیم . خرید آسان ، سریع و مطمئن از جمله امکاناتیست که برای مشتریان فراهم میشود. ما با اتکا به نیروهای مجرب ومدیرانی با تجربه درعرصه فناوری‌ اطلاعات و الکترونیکی ‌شدن فرآیندهای تجاری، اقتصادی، اداری و بازرگانی برای تمامی کسب ‌وکارهای خصوصی و دولتی در سطح کشور و همچنین ایجاد بستری امن بر پایه اعتماد ، تمامی تلاشمان را مبنی بر رضایت روزافزون مشتریان و همکارانمان در این بستر داریم.",
    };
  },
};
</script>
<style lang="scss" scoped>
.swiper-button-next,
.swiper-button-prev {
  background-size: 40px;
  width: 50px !important;
}
.swiper-button-next {
  background-image: url(@/assets/images/arrows/next.png) !important;
  transform: rotate(180deg);
  right: -35px;
}
.swiper-button-prev {
  background-image: url(@/assets/images/arrows/next.png) !important;
  left: -35px;
}
</style>
