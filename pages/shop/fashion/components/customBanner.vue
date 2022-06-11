<template>
  <div class="custom-banner">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-11 d-flex justify-content-between flex-wrap">
          <h4 class="text-right w-100 category-title">
            {{ title }} <a href="" class="float-left">مشاهده همه</a>
          </h4>
          <div
            class="card-wrapper d-lg-block d-none"
            v-for="(img, index) in imgList"
            :key="index"
            :style="'background:url(' + img.src + ')'"
          >
            <div data-v-7c232edd="" class="content-overlay d-flex flex-column">
              <a
                data-v-7c232edd=""
                href="#"
                title="مانتو زنانه کرپ مدل مانتو تک کتی"
                class="content w-100 h-100 d-flex flex-column"
                ><h3
                  data-v-7c232edd=""
                  class="name bold text-center w-100 h-100"
                >
                  مانتو زنانه کرپ مدل مانتو تک کتی
                </h3>
                <div
                  data-v-7c232edd=""
                  class="
                    price-info
                    d-flex
                    flex-column
                    align-items-center
                    justify-content-center
                    w-100
                    mt-3
                  "
                >
                  <div
                    data-v-7c232edd=""
                    class="discount-info d-flex justify-content-center"
                  >
                    <div data-v-7c232edd="" class="old-price ml-3">550,000</div>
                    <div data-v-7c232edd="" class="percent">
                      <span data-v-7c232edd="">10</span>
                      <span data-v-7c232edd="" class="sign">%</span>
                    </div>
                  </div>
                  <div
                    data-v-7c232edd=""
                    class="
                      main-price
                      d-flex
                      align-items-center
                      justify-content-end
                      mt-2
                    "
                  >
                    <span data-v-7c232edd="" class="bold">495,000</span>
                    <small data-v-7c232edd="" class="mr-2">تومان</small>
                  </div>
                </div></a
              >
              <!-- <div data-v-7c232edd="" class="cta-holder">
                <a
                  data-v-7c232edd=""
                  href="#"
                  target="_blank"
                  class="cta-btn"
                  ><span data-v-7c232edd="">مشاهده</span></a
                >
              </div> -->
            </div>
          </div>
          <div class="d-lg-none d-block text-center">
            <div
              class="card-wrapper"
              v-for="(img, index) in imgList.slice(0, 9)"
              :key="index"
              :style="'background:url(' + img.src + ')'"
            >
              <div
                data-v-7c232edd=""
                class="content-overlay d-flex flex-column"
              >
                <a
                  data-v-7c232edd=""
                  href="#"
                  target="_blank"
                  title="مانتو زنانه کرپ مدل مانتو تک کتی"
                  class="content w-100 h-100 d-flex flex-column"
                  ><h3
                    data-v-7c232edd=""
                    class="name bold text-center w-100 h-100"
                  >
                    مانتو زنانه کرپ مدل مانتو تک کتی
                  </h3>
                  <div
                    data-v-7c232edd=""
                    class="
                      price-info
                      d-flex
                      flex-column
                      align-items-center
                      justify-content-center
                      w-100
                      mt-3
                    "
                  >
                    <div
                      data-v-7c232edd=""
                      class="discount-info d-flex justify-content-center"
                    >
                      <div data-v-7c232edd="" class="old-price ml-3">
                        550,000
                      </div>
                      <div data-v-7c232edd="" class="percent">
                        <span data-v-7c232edd="">10</span>
                        <span data-v-7c232edd="" class="sign">%</span>
                      </div>
                    </div>
                    <div
                      data-v-7c232edd=""
                      class="
                        main-price
                        d-flex
                        align-items-center
                        justify-content-end
                        mt-2
                      "
                    >
                      <span data-v-7c232edd="" class="bold">495,000</span>
                      <small data-v-7c232edd="" class="mr-2">تومان</small>
                    </div>
                  </div></a
                >
                <div data-v-7c232edd="" class="cta-holder">
                  <a
                    data-v-7c232edd=""
                    href="#"
                    class="cta-btn"
                    ><span data-v-7c232edd="">مشاهده</span></a
                  >
                </div>
              </div>
            </div>
            <nuxt-link to="/" class="more-btn">مشاهده بیشتر</nuxt-link>

            <div
              data-v-b498362e=""
              class="sgm-row"
              has-min-height="true"
              gtag-list-item-id="home_products_slider"
              gtag-list-item-name=""
              hide-product-name="true"
            >
              <a
                data-v-b498362e=""
                href="javascript:;"
                class="promotion-ads-holder pasazh-slider pasazh-white-bg"
                ><div
                  data-v-b498362e=""
                  class="img-bg lazyLoad isLoaded"
                  style="
                    background-image: url('https://dl.epasazh.com/images/advertises/a-d-img-62835648431e7.jpg?cc');
                  "
                ></div
              ></a>
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
      title: "پوشاک زنانه",
      imgList: [
        {
          src: "	https://dl.epasazh.com/ProductsThumImage/16052022/26527_NQouJn0KtQ_1652714426.jpg",
        },
        {
          src: "https://dl.epasazh.com/ProductsThumImage/16052022/26527_NQouJn0KtQ_1652714426.jpg",
        },
        {
          src: "https://dl.epasazh.com/ProductsThumImage/16052022/26545_ZcJAZB5Erx_1652711958.jpg",
        },
        {
          src: "https://dl.epasazh.com/ProductsThumImage/16052022/23970_web_vD8eL_1652721312.jpg",
        },
        {
          src: "https://dl.epasazh.com/ProductsThumImage/16052022/26244_7fQxfO2CYt_1652720032.jpg",
        },
        {
          src: "	https://dl.epasazh.com/ProductsThumImage/16052022/26527_NQouJn0KtQ_1652714426.jpg",
        },
        {
          src: "https://dl.epasazh.com/ProductsThumImage/16052022/23970_web_vD8eL_1652721312.jpg",
        },
        {
          src: "https://dl.epasazh.com/ProductsThumImage/16052022/26545_ZcJAZB5Erx_1652711958.jpg",
        },
        {
          src: "https://dl.epasazh.com/ProductsThumImage/16052022/23970_web_vD8eL_1652721312.jpg",
        },
        {
          src: "https://dl.epasazh.com/ProductsThumImage/16052022/26244_7fQxfO2CYt_1652720032.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .sgm-row {
    padding: 13px 0;
    .promotion-ads-holder .img-bg {
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 70px;
    padding-top: 25%;
    border-radius: 10px;
    overflow: hidden;
}
}
.category-title {
  margin-bottom: 2rem;
  font-size: 24px;
  font-weight: 700;
  @media screen and (max-width: 992px) {
    padding: 0;
    margin: 2rem 1rem;

    font-size: 14px;
  }
  a {
    color: #8b8b8b;
    font-size: 15px;
    font-weight: 400;
    @media screen and (max-width: 992px) {
      margin-left: 1rem;
    }
  }
}
.custom-banner {
  margin-top: 6rem;
  @media screen and (max-width:992px){
      margin-top: 2rem;
  }
}
.more-btn {
  display: block;
  margin: 2rem 0;
  border: 1px solid #b3b3b3;
  border-radius: 200px;
  height: 37px;
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  padding: 0 35px;
  color: #424242;
  line-height: normal;
  margin: auto;
}
.card-wrapper {
  width: calc(20% - 2%);
  margin: 1%;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  display: inline-block;
  background-position: 50%;
  border-radius: 13px;
  height: 366px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: calc(31.33% - 2%);
    margin: 1%;
    height: 200px;
  }
  .name {
    font-size: 14px;
    line-height: 25px;
    max-height: 53px;
    overflow: hidden;
  }
}
.content-overlay {
  opacity: 0;
  &:hover {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.71);
    width: 100%;
    height: 100%;
    visibility: visible;
    opacity: 1;
    transition: all 0.3s;
  }
  .cta-holder {
    padding: 10px 15px 20px;
    margin-top: 27px;
    .cta-btn {
      background: rgba(24, 98, 219, 0.56863);
      border-radius: 10px;
      height: 41px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: normal;
      min-height: 43px;
      color: #fff;
      border: 2px solid rgba(17, 72, 162, 0.569);
      font-size: 13px;
    }
  }
  .content {
    color: #fff;
    padding: 30px 15px 0;
    transform: scale(0.92);
    transition: all 0.3s;
    .discount-info {
      .old-price {
        text-decoration: line-through;
        color: rgba(108, 108, 108, 0.71);
      }
      .percent {
        background: #067700;
        border-radius: 7px;
        padding: 0 4px;
        height: 22px;
        color: #fff;
      }
    }
  }
}
</style>