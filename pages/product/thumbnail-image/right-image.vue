<template>
  <div dir="rtl">
    <Header />
    <Breadcrumbs :title="getDetail.title" />
    <!-- section start -->
    <section>
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-1 col-sm-2 col-xs-12">
              <div class="row">
                <div class="col-12 p-0">
                  <div v-swiper:mySwiper1="swiperOption1">
                    <div class="swiper-wrapper slider-right-nav">
                      <div
                        class="swiper-slide"
                        v-for="(product, index) in getDetail.images"
                        :key="index"
                      >
                        <img
                          :src="getImgUrl(product.src)"
                          :id="product.image_id"
                          class="img-fluid bg-img"
                          alt="product.alt"
                          v-on:click="slideTo(index)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-sm-10 col-xs-12">
              <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
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
              </div>
            </div>
            <div class="col-lg-6 rtl-text">
              <div class="product-right">
                <h2 class="text-right">{{ getDetail.title }}</h2>
                <h4 class="text-right" v-if="getDetail.sale">
                  <del>{{
                    (getDetail.price * curr.curr) | currency(curr.symbol)
                  }}</del>
                  <span>{{ getDetail.discount }}% تخفیف</span>
                </h4>
                <h3 v-if="getDetail.sale" class="text-right">
                  {{
                    (discountedPrice(getDetail) * curr.curr)
                      | currency(curr.symbol)
                  }}
                </h3>
                <h3 v-else class="text-right">
                  {{ (getDetail.price * curr.curr) | currency(curr.symbol) }}
                </h3>
                <ul class="color-variant text-right px-0">
                  <li
                    v-bind:class="{ active: activeColor == variant }"
                    v-for="(variant, variantIndex) in Color(getDetail.variants)"
                    :key="variantIndex"
                  >
                    <a
                      :class="[variant]"
                      v-bind:style="{ 'background-color': variant }"
                      v-on:click="
                        sizeVariant(
                          getDetail.variants[variantIndex].image_id,
                          variantIndex,
                          variant
                        )
                      "
                    ></a>
                  </li>
                </ul>
                <div class="pro_inventory" v-if="getDetail.stock < 8">
                  <p class="active text-right">
                    عجله کنید!فقط {{ getDetail.stock }} عدد مانده!
                  </p>
                </div>
                <div class="product-description border-product">
                  <h6 class="product-title size-text text-right">
                    انتخاب سایز
                    
                  </h6>
                  <div class="size-box">
                    <ul class="text-right px-0">
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
                  <h6 class="product-title text-right">تعداد</h6>
                  <div class="qty-box">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <button
                          type="button"
                          class="btn quantity-left-minus"
                          data-type="minus"
                          data-field
                          @click="decrement()"
                        >
                          <i class="ti-angle-left"></i>
                        </button>
                      </span>
                      <input
                        type="text"
                        name="quantity"
                        class="form-control input-number"
                        :disabled="counter > getDetail.stock"
                        v-model="counter"
                      />
                      <span class="input-group-prepend">
                        <button
                          type="button"
                          class="btn quantity-right-plus"
                          data-type="plus"
                          data-field
                          @click="increment()"
                        >
                          <i class="ti-angle-right"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="product-buttons text-right">
                  <button
                    class="btn btn-solid"
                    title="buy now"
                    @click="buyNow(getDetail, counter)"
                    :disabled="counter > getDetail.stock"
                  >
                    ثبت خرید
                  </button>
                </div>
                <div class="border-product">
                  <h6 class="product-title text-right">جزئیات محصول</h6>
                  <p class="text-right">{{ getDetail.description.substring(0, 200) + "...." }}</p>
                </div>
                <div class="border-product">
                  <h6 class="product-title text-right">اشتراک گذاری</h6>
                  <div class="product-icon justify-content-between">
                    <ul class="product-social px-0">
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-rss"></i>
                        </a>
                      </li>
                    </ul>
                    <form class="d-inline-block">
                      <button
                        class="wishlist-btn"
                        @click="addToWishlist(product)"
                      >
                        <i class="fa fa-heart"></i>
                        <span class="title-font">افزودن به علاقه مندی ها</span>
                      </button>
                    </form>
                  </div>
                </div>
                <div class="border-product">
                  <h6 class="product-title text-right">زمان باقیمانده</h6>
                  <Timer date="December 20, 2022" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tab-product m-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <b-tabs card>
              <b-tab title="توضیحات" active>
                <b-card-text class="text-right">{{ getDetail.description }}</b-card-text>
              </b-tab>
              <b-tab title="جزئیات">
                <b-card-text class="text-right">
                  {{ getDetail.description }}
                  <div class="single-product-tables">
                    <table>
                      <tbody>
                        <tr>
                          <td>آیتم 1</td>
                          <td>توضیح</td>
                        </tr>
                        <tr>
                          <td>رنگ</td>
                          <td>قرمز</td>
                        </tr>
                        <tr>
                          <td>مواد سازنده</td>
                          <td>پنبه</td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <tbody>
                        <tr>
                          <td>اندازه</td>
                          <td>60 سانتی متر</td>
                        </tr>
                        <tr>
                          <td>سایز</td>
                          <td>S, M, L .XXL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="ویدئو">
                <b-card-text>
                  <div class="mt-3 text-center">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/BUWzX78Ye_8"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                    ></iframe>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="نظرات">
                <b-card-text>
                  <form class="theme-form">
                    <div class="form-row">
                      <div class="col-md-12">
                        <div class="media">
                          <label>امتیاز</label>
                          <div class="media-body ml-3">
                            <div class="rating three-star text-right">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 text-right">
                        <label for="name">نام</label>
                        <input
                          type="text"
                          class="form-control text-right"
                          id="name"
                          placeholder="نام خود را وارد کنید"
                          required
                        />
                      </div>
                      <div class="col-md-6 text-right">
                        <label for="email">ایمیل</label>
                        <input
                          type="text"
                          class="form-control text-right"
                          id="email"
                          placeholder="ایمیل"
                          required
                        />
                      </div>
                      <div class="col-md-12 text-right">
                        <label for="review">موضوع</label>
                        <input
                          type="text"
                          class="form-control text-right"
                          id="review"
                          placeholder="موضوع را وارد کنید"
                          required
                        />
                      </div>
                      <div class="col-md-12 text-right">
                        <label for="review">متن</label>
                        <textarea
                          class="form-control"
                          placeholder="نظر خود را وارد کنید"
                          id="exampleFormControlTextarea1"
                          rows="6"
                        ></textarea>
                      </div>
                      <div class="col-md-12 text-right">
                        <button class="btn btn-solid" type="submit">
                          ثبت نظر
                        </button>
                      </div>
                    </div>
                  </form>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
    <relatedProduct :productTYpe="productTYpe" :productId="productId" />
    <Footer />
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Header from "../../../components/header/header3";
import Footer from "../../../components/footer/footer1";
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
import Timer from "../../../components/widgets/timer";
import relatedProduct from "../../../components/widgets/related-products";
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    Timer,
    relatedProduct,
  },
  data() {
    return {
      counter: 1,
      activeColor: "",
      selectedSize: "",
      qty: "",
      size: [],
      productTYpe: "",
      productId: "",
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
      },
      swiperOption1: {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        centeredSlides: false,
      },
    };
  },
  computed: {
    ...mapState({
      currency: (state) => state.products.currency,
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
  },
  methods: {
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
      product.quantity = qty || 1;
      this.$store.dispatch("cart/addToCart", product);
      this.$router.push("/page/account/checkout");
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
  },
};
</script>
