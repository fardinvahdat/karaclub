<template>
  <div dir="rtl">
    <Header />
    <Breadcrumbs title="مجموعه" class="my-2" />
    <section class="section-b-space ratio_asos pt-0">
      <div class="collection-wrapper">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-11 d-flex flex-xl-row flex-column padding-mobile">
              <div class="col-xl-3 pr-lg-0">
                <sidebar
                  @allFilters="allfilter"
                  @priceVal="pricefilterArray"
                  @categoryfilter="getCategoryFilter"
                />
              </div>
              <div class="collection-content col-xl-9">
                <div class="page-main-content">
                  <div class="row collection-category d-none d-xl-flex">
                    <div
                      class="
                        col-grid-box col-lg-12
                        flex-row
                        collection-category-wrapper
                        d-flex
                      "
                    >
                      <i class="ti-filter"></i>
                      <span>مرتب سازی :</span>
                      <ul class="sort-buttons mr-lg-1 px-0 d-flex">
                        <li class="active">جدیدترین‌ها</li>
                        <li class="">محبوب‌ترین‌ها</li>
                        <li class="">پربازدیدترین‌ها</li>
                        <li class="">ارزان‌ترین</li>
                        <li class="">گران‌ترین</li>
                      </ul>
                    </div>
                  </div>
                  <div class="row collection-category-mobile d-flex d-xl-none justify-content-center">
                    <div class="row d-xl-none d-flex w-100">
                      <div class="col-lg-11">
                        <b-collapse id="navbar-toggle-collapse" is-nav>
                          <b-navbar-nav class="mr-auto p-0 mb-3">
                            <b-nav-item class="text-right">جدیدترین</b-nav-item>
                            <b-nav-item class="text-right">قدیمی ترین</b-nav-item>
                            <b-nav-item class="text-right">قدیمی ترین</b-nav-item>
                            <b-nav-item class="text-right">قدیمی ترین</b-nav-item>
                            <b-nav-item class="text-right">قدیمی ترین</b-nav-item>
                          </b-navbar-nav>
                        </b-collapse>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <ul class="product-filter-tags">
                        <li
                          class="mr-1"
                          v-for="(tag, index) in allfilters"
                          :key="index"
                        >
                          <a href="javascript:void(0)" class="filter_tag"
                            >{{ tag
                            }}<i class="ti-close" @click="removeTags(tag)"></i
                          ></a>
                        </li>
                        <li class="clear_filter" v-if="allfilters.length > 0">
                          <a
                            href="javascript:void(0)"
                            class="clear_filter"
                            @click="removeAllTags()"
                            >Clear all</a
                          >
                        </li>
                      </ul>
                      <div class="collection-product-wrapper">
                        <!-- <div class="product-top-filter">
                        <div class="row">
                          <div class="col-12">
                            <div class="product-filter-content">
                              <div class="search-count">
                                <h6 class="text-right">
                                  نمایش 1-12 از {{ filterProduct.length }} نتیجه
                                </h6>
                              </div>
                              <div class="product-page-filter">
                                <select @change="onChangeSort($event)">
                                  <option value="all">مرتب کردن</option>
                                  <option value="a-z">
                                    سایز (بزرگ به کوچک)
                                  </option>
                                  <option value="z-a">
                                    سایز (کوچک به بزرگ)
                                  </option>
                                  <option value="low">قیمت (زیاد به کم)</option>
                                  <option value="high">
                                    قیمت (کم به زیاد)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> -->
                        <div
                          class="product-wrapper-grid"
                          :class="{ 'list-view': listview == true }"
                        >
                          <div class="row">
                            <div class="col-sm-12">
                              <div
                                class="
                                  text-center
                                  section-t-space section-b-space
                                "
                                v-if="filterProduct.length == 0"
                              >
                                <img
                                  :src="'@/assets/images/empty-search.jpg'"
                                  class="img-fluid"
                                  alt
                                />
                                <h3 class="mt-3">
                                  متاسفانه محصول مورد نظر پیدا نشد!!!
                                </h3>
                                <div class="col-12 mt-3">
                                  <nuxt-link
                                    :to="{ path: '/' }"
                                    class="btn btn-solid"
                                    >ادامه خرید
                                  </nuxt-link>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-grid-box p-lg-0 "
                              :class="{
                                'col-lg-3': col4 == true,
                                'col-lg-4': col3 == true,
                                'col-lg-6': col2 == true,
                                'col-lg-2': col6 == true,
                                'col-lg-12': listview == true,
                              }"
                              v-for="(product, index) in filterProduct"
                              :key="index"
                              v-show="setPaginate(index)"
                            >
                              <div class="product-box">
                                <productBox1
                                  @opencartmodel="showCart"
                                  @showCompareModal="showCoampre"
                                  @openquickview="showQuickview"
                                  @showalert="alert"
                                  @alertseconds="alert"
                                  :product="product"
                                  :index="index"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="product-pagination mb-0"
                          v-if="filterProduct.length > this.paginate"
                        >
                          <div class="theme-paggination-block">
                            <div class="row">
                              <div class="col-xl-6 col-md-6 col-sm-12">
                                <nav aria-label="Page navigation">
                                  <ul class="pagination">
                                    <li
                                      class="page-item"
                                      :class="{ disable: current == 1 }"
                                    >
                                      <a
                                        class="page-link"
                                        href="javascript:void(0)"
                                        @click="updatePaginate(current - 1)"
                                      >
                                        <span aria-hidden="true">
                                          <i
                                            class="fa fa-chevron-left"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      class="page-item"
                                      v-for="(page_index, index) in this.pages"
                                      :key="index"
                                      :class="{ active: page_index == current }"
                                    >
                                      <a
                                        class="page-link"
                                        href="javascrip:void(0)"
                                        @click.prevent="
                                          updatePaginate(page_index)
                                        "
                                        >{{ page_index }}</a
                                      >
                                    </li>
                                    <li
                                      class="page-item"
                                      :class="{
                                        disable: current == this.paginates,
                                      }"
                                    >
                                      <a
                                        class="page-link"
                                        href="javascript:void(0)"
                                        @click="updatePaginate(current + 1)"
                                      >
                                        <span aria-hidden="true">
                                          <i
                                            class="fa fa-chevron-right"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </nav>
                              </div>
                              <div class="col-xl-6 col-md-6 col-sm-12">
                                <div class="product-search-count-bottom">
                                  <h5>
                                    نمایش 1-12 از
                                    {{ filterProduct.length }} نتیجه
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="alert"
    >
      <p class="text-right">
        آیتم مورد نظر با موفقیت به لیست علاقه مندی ها اضاقه شد.
      </p>
    </b-alert>
    <quickviewModel
      :openModal="showquickviewmodel"
      :productData="quickviewproduct"
    />
    <compareModel
      :openCompare="showcomparemodal"
      :productData="comapreproduct"
      @closeCompare="closeCompareModal"
    />
    <cartModel
      :openCart="showcartmodal"
      :productData="cartproduct"
      @closeCart="closeCartModal"
      :products="filterProduct"
    />
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import productBox1 from "../../components/product-box/ProductBox";
import Header from "../../components/header/header3";
import Footer from "../../components/footer/footer1";
import Breadcrumbs from "../../components/widgets/breadcrumbs";
import sidebar from "../../components/widgets/collection-sidebar";
import quickviewModel from "../../components/widgets/quickview";
import compareModel from "../../components/widgets/compare-popup";
import cartModel from "../../components/cart-model/cart-modal-popup";
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    productBox1,
    sidebar,
    quickviewModel,
    compareModel,
    cartModel,
  },
  data() {
    return {
      bannerimagepath: require("@/assets/images/side-banner.png"),
      col2: false,
      col3: false,
      col4: true,
      col6: false,
      listview: false,
      priceArray: [],
      allfilters: [],
      items: [],
      current: 1,
      paginate: 12,
      paginateRange: 3,
      pages: [],
      paginates: "",
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      filterProduct: "filter/filterProducts",
      tags: "filter/setTags",
      curr: "products/changeCurrency",
    }),
  },
  mounted() {
    this.updatePaginate(1);
  },
  methods: {
    onChangeSort(event) {
      this.$store.dispatch("filter/sortProducts", event.target.value);
    },
    gridView() {
      this.col4 = false;
      this.col2 = false;
      this.col3 = true;
      this.col6 = false;
      this.listview = false;
    },
    listView() {
      this.listview = true;
      this.col4 = false;
      this.col2 = false;
      this.col3 = false;
      this.col6 = false;
    },
    grid2() {
      this.col2 = true;
      this.col3 = false;
      this.col4 = false;
      this.col6 = false;
      this.listview = false;
    },
    grid3() {
      this.col3 = true;
      this.col2 = false;
      this.col4 = false;
      this.col6 = false;
      this.listview = false;
    },
    grid4() {
      this.col4 = true;
      this.col2 = false;
      this.col3 = false;
      this.col6 = false;
      this.listview = false;
    },
    grid6() {
      this.col6 = true;
      this.col2 = false;
      this.col3 = false;
      this.col4 = false;
      this.listview = false;
    },
    removeTags(val) {
      this.allfilters.splice(this.allfilters.indexOf(val), 1);
    },
    removeAllTags() {
      this.allfilters.splice(0, this.allfilters.length);
    },
    getCategoryFilter() {
      this.updatePaginate(1);
      this.$store.dispatch("filter/getCategoryFilter", this.$route.params.id);
    },
    allfilter(selectedVal) {
      this.allfilters = selectedVal;
      this.$store.dispatch("filter/setTags", selectedVal);
      this.getPaginate();
      this.updatePaginate(1);
    },
    pricefilterArray(item) {
      this.getCategoryFilter();
      this.$store.dispatch("filter/priceFilter", item);
      this.getPaginate();
      this.updatePaginate(1);
    },
    getPaginate() {
      this.paginates = Math.round(this.filterProduct.length / this.paginate);
      this.pages = [];
      for (let i = 0; i < this.paginates; i++) {
        this.pages.push(i + 1);
      }
    },
    setPaginate(i) {
      if (this.current === 1) {
        return i < this.paginate;
      } else {
        return (
          i >= this.paginate * (this.current - 1) &&
          i < this.current * this.paginate
        );
      }
    },
    updatePaginate(i) {
      this.current = i;
      let start = 0;
      let end = 0;
      if (this.current < this.paginateRange - 1) {
        start = 1;
        end = start + this.paginateRange - 1;
      } else {
        start = this.current - 1;
        end = this.current + 1;
      }
      if (start < 1) {
        start = 1;
      }
      if (end > this.paginates) {
        end = this.paginates;
      }
      this.pages = [];
      for (let i = start; i <= end; i++) {
        this.pages.push(i);
      }
      return this.pages;
    },
    alert(item) {
      this.dismissCountDown = item;
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
.product-box {
  margin-top: 0 !important;
  background: #fff;
  // box-shadow: 0 0 11px #00000013;
  padding: 4px;
  border-radius: 0;
  position: relative;
  transition: all 0.3s;
  margin-bottom: 0;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 11px #00000013;
  }
}
.collection-category {
  .collection-category-wrapper {
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    padding: 10px 13px;
    align-items: center;
    @media screen and (max-width: 992px) {
      padding: 3px 0;
      margin: 3px 15px;
    }
    .ti-filter {
      color: #a6a6a6;
      @media screen and (max-width: 768px) {
        font-size: 11px;
      }
    }
  }
  span {
    font-size: 13px;
    @media screen and (max-width: 768px) {
      font-size: 9px;
    }
  }
  .sort-buttons {
    .active {
      background: var(--theme-deafult);
      border-radius: 5px !important;
      color: #fff;
      @media screen and (max-width: 768px) {
        font-size: 9px;
      }
    }
    li {
      border: none;
      background: none;
      font-size: 13px;
      outline: none;
      margin-right: 1rem;
      padding: 5px 10px;
      @media screen and (max-width: 768px) {
        font-size: 9px;
        padding: 0;
      }
    }
  }
}
.navbar-dark .navbar-toggler{
  border: none !important;
}
#navbar-toggle-collapse li{
  font-size: 13px;
  padding:12px 15px;
  background: #fff;
    a{
      border-bottom: 1px solid #e4e4e4;
      color: #000;
      // &:last-child{
      //   border: none;
      // }
    }
}
@media screen and (max-width:992px){
  .padding-mobile{
    padding: 0;
  }
}
</style>
