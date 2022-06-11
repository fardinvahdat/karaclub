<template>
  <div dir="rtl" class="single-product">
    <b-alert
    v-if="showmodal"
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="alert"
    >
      <p class="text-right">
        آیتم مورد نظر با موفقیت به لیست علاقه مندی ها اضاقه شد.
      </p>
    </b-alert>
    <Header />
    <Breadcrumbs :title="getDetail.title" class="my-2"/>
    <!-- section start -->
    <section class="pt-2">
      <div class="collection-wrapper">
        <div class="container-fluid padding-mobile">
          <div class="row justify-content-center">
            <div class="col-lg-11 padding-mobile">
              <div class="d-flex wrapper flex-wrap flex-lg-nowrap" style=" padding: 10px 5px">
                <div class="col-xl-5 col-lg-4 col-xs-12 padding-mobile">
                  <div v-swiper:mySwiper="swiperOption" ref="mySwiper" :pagination="true">
                    <div class="swiper-wrapper">
                      <div
                        class="swiper-slide"
                        v-for="(product, index) in getDetail.images"
                        :key="index"
                      >
                        <img
                          :src="getImgUrl(product.src)"
                          :id="product.image_id"
                          class="img-fluid bg-img"
                          :alt="product.alt"
                        />
                      </div>
                    </div>
                    <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">

                    </div>
                  </div>
                  <div class="row d-none d-xl-flex mt-2">
                    <div class="col-12">
                      <div v-swiper:mySwiper1="swiperOption1">
                        <div class="swiper-wrapper slider-right-nav">
                          <div
                            class="swiper-slide w-auto"
                            v-for="(product, index) in getDetail.images"
                            :key="index"
                          >
                            <img
                              :src="getImgUrl(product.src)"
                              :id="product.image_id"
                              class="img-fluid bg-img alternative-slider-img"
                              alt="product.alt"
                              height="73"
                              width="73"
                              v-on:click="slideTo(index)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-8 rtl-text padding-mobile">
                  <div class="product-right">
                    <div class="header">
                      <h2
                        class="
                          text-right
                          title
                          m-0
                          d-flex
                          justify-content-between
                        "
                      >
                        {{ getDetail.title }}
                        <span class=" d-none d-lg-block">
                          <i class="ti-heart"></i>

                          <!-- <b-navbar toggleable>
                            <b-navbar-toggle target="navbar-toggle-collapse"> -->
                              <i class="ti-share"></i>
                            <!-- </b-navbar-toggle>
                          </b-navbar>
                          <b-collapse id="navbar-toggle-collapse" is-nav>
                            <b-navbar-nav class="mr-auto p-0 mb-3">
                              <i class="ti-instagram"></i>
                              <i class="ti-whatsapp"></i>
                            </b-navbar-nav>
                          </b-collapse> -->
                        </span>
                      </h2>
                      <div
                        class="light-gray-text product-code text-right"
                        style=""
                      >
                        <span
                          class="
                            product-info-label
                            w-100
                            justify-content-between
                             d-none d-lg-flex
                          "
                        >
                          کد محصول:732469
                          <div class="d-inline">
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="flex-grow-1 w-100">
                      <div class="price">
                      <h3 v-if="getDetail.sale">
                        {{ strReplace(String(price)) }}تومان
                      </h3>
                      <h3 v-else>
                        {{ strReplace(String(price)) }}
                      </h3>
                      <p class="text-right time d-none d-lg-block">
                        <i class="ti-time pl-1"></i>زمان حدودی ارسال :
                        <span>{{ strReplace(String(1)) }} روز</span>
                      </p>
                    </div>
                    <div class="info">
                      <div class="box">
                        <p class="d-flex align-items-lg-center align-items-lg-start flex-lg-row flex-column text-right">
                        رنگ : 
                        <ul class="color-variant text-right px-0 flex-lg-wrap flex-nowrap d-flex d-lg-block">
                        <li
                          v-bind:class="{ active: activeColor == variant }"
                          v-for="(variant, variantIndex) in Color(
                            getDetail.variants
                          )"
                          :key="variantIndex"
                        >
                           <div class="d-flex align-items-center">
                             <a
                            :class="[variant]"
                            class="m-0"
                            v-bind:style="{ 'background-color': variant }"
                            v-on:click="
                              sizeVariant(
                                getDetail.variants[variantIndex].image_id,
                                variantIndex,
                                variant
                              )
                            "
                          ></a>
                          <span>{{getDetail.variants[variantIndex].color_fa}}</span>
                           </div>
                        </li>
                      </ul>
                      </p>
                      <div class="size d-flex align-items-lg-center align-items-lg-start flex-lg-row flex-column text-right mt-3">
                        <p class="text-right">
