<template>
  <div>
    <div class="icon-nav">
      <ul>
        <li class="onhover-div mobile-search text-center">
          <div>
            <img
              alt
              :src="'@/assets/images/icon/layout4/search.png'"
              @click="openSearch()"
              class="img-fluid"
            />
            <i class="ti-search"></i>
            <nuxt-link to="/product">
              <p class="text-center m-0">دسته بندی ها</p></nuxt-link
            >
          </div>
          <div
            id="search-overlay"
            class="search-overlay"
            :class="{ opensearch: search }"
          >
            <div>
              <span
                class="closebtn"
                @click="closeSearch()"
                title="Close Overlay"
                >×</span
              >
              <div class="overlay-content">
                <div class="container">
                  <div class="row">
                    <div class="col-xl-12">
                      <form>
                        <div class="form-group mb-0">
                          <input
                            type="text"
                            class="form-control"
                            v-model="searchString"
                            @keyup="searchProduct"
                            placeholder="Search a Product"
                          />
                        </div>
                        <button type="submit" class="btn btn-primary">
                          <i class="fa fa-search"></i>
                        </button>
                      </form>
                      <ul class="search-results" v-if="searchItems.length">
                        <li
                          v-for="(product, index) in searchItems"
                          :key="index"
                          class="product-box"
                        >
                          <div class="img-wrapper">
                            <img
                              :src="getImgUrl(product.images[0].src)"
                              class="img-fluid bg-img"
                              :key="index"
                            />
                          </div>
                          <div class="product-detail">
                            <nuxt-link
                              :to="{ path: '/product/sidebar/' + product.id }"
                            >
                              <h6>{{ product.title }}</h6>
                            </nuxt-link>
                            <h4>
                              {{
                                (product.price * curr.curr)
                                  | currency(curr.symbol)
                              }}
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="onhover-div mobile-cart text-center">
          <nuxt-link to="/cart">
            <div>
              <img
                alt
                :src="'@/assets/images/icon/layout4/cart.png'"
                class="img-fluid"
              />
              <i class="ti-shopping-cart"></i>
              <p class="mb-0">سبد خرید</p>
              <span class="cart_qty_cls">{{ cart.length }}</span>
            </div>
          </nuxt-link>
          <ul class="show-div shopping-cart" v-if="!cart.length">
            <li>سبد خرید شما خالیست!</li>
          </ul>
          <!-- <ul class="show-div shopping-cart" v-if="cart.length">
            <li v-for="(item, index) in cart" :key="index">
              <div class="media">
                <nuxt-link :to="{ path: '/product/sidebar/' + item.id }">
                  <img alt class="mr-3" :src="getImgUrl(item.images[0].src)" />
                </nuxt-link>
                <div class="media-body">
                  <nuxt-link :to="{ path: '/product/sidebar/' + item.id }">
                    <h4 class="text-right">{{ item.title }}</h4>
                  </nuxt-link>
                  <h4 class="text-right">
                    <span dir="ltr"
                      > {{ strReplace(String(item.price*1000)) }} تومان</span
                    >
                  </h4>
                </div>
              </div>
              <div class="close-circle">
                <a href="#" @click="removeCartItem(item)">
                  <i class="fa fa-times" aria-hidden="true" style="font-size:16px !important"></i>
                </a>
              </div>
            </li>
            <li>
              <div class="total">
                <h5>
                  subtotal :
                  <span>{{ cartTotal | currency }}</span>
                </h5>
              </div>
            </li>
            <li>
              <div class="buttons">
                <nuxt-link
                  :to="{ path: '/page/account/cart' }"
                  :class="'view-cart'"
                >
                  view cart
                </nuxt-link>
                <nuxt-link
                  to="/cart"
                  :class="'checkout'"
                >
                  بررسی کردن
                </nuxt-link>
              </div>
            </li>
          </ul> -->
        </li>
        <li class="onhover-div mobile-setting text-center">
          <div>
            <nuxt-link to="/">
              <img
                alt
                :src="'@/assets/images/icon/layout4/setting.png'"
                class="img-fluid"
              />
              <i class="ti-home"></i>
              <p class="mb-0">خانه</p>
            </nuxt-link>
          </div>
          <!-- <div class="show-div setting">
            <h6>currency</h6>
            <ul class="list-inline">
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('eur', '€')">eur</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('inr', '₹')">inr</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('gbp', '£')">gbp</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('usd', '$')">usd</a>
              </li>
            </ul>
          </div> -->
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      currencyChange: {},
      search: false,
      searchString: "",
    };
  },
  computed: {
    ...mapState({
      searchItems: (state) => state.products.searchProduct,
    }),
    ...mapGetters({
      cart: "cart/cartItems",
      cartTotal: "cart/cartTotalAmount",
      curr: "products/changeCurrency",
    }),
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
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    openSearch() {
      this.search = true;
    },
    closeSearch() {
      this.search = false;
    },
    searchProduct() {
      this.$store.dispatch("products/searchProduct", this.searchString);
    },
    removeCartItem: function (product) {
      this.$store.dispatch("cart/removeCartItem", product);
    },
    updateCurrency: function (currency, currSymbol) {
      this.currencyChange = { curr: currency, symbol: currSymbol };
      this.$store.dispatch("products/changeCurrency", this.currencyChange);
    },
  },
};
</script>
<style lang="scss" scoped>
.onhover-div {
  width: 20%;
  i {
    font-size: 30px !important;
    color: rgb(0, 0, 0) !important;
  }
  p {
    font-size: 9px;
    color: rgb(0, 0, 0);
    font-weight: 700;
  }
}
@media screen and (max-width: 992px) {
  .shopping-cart {
    width: 100vw;
  }
}
</style>