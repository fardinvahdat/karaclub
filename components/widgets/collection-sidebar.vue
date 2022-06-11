<template>
  <div>
    <div class="row justify-content-end">
      <div class="col-6 pl-0">
        <div class="filter-main-btn" @click="filter = !filter">
          <span class="filter-btn btn btn-theme w-100">
            فیلتر
            <span class="ti-filter text-left"></span>
          </span>
        </div>
      </div>
      <div class="col-6 pr-0 d-block d-xl-none">
        <b-navbar toggleable type="white" variant="white" class="navbar-header">
          <b-navbar-brand href="#">مرتب سازی</b-navbar-brand>

          <b-navbar-toggle target="navbar-toggle-collapse p-0">
            <template #default="{ expanded }">
              <i class="fa fa-angle-up" v-if="expanded"></i>
              <i class="fa fa-angle-down" v-else></i>
            </template>
          </b-navbar-toggle>
        </b-navbar>
      </div>
    </div>
    <div class="collection-filter" :class="{ openFilterbar: filter }">
      <div class="collection-filter-block">
        <!-- brand filter start -->
        <div class="collection-mobile-back">
          <span class="filter-back" @click="filter = !filter">
            <i class="fa fa-angle-right" aria-hidden="true"></i> برگشت
          </span>
        </div>
        <div class="collection-collapse-block open">
          <h3 class="collapse-block-title text-right" v-b-toggle.category>
            دسته بندی
          </h3>
          <b-collapse
            id="category"
            visible
            accordion="myaccordion"
            role="tabpanel"
          >
            <div class="collection-collapse-block-content">
              <div class="collection-brand-filter">
                <ul class="category-list">
                  <li>
                    <nuxt-link :to="{ path: '/product' }"
                      >محصولات</nuxt-link
                    >
                  </li>
                  <li
                    v-for="(category, index) in filterbyCategory"
                    :key="index"
                  >
                    <nuxt-link
                      :to="{ path: '/product' }"
                      @click="getCategoryFilter(category)"
                      >{{ category }}</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
      <!-- side-bar colleps block stat -->
      <div class="collection-filter-block">
        <!-- brand filter start -->
        <div class="collection-collapse-block open" v-if="filterbyBrand.length">
          <h3 class="collapse-block-title text-right" v-b-toggle.brand>برند</h3>
          <b-collapse
            id="brand"
            visible
            accordion="myaccordion1"
            role="tabpanel"
          >
            <div class="collection-collapse-block-content">
              <div class="collection-brand-filter">
                <div
                  class="
                    custom-control custom-checkbox
                    collection-filter-checkbox
                  "
                  v-for="(brand, index) in filterbyBrand"
                  :key="index"
                >
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    :value="brand"
                    :id="brand"
                    v-model="applyFilter"
                    @change="appliedFilter(brand)"
                  />
                  <label class="custom-control-label" v-bind:for="brand">{{
                    brand
                  }}</label>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <!-- color filter start here -->
        <div class="collection-collapse-block open" v-if="filterbycolor.length">
          <h3 class="collapse-block-title text-right" v-b-toggle.colors>رنگ</h3>
          <b-collapse
            id="colors"
            visible
            accordion="myaccordion2"
            role="tabpanel"
          >
            <div class="collection-collapse-block-content">
              <div class="collection-brand-filter color-filter">
                <div
                  class="
                    custom-control custom-checkbox
                    collection-filter-checkbox
                  "
                  v-for="(color, index) in filterbycolor"
                  :key="index"
                >
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    :value="color"
                    :id="color"
                    v-model="applyFilter"
                    @change="appliedFilter(color)"
                  />
                  <span
                    :class="color"
                    v-bind:style="{ 'background-color': color }"
                  ></span>
                  <label
                    class="custom-control-label"
                    :class="{ selected: isActive(color) }"
                    v-bind:for="color"
                    >{{ color }}</label
                  >
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <!-- size filter start here -->
        <div class="collection-collapse-block open" v-if="filterbysize.length">
          <h3 class="collapse-block-title text-right" v-b-toggle.size>سایز</h3>
          <b-collapse
            id="size"
            visible
            accordion="myaccordion3"
            role="tabpanel"
          >
            <div class="collection-collapse-block-content">
              <div class="color-selector">
                <div class="collection-brand-filter">
                  <div
                    class="
                      custom-control custom-checkbox
                      collection-filter-checkbox
                    "
                    v-for="(size, index) in filterbysize"
                    :key="index"
                  >
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      :value="size"
                      :id="size"
                      v-model="applyFilter"
                      @change="appliedFilter(size)"
                    />
                    <label class="custom-control-label" v-bind:for="size">{{
                      size
                    }}</label>
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <!-- price filter start here -->
        <div class="collection-collapse-block border-0 open">
          <h3 class="collapse-block-title text-right" v-b-toggle.price>قیمت</h3>
          <b-collapse
            id="price"
            visible
            accordion="myaccordion4"
            role="tabpanel"
          >
            <div class="collection-collapse-block-content">
              <div class="collection-brand-filter price-rangee-picker">
                <vue-slider
                  v-model="value"
                  :min="0"
                  :max="800"
                  ref="slider"
                  @change="sliderChange($refs.slider.getValue())"
                >
                </vue-slider>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
      <!-- side-bar single product slider start -->
      <div class="theme-card">
        <h5 class="title-border text-right">محصولات جدید</h5>
        <div class="offer-slider slide-1">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div>
                  <div
                    class="media"
                    v-for="(product, index) in getCategoryProduct(
                      'new products'
                    ).splice(0, 3)"
                    :key="index"
                  >
                    <nuxt-link :to="{ path: '/product/single/' + product.id }">
                      <img
                        class="img-fluid"
                        :src="getImgUrl(product.images[0].src)"
                        alt
                      />
                    </nuxt-link>
                    <div class="media-body align-self-center">
                      <div class="rating text-right">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <nuxt-link
                        :to="{ path: '/product/single/' + product.id }"
                      >
                        <h6 class="text-right mr-1">{{ product.title }}</h6>
                      </nuxt-link>
                      <h4 v-if="product.sale" class="text-right pr-1">
                        {{
                          strReplace(String(product.price*1000))
                        }}
                        <del>{{
                          strReplace(String((product.price*1000)+1000))
                        }}</del>
                      </h4>
                      <h4 v-else class="text-right pr-1">
                        {{
                          strReplace(String(product.price*1000))
                        }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div
                class="swiper-slide"
                v-if="getCategoryProduct('new products').length >= 2"
              >
                <div>
                  <div
                    class="media"
                    v-for="(product, index) in getCategoryProduct(
                      'new products'
                    ).splice(3, 3)"
                    :key="index"
                  >
                    <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                      <img
                        class="img-fluid"
                        :src="getImgUrl(product.images[0].src)"
                        alt
                      />
                    </nuxt-link>
                    <div class="media-body align-self-center text-right">
                      <div class="rating text-right">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <nuxt-link
                        :to="{ path: '/product/sidebar/' + product.id }"
                      >
                        <h6>{{ product.title }}</h6>
                      </nuxt-link>
                      <h4 v-if="product.sale">
                        {{
                          (discountedPrice(product) * currency.curr)
                            | currency(currency.symbol)
                        }}
                        <del>{{
                          (product.price * currency.curr)
                            | currency(currency.symbol)
                        }}</del>
                      </h4>
                      <h4 v-else>
                        {{
                          (product.price * currency.curr)
                            | currency(currency.symbol)
                        }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
            <!-- <div class="swiper-button-prev" slot="button-prev">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div class="swiper-button-next" slot="button-next">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div> -->
          </div>
        </div>
      </div>
      <!-- side-bar single product slider end -->
      <!-- side-bar banner start here -->
      <div class="collection-sidebar-banner">
        <a href="#">
          <img :src="bannerimagepath" class="img-fluid" />
        </a>
      </div>
      <!-- side-bar banner end here -->
    </div>
    <!-- silde-bar colleps block end here -->
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
export default {
  data() {
    return {
      bannerimagepath: require("@/assets/images/side-banner.png"),
      value: [50, 550],
      selectedcolor: [],
      selectedbrand: [],
      selectedsize: [],
      applyFilter: [],
      activeItem: "category",
      filter: false,
      swiperOption: {
        loop: false,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      },
    };
  },
  components: {
    VueSlider,
  },
  computed: {
    ...mapState({
      productslist: (state) => state.products.productslist,
      currency: (state) => state.products.currency,
    }),
    ...mapGetters({
      filterbyCategory: "filter/filterbyCategory",
      filterbyBrand: "filter/filterbyBrand",
      filterbycolor: "filter/filterbycolor",
      filterbysize: "filter/filterbysize",
    }),
  },
  mounted() {
    this.$emit("priceVal", this.value);
  },
  methods: {

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
    getCategoryProduct(collection) {
      return this.productslist.filter((item) => {
        if (item.collection.find((i) => i === collection)) {
          return item;
        }
      });
    },
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    isActive(filterItem) {
      return this.applyFilter.indexOf(filterItem) > -1;
    },
    appliedFilter(val) {
      this.$emit("allFilters", this.applyFilter);
    },
    sliderChange(event) {
      this.$emit("priceVal", event);
    },
    toggleSidebarBlock() {
      this.openBlock = !this.openBlock;
    },
    getCategoryFilter(category) {
      this.$store.dispatch("filter/getCategoryFilter", category);
    },
  },
};
</script>
<style lang="scss" scoped>
.collection-filter {
  @media screen and (max-width: 1199px) {
    position: fixed;
    height: 100vh;
    top: 0;
    right: -350px;
    background-color: white;
    z-index: 99;
    overflow-y: scroll;
    padding: 15px 0 15px 15px;
    max-width: 350px;
    transition: all 0.5s ease;
    box-shadow: 1px 0 5px #ddd;
    .collection-sidebar-banner {
      text-align: center;
    }
    .theme-card {
      padding-left: 30px;
      padding-right: 30px;
    }
    .collection-sidebar-banner {
      padding: 0 30px;
    }
  }
}
@media (max-width: 1199px) {
  .filter-main-btn {
    display: block;
  }
}
.navbar-header {
  line-height: 30px;
}
.filter-main-btn {
  .filter-btn {
    line-height: 42px;
    position: relative;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    background: #fff;
    @media screen and (min-width: 768px) and (max-width: 992px) {
      // line-height: 34px;
    }
  }
}
a.navbar-brand {
  color: black;
  font-weight: 900;
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 20px;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 400;
  }
  @media screen and (max-width: 577px) {
    font-size: 11px;
  }
}
.theme-card{
  background: #fff;
}
</style>