سایز:
                      </p>
                      <div class="size-box">
                        <ul class="text-right px-0 flex-lg-wrap flex-nowrap d-flex d-lg-block">
                          <li
                            class="product-title"
                            v-bind:class="{ active: selectedSize == size }"
                            v-for="(size, index) in size"
                            :key="index"
                          >
                            <a
                              href="javascript:void(0)"
                              v-on:click="changeSizeVariant(size)"
                              >{{ size }}</a
                            >
                          </li>
                        </ul>
                      </div>
                      </div>
                      </div>
                      <div class="product-buttons text-right d-lg-block d-none">
                      <button
                        class="btn btn-solid"
                        title="buy now"
                        @click="buyNow(getDetail, counter)"
                        :disabled="counter > getDetail.stock"
                      >
                        <i class="ti-shopping-cart ml-2"></i>ثبت خرید
                      </button>
                      <p><img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-delivery-truck-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" height="40" alt=""> ارسال به کل کشور : <span>14000</span> تومان</p>
                    </div>
                    </div>
                    </div>
                    <div class="card-wrapper d-none d-lg-flex">
                      <div class="seller-info-holder">
                            <div class="info-box">
                              <div class="ib-header">
                                  <span>فروشنده</span>
                                  <div class="disabled-elem" id="header-shop-follow2"></div>
                                  <button class="follow-btn fancyModalOpenBtn" data-html="auth-modal" title="با دنبال نمودن این فروشگاه، محصولات آن را در صفحه علاقه مندی های خود مشاهده نمایید." data-disabled-elem="header-shop-follow2" data-shop-id="568019">دنبال کردن</button>                                                                                                            
                              </div>
                              <div class="ib-body">
                                <a class="shop-name-row " id="shop-name-row" style="" href="#" target="_blank">
                                    <span class="logo-holder"><img src="	https://dl.epasazh.com/ShopLogo/default.jpg?v2" height="48" alt="فروشگاه پوشاک آسنات"></span>
                                    <div class="detail-holder">
                                        <h4>پوشاک آسنات</h4>
                                        <small>پوشش خوب و زیبا خود شیفتگی نیست بلکه عزت نفس است</small>
                                    </div>
                                </a>
                                <div id="shop-rate-content" style=""><div class="rate-detail-row pasazh-dark-blue-text">
                                  <span>امتیاز 5 از 5</span>
                                  <span class="sep">|</span>
                                  <span>100% رضایت از خرید</span>
                              </div>
                            </div>
                          </div>
                          <div class="ib-footer">
                              <div class="disabled-elem" id="send-message-to-seller-de"></div>
                              <button class="btn-item fancyModalOpenBtn" data-html="product-detail-contact-modal">تماس با فروشنده</button>
                              <button class="btn-item  fancyModalOpenBtn" data-html="auth-modal">پیام به فروشنده</button>                                                                                     
                          </div>
                        </div>
                      </div>
                      <div class="bottom-box">
                        <a href="#"> محصولات خود را در کاراکلاب بفروشید!</a>
                      </div>
                    </div>
                    </div>
                    <div class="product-description d-block d-lg-none">
                      <div class="desc">
                        <p class="title">
                        توضیحات محصول
                      </p>
                      <div class="content">
                        <pre data-v-e5946488="" class="text-right">کالج جدید<br/>بسیار شیک خوش پا و راحت<br/>پاشنه سه سانت<br/>سایز37تا40<br/>سفارش
                        </pre>
                      </div>
                      </div>
                      <div class="code">
                        <p>کد محصول : <span>{{strReplace(String(65936))}}</span></p>
                      </div>
                      <div class="cost">
                        <div class="title">
                          <p>هزینه ارسال</p>
                          <p>
                            ارسال به سراسر کشور : <span>رایگان</span>
                          </p>
                        </div>
                      </div>
                      <div class="time">
                        <p>زمان حدودی ارسال : <span>{{strReplace(String(10))}} روز</span></p>
                      </div>
                      <div class="category">
                        <p>گروه : <span>مد و پوشاک</span></p>
                      </div>
                    </div>
                    <div class="banner d-block d-lg-none">
                      <img src="	https://dl.epasazh.com/images/advertises/a-d-img-6276717080aee.jpg" height="150" alt="">
                    </div>
                    <div class="git-box d-flex d-lg-none align-items-center">
                      <img src="	https://epasazh.com/_nuxt/img/coin.2443059.png" height="35" width="35" alt="">
                      <div class="desc text-right">
                        <span>با خرید این محصول</span><br>
                        <p>40 امتیاز در کاراکلاب دریافت کنید.</p>
                      </div>
                    </div>
                    <div class="seller-box d-block d-lg-none align-items-center flex-column">
                      <p class="m-0 text-right">فروشنده محصول</p>
                      <div class="card flex-row">
                        <div>
                          <img src="https://dl.epasazh.com/ShopLogo/20745_20210530_215314.jpg?v2" width="38" height="38" alt="">
                          <span>شعبه فروش ولیعصر</span>
                        </div>
                        <button><i class="ti-plus"></i> مشاهده</button>
                      </div>
                    </div>
                    <div class="certificate-mobile d-none d-lg-none align-items-center">
                      <div class="pd-white-card" ><a  class="b-elem buyer-protection-banner blue shine-anim"><span class="b-protection-logo"></span> <div class="b-protection-text"><div class="b-protection-title">
        حفاظت از خریدار
      </div> <div class="b-protection-body"><div class="bp-row"><strong>بازگشت کامل وجه</strong> <span>در صورت عدم دریافت کالا</span></div> <div class="bp-row"><strong>بازگشت کامل وجه</strong> <span>در صورت عدم تطبیق کالا با مشخصات ثبت شده</span></div></div></div> <i></i> <div style="clear: both;"></div></a></div>
                    </div>
                    <div class="certificate d-none d-lg-flex align-items-center">
                      <div class="logo">
                        <img src="https://epasazh.com/images/buyer-protection.png" height="60" alt="">
                      </div>
                      <div class="content">
                        <h4 class="text-right">حفاظت از خریدار</h4>
                        <p class="text-right"><img src="https://img.icons8.com/color/48/000000/checked-checkbox.png" height="20" alt=""> بازگشت کامل وجه <span>در صورت عدم دریافت کالا</span></p>
                        <p class="text-right"><img src="https://img.icons8.com/color/48/000000/checked-checkbox.png" height="20" alt="">بازگشت کامل وجه <span>در صورت عدم دریافت کالا</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tab-product m-0">
      <div class="container-fluid padding-mobile">
        <div class="row justify-content-center">
          <div class="col-lg-11 padding-mobile">
            <div class="row">
              <div class="col-lg-9 padding-mobile">
                <b-tabs card class="p-0">
              <b-tab title="توضیحات" active>
                <b-card-text class="text-right">{{
                  getDetail.description
                }}</b-card-text>
              </b-tab>
              <b-tab title="نظرات">
                <div class="d-flex">
                  <ul class="p-0 col-lg-6 comments">
                  <li class="w-100 d-flex align-items-center">
                      <span class="cell cm-option">دریافت کالا در بسته بندی و وضعیت مناسب :</span>
                      <b-progress value="60" max="100" class="cell"></b-progress>
                      <span class="cell current-state">معمولی</span>
                  </li>
                  <li class="w-100 d-flex align-items-center">
                      <span class="cell cm-option">رضایت از پیگیری و پاسخ گویی فروشنده :</span>
                      <b-progress value="60" max="100" class="cell"></b-progress>
                      <span class="cell current-state">معمولی</span>
                  </li>
                  <li class="w-100 d-flex align-items-center">
                      <span class="cell cm-option">ارسال و دریافت کالای خریداری شده در زمان مقرر :</span>
                      <b-progress value="60" max="100" class="cell"></b-progress>
                      <span class="cell current-state">معمولی</span>
                  </li>
                  <li class="w-100 d-flex align-items-center">
                      <span class="cell cm-option">مطابقت محصول دریافتی با تصاویر و توضیحات :</span>
                      <b-progress value="60" max="100" class="cell"></b-progress>
                      <span class="cell current-state">معمولی</span>
                  </li>
                  <li class="w-100 d-flex align-items-center">
                      <span class="cell cm-option">رضایت از قیمت محصول خریداری شده :</span>
                      <b-progress value="60" max="100" class="cell"></b-progress>
                      <span class="cell current-state">معمولی</span>
                  </li>
                </ul>
                <ul class="p-0 col-6 comments d-none d-lg-block">
                  <li class="w-100 d-flex align-items-center">
                      <span class="cell cm-option">ارزش خرید در مقایسه با قیمت :</span>
                      <b-progress value="60" max="100" class="cell"></b-progress>
                      <span class="cell current-state">معمولی</span>
                  </li>
                  <li class="w-100 d-flex align-items-center">
                      <span class="cell cm-option">کارآیی و عملکرد :</span>
                      <b-progress value="60" max="100" class="cell"></b-progress>
                      <span class="cell current-state">معمولی</span>
                  </li>
                  <li class="w-100 d-flex align-items-center">
                      <span class="cell cm-option">طراحی و ظاهر :</span>
                      <b-progress value="60" max="100" class="cell"></b-progress>
                      <span class="cell current-state">معمولی</span>
                  </li>
                </ul>
                </div>
              </b-tab>
            </b-tabs>

    <relatedProduct :products="products" />
    <relatedProduct :products="products" />
    <div class="d-block d-lg-none add-cart-box">
      <button @click="buyNow(getDetail, counter)"
                        :disabled="counter > getDetail.stock">افزودن به سبد خرید</button>
    </div>
              </div>
              <div class="col-lg-3 side-bar d-none d-lg-block">
                <h3 class="m-0">پیشنهاد خرید برای شما</h3>
                <div v-for="(product,index) in products" :key="index">
                <productBox1 :product='product' :index="index" v-if="index<3"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
    <Footer class="d-none d-lg-block"/>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Header from "../../../components/header/header3";
