<template>
  <div>
    <!-- <div class="title1 section-t-space">
      <h4>{{subtitle}}</h4>
      <h2 class="title-inner1">{{ subtitle }}</h2>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="product-para">
            <p class="text-center">{{ description }}</p>
          </div>
        </div>
      </div>
    </div> -->
    <section class="section-b-space p-t-0 ratio_asos">
      <div class="container d-none d-lg-block" style="position: relative">
        <div class="bg-slider"></div>
        <div class="row d-flex justify-content-center">
          <div class="col">
            <h4 class="title-inner1 text-center">{{ subtitle }}</h4>
            <p class="text-center desc">
              {{ description }}
              <a href=""> مشاهده همه <i class="fa fa-angle-left"></i></a>
            </p>
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(product, index) in products"
                  :key="index"
                >
                  <div class="product-box">
                    <productBox1
                      @opencartmodel="showCartModal"
                      @showCompareModal="showcomparemodal"
                      @openquickview="showquickview"
                      @showalert="alert"
                      @alertseconds="alert"
                      :product="product"
                      :index="index"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="swiper-button-prev d-none d-lg-block"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next d-none d-lg-block"
          slot="button-next"
        ></div>
        <div class="swiper-scrollbar"></div>
      </div>
      <div class="container-fluid d-block d-lg-none">
        <h4 class="title-inner1 text-center">
          {{ subtitle }} <timer date="December 20, 2022" />
        </h4>
        <p class="text-center desc">
          {{ description }}
          <a href=""> مشاهده همه <i class="fa fa-angle-left"></i></a>
        </p>
        <ul class="d-flex product-list-sm">
          <li>
            <img
              src="../../../../assets/images/product-slider/discount.png"
              alt=""
            />
          </li>
          <li v-for="(product, index) in products" :key="index">
            <div class="product-box">
              <productBox1
                @opencartmodel="showCartModal"
                @showCompareModal="showcomparemodal"
                @openquickview="showquickview"
                @showalert="alert"
                @alertseconds="alert"
                :product="product"
                :index="index"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="alert"
    >
      <p class="text-right">
        محصول مورد نظر با موفقیت به لیست علاقه مندی ها اضافه شد.
      </p>
    </b-alert>
  </div>
</template>

<script>
import productBox1 from "../../../../components/product-box/product-box1";
import timer from "../../../../components/widgets/timer";
export default {
  props: ["products"],
  components: {
    productBox1,
    timer,
  },
  data() {
    return {
      title: "بهترین کالکشن",
      subtitle: "تخفیف های بهاری",
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      description: "بهار را با تخفیف آغاز کن!",
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 10,
        freeMode: false,
        autoplay: true,
        delay: 4000,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20,
            scrollbar: {
              draggable: true,
            },
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      },
    };
  },
  methods: {
    alert(item) {
      this.dismissCountDown = item;
    },
    showCartModal(item, productData) {
      this.showCart = item;
      this.cartproduct = productData;
      this.$emit("openCart", this.showCart, this.cartproduct);
    },
    showquickview(item, productData) {
      this.showquickviewmodel = item;
      this.quickviewproduct = productData;
      this.$emit(
        "openQuickview",
        this.showquickviewmodel,
        this.quickviewproduct
      );
    },
    showcomparemodal(item, productData) {
      this.showcomapreModal = item;
      this.comapreproduct = productData;
      this.$emit("openCompare", this.showcomapreModal, this.comapreproduct);
    },
  },
};
</script>
<style scoped lang="scss">
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
.bg-slider {
  background-image: url(@/assets/images/home-banner/slider-bg.jpg);
  border-radius: 40px;
  position: relative;
  height: 330px;
  position: absolute;
  top: 0;
  width: 106%;
  left: -3%;
  right: -3%;
  @media screen and (max-width: 992px) {
    width: 100%;
    right: 0;
    left: 0;
  }
}
.swiper-container-initialized {
  position: relative;
  top: 20px;
}
.product-box {
  box-shadow: 0 0 11px #00000052;
  background: #fff;
  padding: 4px;
  border-radius: 25px;
  position: relative;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
  @media screen and (max-width: 992px) {
    width: 24vw;
    margin-left: 2rem;
  }
  @media screen and (max-width: 768px) {
    width: 29vw;
    margin-left: 1rem;
    border-radius: 5px;
  }
  @media screen and (max-width: 500px) {
    width: 45vw;
    margin-left: 0.75rem;
    border-radius: 5px;
  }
}
.product-list-sm {
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100vw;
  padding: 0;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-button {
    width: 2px;
    background: transparent;
    height: 2px;
  }
  &:first-child {
    img {
      object-fit: cover;
      height: 100%;
      width: 60vw;
      @media screen and (max-width: 768px) {
        width: 250px;
      }
    }
  }
}
.swiper-slide {
  margin-bottom: 10px;
}
.section-b-space {
  margin: 2rem 0;

  @media screen and (max-width: 992px) {
    margin-top: 0;
  }
  background: rgba(255, 228, 228, 0.32157);
  padding: 30px 0 70px 0;
  .title-inner1 {
    font-size: 33px;
    color: #fff;
    margin-top: 1rem;
    @media screen and (max-width: 425px) {
      font-size: 23px;
    }
  }
  .desc {
    color: #fff;
    font-size: 17px;
    margin-top: 10px;
    @media screen and (max-width: 425px) {
      font-size: 15px;
    }
    a {
      float: left;
      color: #fff;
      font-size: 15px;
      position: absolute;
      left: 10px;
      &::before {
      }
    }
  }
  @media screen and (max-width: 1024px) {
    background-image: url(@/assets/images/home-banner/slider-bg.jpg);
  }
}
</style>
