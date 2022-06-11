<template>
  <div class="container-fluid my-lg-5" dir="ltr">
    <div class="row justify-content-center">
      <div class="col-lg-11">
        <div class="shops-swipper d-block d-lg-none">
          <div class="ads-swipper-holder">
            <div v-swiper:mySwiper="swiperOption" dir="rtl">
              <div class="swiper-wrapper justify-content-center py-5">
                <div
                  class="swiper-slide m-0"
                  v-for="(product, index) in 3"
                  :key="index"
                >
                  <div class="p-0">
                    <div data-v-1c7e9c38="" class="new-shop-item">
                      <a data-v-1c7e9c38="" href="" class="d-block"
                        ><div data-v-1c7e9c38="" class="nsi-logo">
                          <img
                            data-v-1c7e9c38=""
                            src="https://dl.epasazh.com/ShopLogo/13212_20210408_115115.jpg?v2"
                            alt="سارامد شعبه ی پوشاک زنانه"
                          />
                        </div>
                        <div data-v-1c7e9c38="" class="nsi-name">
                          سارامد شعبه ی پوشاک زنانه
                        </div>
                        <div
                          data-v-1c7e9c38=""
                          class="nsi-desc pasazh-gray-text"
                        >
                          ارزان بخرید، شیک بپوشید، از کیفیت لذت ببرید
                        </div>
                        <div data-v-1c7e9c38="" class="nsi-products">
                          <div data-v-1c7e9c38="" class="nsi-product">
                            <div
                              data-v-1c7e9c38=""
                              class="nsi-product-image lazyLoad isLoaded"
                              style="
                                background-image: url('https://dl.epasazh.com/ProductsThumImage/17052022/13212_8pQ4FbTFFp_1652804168.jpg');
                              "
                            ></div>
                          </div>
                          <div data-v-1c7e9c38="" class="nsi-product">
                            <div
                              data-v-1c7e9c38=""
                              class="nsi-product-image lazyLoad isLoaded"
                              style="
                                background-image: url('https://dl.epasazh.com/ProductsThumImage/17052022/13212_OoIS2Q237j_1652803800.jpg');
                              "
                            ></div>
                          </div>
                          <div data-v-1c7e9c38="" class="nsi-product">
                            <div
                              data-v-1c7e9c38=""
                              class="nsi-product-image lazyLoad isLoaded"
                              style="
                                background-image: url('https://dl.epasazh.com/ProductsThumImage/17052022/13212_axiLJgTLBi_1652803521.jpg');
                              "
                            ></div>
                          </div>
                          <!---->
                        </div></a
                      >
                      <button data-v-1c7e9c38="" class="follow-btn relative">
                        <span data-v-1c7e9c38="" class="fade show"
                          >مشاهده</span
                        >
                        <!-- <span data-v-1c7e9c38="" class="fade">دنبال شده</span> -->
                        <!---->
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="banners d-none d-lg-block">
          <div class="row">
            <div
              class="col d-block c-pointer"
              v-for="(banner, index) in banners"
              :key="index"
            >
              <nuxt-link to="/">
                <img
                  :src="banner"
                  class="img-fluid m-auto w-100 lazyLoad isLoaded"
                  alt=""
              /></nuxt-link>
            </div>
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
      banners: [
        "https://dl.epasazh.com/images/advertises/a-d-img-61c876e8968dd.jpg",
        "https://dl.epasazh.com/images/advertises/a-d-img-621494d947318.png",
        "https://dl.epasazh.com/images/advertises/a-d-img-61c876bd16a38.png",
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        centeredSlidesBounds: true,
        // itemsPerSlide: 1,
        freeMode: false,
        // autoplay: true,
        // delay: 4000,
        // direction:'ltr',
        loop: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  //   width: 70vw !important;
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1.2) !important;
  z-index: 9;
  height: 100%;
}
.shops-swiper {
  padding: 50px 0 !important;
  .swiper-container {
    padding: 50px 0 !important;
  }
}
.shops-swiper {
  padding: 50px 0 !important;
}
.new-shop-item {
  text-align: center;
  direction: rtl;
  box-shadow: 0 0 3px rgb(145, 145, 145);
  width: 100%;
  margin: auto;
  border-radius: 6px;
  padding: 15px 0;
  background: #fff;
  overflow: hidden;
  .nsi-logo {
    width: 60px;
    height: 60px;
    border-radius: 100px;
    overflow: hidden;
    margin: auto;
  }
  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    transform: scale(1.03);
  }
  .nsi-desc,
  .nsi-name {
    font-size: 9px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px;
    color: #000;
  }
  .nsi-desc {
    width: 100%;
    direction: rtl;
    margin: 4px auto auto;
    transition: all 0.3s;
    color: rgb(107, 107, 107);
  }
  .nsi-products {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 0 8px;
    .nsi-product {
      display: inline-flex;
      flex: 1 1 auto;
      margin: 8px;
      .nsi-product-image {
        width: 100%;
        height: 100%;
        border-radius: 3px;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 1;
        display: inline-block;
        padding-top: 100%;
        margin: auto;
      }
    }
  }
  .follow-btn,
  .shop-item-follow-btn {
    outline: none !important;
    line-height: normal;
    height: 35px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    border-radius: 200px;
    background-color: #009fe0;
    border: 1px solid transparent;
    width: 68%;
    color: #fff;
    margin: 25px auto auto;
    position: relative;
  }
}
.banners {
  a {
    &:before {
      border-top: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: scaleX(0);
    }
    &:after,
    &:before {
      position: absolute;
      top: 17px;
      right: 30px;
      bottom: 17px;
      left: 30px;
      content: "";
      opacity: 0;
      border-radius: 24px;
      transition: opacity 0.35s, transform 0.35s;
      &:hover {
        opacity: 1;
        transform: scale(1) rotate(20deg);
        -webkit-transform: scale(1) rotate(1.5deg);
      }
    }
    &:hover:before,
    &:hover:after {
      opacity: 1;
      transform: scale(1) rotate(20deg);
      -webkit-transform: scale(1) rotate(1.5deg);
    }
    &:after {
      border-right: 2px solid #fff;
      border-left: 2px solid #fff;
      transform: scaleY(0);
    }
  }
  img {
    border-radius: 24px;
  }
}
</style>