import Footer from "../../../components/footer/footer1";
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
import Timer from "../../../components/widgets/timer";
import relatedProduct from "../../shop/fashion/components/product_slider2";
import productBox1 from "@/components/product-box/product-box2";
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    Timer,
    relatedProduct,
    productBox1,
  },
  data() {
    return {
      products: [],
      category: [],
      dismissCountDown: 5,
      showmodal: false,
      counter: 1,
      activeColor: "",
      price: 120000,
      selectedSize: "",
      qty: "",
      size: [],
      productTYpe: "",
      productId: "",
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
        loop: true,
        // breakpoints: {
        //   // 992: {
        //   //   pagination: {
        //   //     el: ".swiper-pagination",
        //   //     type: "bullet",
        //   //   },
        //   // },
        // },
      },
      swiperOption1: {
        // direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 5,
        freeMode: true,
        centeredSlides: false,
      },
    };
  },
  computed: {
    ...mapState({
      currency: (state) => state.products.currency,
    }),
    ...mapState({
      productslist: (state) => state.products.productslist,
    }),
    ...mapGetters({
      curr: "products/changeCurrency",
    }),
    getDetail: function () {
      return this.$store.getters["products/getProductById"](1);
    },
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // For displaying default color and size on pageload
    this.uniqColor = this.getDetail.variants[0].color;
    this.sizeVariant(this.getDetail.variants[0].image_id);
    // Active default color
    this.activeColor = this.uniqColor;
    this.changeSizeVariant(this.getDetail.variants[0].size);
    this.productsArray();
  },
  methods: {
    alert(item) {
      this.dismissCountDown = item;
    },
    strReplace(item) {
      // console.log(typeof String(item));
      for (var i = 0; i < item.length; i++) {
        item = item.replace("1", "۱");
        item = item.replace("2", "۲");
        item = item.replace("3", "۳");
        item = item.replace("4", "۴");
        item = item.replace("5", "۵");
        item = item.replace("6", "۶");
        item = item.replace("7", "۷");
        item = item.replace("8", "۸");
        item = item.replace("9", "۹");
        item = item.replace("0", "۰");
      }
      return item;
    },
    priceCurrency: function () {
      this.$store.dispatch("products/changeCurrency");
    },
    addToWishlist: function (product) {
      this.$store.dispatch("products/addToWishlist", product);
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    // Display Unique Color
    Color(variants) {
      const uniqColor = [];
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color);
        }
      }
      return uniqColor;
    },
    // add to cart
    addToCart: function (product, qty) {
      product.quantity = qty || 1;
      this.$store.dispatch("cart/addToCart", product);
    },
    buyNow: function (product, qty) {
      this.showmodal = true;
      product.quantity = qty || 1;
      this.$store.dispatch("cart/addToCart", product);
      // this.$router.push("/page/account/checkout");
    },
    // Item Count
    increment() {
      this.counter++;
    },
    decrement() {
      if (this.counter > 1) this.counter--;
    },
    // Change size variant
    changeSizeVariant(variant) {
      this.selectedSize = variant;
    },
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false);
    },
    sizeVariant(id, slideId, color) {
      this.swiper.slideTo(slideId, 1000, false);
      this.size = [];
      this.activeColor = color;
      this.getDetail.variants.filter((item) => {
        if (id === item.image_id) {
          this.size.push(item.size);
        }
      });
    },
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === "مد") {
          this.products.push(item);
          item.collection.map((i) => {
            const index = this.category.indexOf(i);
            if (index === -1) this.category.push(i);
          });
        }
      });
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item;
      this.quickviewproduct = productData;
    },
    showCoampre(item, productData) {
      this.showcomparemodal = item;
      this.comapreproduct = productData;
    },
    closeCompareModal(item) {
      this.showcomparemodal = item;
    },
    showCart(item, productData) {
      this.showcartmodal = item;
      this.cartproduct = productData;
    },
    closeCartModal(item) {
      this.showcartmodal = item;
    },
  },
};
</script>
<style lang="scss" scoped>
html {
  overflow-x: hidden;
}
.collection-wrapper {
  .wrapper {
    background: #fff;
    @media screen and (max-width: 992px) {
      background: transparent;
    }
  }
}
.product-right {
  .light-gray-text {
    color: #b3b3b3;
    .product-info-label,
    .code-value {
      font-size: 13px;
    }
  }
  .title {
    font-size: 17px;
    padding: 0 0 10px 0;
    color: #000;
    font-size: 17px;
    line-height: 26px;
    font-weight: 500;
    span {
      i {
        font-size: 25px;
        color: #929292;
        margin-right: 20px;
        cursor: pointer;
      }
      nav {
        display: inline;
        padding: 0;
        float: right;
        button {
          padding: 0;
          border: 0;
        }
      }
      #navbar-toggle-collapse {
        transform: rotate(270deg);
        ul {
          display: inline;
          width: 25px;
          height: 30px;
          position: relative;
          top: 98px;
          i {
            margin: 0;
          }
        }
      }
    }
  }
  .header {
    background: #fff;
    padding: 10px 15px;
    // border-radius: 5px;
    border-bottom: 1px solid #dddddd;
    @media screen and (max-width: 992px) {
      border: none;
    }
  }
  .price {
    background: #fff;
    padding: 10px 15px;
    border-bottom: 1px solid #dddddd;
    @media screen and (max-width: 992px) {
      border: none;
      margin-bottom: 1rem;
    }
    h3 {
      color: rgb(255, 68, 0);
      text-align: right;
      @media screen and (max-width: 992px) {
        color: #000;
        font-size: 18px;
        text-align: left;
      }
    }
    .time {
      font-size: 14px;
      font-weight: 600;
      span {
        font-size: 13px;
        color: gray;
        font-weight: 400;
      }
    }
  }
  .info {
    background: #fff;
    padding: 10px 15px;
    @media screen and (max-width: 991px) {
      background: transparent;
      padding: 0;
    }
    .box {
      background: #fff;
      padding: 10px 15px;
    }
    // border-bottom: 1px solid #dddddd;
  }
  .card-wrapper {
    width: 300px;
    min-width: 300px;
    min-height: 265px;
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .seller-info-holder {
      padding: 10px 0 10px 10px;
      .info-box {
        background: #f5f5f5;
        border: solid 1px #e6e6e6;
        border-radius: 8px;
        overflow: hidden;
        min-width: 280px;
        .ib-header {
          height: 38px;
          display: flex;
          align-items: center;
          line-height: normal;
          padding: 0 15px;
          position: relative;
          .follow-btn {
            position: absolute;
            left: 10px;
            top: 5px;
            background: 0 0;
            outline: 0;
            border: solid 1px #d8d8d8;
            border-radius: 8px;
            line-height: normal;
            display: inline-block;
            text-align: center;
            width: 85px;
            font-size: 12px;
            height: 27px;
            justify-content: center;
            z-index: 1;
            color: #989898;
            transition: all 0.3s;
            :after {
              content: " ";
              width: 93%;
              height: 1px;
              position: absolute;
              bottom: 0;
              right: 0;
              background-color: #eaeaea;
              left: 0;
              margin: auto;
            }
          }
        }
        .ib-body {
          padding: 10px 15px;
          position: relative;
        }
        .ib-footer {
          display: flex;
          border-top: solid 1px #e4e4e4;
          position: relative;
          .btn-item {
            width: 100%;
            height: 40px;
            background: #efefef;
            border: none;
            line-height: normal;
            font-size: 13px;
            transition: all 0.3s;
            outline: 0 !important;
            position: relative;
          }
        }
      }
    }
    .bottom-box {
      text-align: center;
      a {
        font-size: 13px;
        border-bottom: dashed 1px;
        padding: 5px 5px;
        margin-bottom: 8px;
        color: #00a8ed !important;
      }
    }
  }
  .disabled-elem {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9999;
    right: 0;
    top: 0;
    background: #ffffffb3;
  }
}

.shop-name-row {
  width: 100%;
  position: relative;
  margin-bottom: 12px;
  display: block;
  transition: all 0.3s;
  .logo-holder {
    border-radius: 200px;
    border: solid 2px #fff;
    overflow: hidden;
    height: 52px;
    width: 52px;
    display: inline-block;
    position: absolute;
    right: 0;
    top: -4px;
    bottom: 0;
    margin: auto;
  }

  .detail-holder {
    justify-content: center;
    line-height: 28px;
    padding: 0 61px 0 7px;
    width: 100%;
    h4 {
      margin: 0;
      color: gray;
      font-size: 14px;
      text-align: right;
      // font-family: iranyekanB, sans-serif;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      padding-bottom: 7px;
    }

    small {
      color: #adadad;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      text-align: right;
    }
  }
}

.rate-detail-row {
  // font-family: iranyekanB;
  padding: 12px 10px 5px 10px;
  text-align: center;
  position: relative;
  .sep {
    padding: 0 4px;
  }
  span {
    font-size: 13px;
  }
}

.product-right {
  .info {
    .size-box ul {
      @media screen and (max-width: 992px) {
        width: 100vw;
        overflow-x: auto;
        padding-bottom: 15px;
      }
    }
  }
  .color-variant {
    @media screen and (max-width: 992px) {
      width: 100vw;
      overflow-x: auto;
      padding-bottom: 15px;
    }
    li {
      width: auto !important;
      border: 1px solid #c1c1c1;
      border-radius: 25px;
      padding-left: 3px;
    }
  }
}
.product-buttons {
  border-top: 1px solid #dddddd;
  padding: 10px 15px;
  @media screen and (max-width: 991px) {
    border: none;
  }
  button {
    padding: 10px 60px !important;
    border-radius: 10px;
  }
  p {
    color: #000;
    margin-top: 1rem;
    span {
      color: #989898;
    }
    .delivery-icon {
      height: 45px;
      width: 45px;
      background-image: url(https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-delivery-truck-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev.png);
    }
  }
}
.certificate {
  padding: 10px 15px;
  border-top: 1px solid #dddddd;
  @media screen and (max-width: 991px) {
    border: none;
  }
  .content {
    border-right: 2px solid #dddddd;
    padding-right: 5px;
  }
}
.swiper-slide {
  img {
    height: 530px;
    width: 100%;
    object-fit: cover;
  }
}
.alternative-slider-img {
  height: 73px !important;
  width: 73px !important;
}
.product-description {
  background: #fff;
  padding: 10px 15px;
  margin-top: 1rem;
  .desc {
    border-bottom: 1px solid #dddddd;
    .title {
      font-size: 13px;
      color: #c4c4c4;
      text-align: right;
      padding: 0;
    }
    .content {
      pre {
        font-size: 13px;
        line-height: 23px;
        margin: 0;
      }
    }
  }
  .code {
    padding: 7px 0;
    border-bottom: 1px solid #dddddd;
    p {
      font-size: 13px;
      color: #c4c4c4;
      text-align: right;
      span {
        color: #000;
      }
    }
  }
  .cost {
    padding: 7px 0;
    border-bottom: 1px solid #dddddd;
    .title {
      p {
        font-size: 13px;
        color: #c4c4c4;
        text-align: right;
        padding: 0;
      }
      p {
        font-size: 13px;
        color: #c4c4c4;
        text-align: right;
        span {
          color: #000;
        }
      }
    }
  }
  .time,
  .category {
    padding: 7px 0;
    border-bottom: 1px solid #dddddd;
    p {
      font-size: 13px;
      color: #c4c4c4;
      text-align: right;
      span {
        color: #000;
      }
    }
  }
  .category {
    border: none !important;
  }
}
.banner {
  margin-top: 1rem;
  img {
    border-radius: 5px;
    width: 100%;
  }
}

.git-box {
  background-color: #fff;
  padding: 10px 15px;
  margin-top: 1rem;
  .desc {
    margin-right: 5px;
    span {
      font-size: 11px;
      line-height: 25px;
      color: #717171;
    }
    p {
      font-weight: 700;
      font-size: 12px;
      color: #717171;
      margin: 0;
    }
  }
}
.seller-box {
  background: #fff;
  margin-top: 1rem;
  padding: 10px 15px;
  .card {
    border: none;
    justify-content: space-between;
    padding-top: 0.5rem;
    img {
      border-radius: 100%;
    }
    button {
      border: none;
      color: #fff;
      outline: none;
      background: #4497d4;
      border-radius: 100px;
      padding: 0 13px;
      min-width: 110px;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.certificate-mobile {
  padding: 10px 15px;
  background: #fff;
  margin-top: 1rem;
  .blue {
    background-color: #1e619a;
  }
  .buyer-protection-banner {
    direction: rtl;
    position: relative;
    padding: 0 9px;
    text-align: right;
    // .blue {
    //   background-color: #1e619a;
    // }
    .b-protection-logo {
      display: inline-block;
      width: 32px;
      height: 38px;
      background-image: url(/_nuxt/img/white-buyer-protection.cfdfe2d.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    .b-protection-text {
      padding: 12px 41px 10px 0;
      color: #fff;
      font-size: 12px;
      .b-protection-title {
        color: #fff;
        padding-bottom: 5px;
        font-size: 14px;
      }
      .b-protection-body {
        line-height: 21px;
        .bp-row span {
          font-size: 11px;
          color: #fff;
        }
      }
    }
  }
}
.shine-anim i {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.03) 1%,
    hsla(0, 0%, 100%, 0.6) 30%,
    hsla(0, 0%, 100%, 0.85) 50%,
    hsla(0, 0%, 100%, 0.85) 70%,
    hsla(0, 0%, 100%, 0.85) 71%,
    hsla(0, 0%, 100%, 0)
  );
  width: 15%;
  height: 100%;
  transform: skew(-10deg, 0deg);
  animation: move 4s;
  animation-iteration-count: infinite;
}
.tab-product {
  .tabs {
    background: #fff;
  }
  .nav-link {
    padding: 8px 16px !important;
  }
}
.side-bar {
  :first-child {
    background: #fff;
  }
  // background: #fff;
  h3 {
    text-align: right;
    padding: 15px 15px 15px 15px;
    color: #757575;
    font-size: 16px;
    border-bottom: solid 1px #eee;
  }
}

@media screen and (max-width: 992px) {
  .padding-mobile {
    padding: 0;
  }
  .row {
    width: 100%;
    margin: 0;
  }
}
.progress {
  width: calc(100% - 360px) !important;
  height: 5px;
  padding: 0 !important;
  @media screen and (max-width: 992px) {
    width: calc(100% - 260px) !important;
    font-size: 11px !important;
  }
  .progress-bar {
    background-color: #1e619a;
  }
  .cell {
    font-size: 13px;
  }
}
.comments {
  padding: 1rem !important;
  @media screen and (max-width: 992px) {
    padding: 0 !important;
  }
}
.comments .cell {
  // background: #adadad;
  font-size: 13px;
  text-align: right;
  width: 60px;
  padding-right: 10px;
}
.comments .cm-option {
  width: 300px;
  @media screen and (max-width: 992px) {
    width: 200px;
    font-size: 11px !important;
  }
}
.progress-bar {
  background-color: #1e619a;
}
.comments li {
  padding-top: 2rem;
}
.card-header-tabs {
  padding: 0;
}
.add-cart-box {
  position: fixed;
  bottom: 0;
  background: #fff;
  z-index: 99999;
  width: 100%;
  height: 60px;
  button {
    width: 100%;
    height: 100%;
    border: none;
    background: #00bf6f;
    color: #fff;
    text-shadow: 0 0 10px #000000;
  }
}

</style>