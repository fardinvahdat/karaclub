<template>
  <div dir="rtl">
    <Header />
    <Breadcrumbs title="لیست علاقه مندی ها" class="my-2" />
    <section class="wishlist-section section-b-space p-0">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-11 tbl">
            <table
              class="table cart-table table-responsive-xs"
              v-if="wishlist.length"
            >
              <thead>
                <tr class="table-head">
                  <th scope="col">تصویر</th>
                  <th scope="col">نام محصول</th>
                  <th scope="col">قیمت</th>
                  <th scope="col">وضعیت</th>
                  <th scope="col">تنظیمات</th>
                </tr>
              </thead>
              <tbody v-for="(item, index) in wishlist" :key="index">
                <tr>
                  <td>
                    <a href="#">
                      <img :src="getImgUrl(item.images[0].src)" alt="" />
                    </a>
                  </td>
                  <td>
                    <a href="#">{{ item.title }}</a>
                    <div class="mobile-cart-content row">
                      <div class="col-xs-3">
                        <p>لایک شده</p>
                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">
                          {{ strReplace(String(item.price*1000)) }}تومان
                        </h2>
                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">
                          <a href="#" class="icon mr-1">
                            <i
                              class="ti-close"
                              @click="removeWishlistItem(item)"
                            ></i>
                          </a>
                          <nuxt-link :to='"/product/single/"+item.id' class="cart">
                            <i
                              class="ti-shopping-cart"
                              @click="addToCart(item)"
                            ></i>
                          </nuxt-link>
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2>
                      {{ strReplace(String(item.price*1000)) }}تومان
                    </h2>
                  </td>
                  <td>
                    <p>لایک شده</p>
                  </td>
                  <td>
                    <a
                      href="javascript:void(0)"
                      class="icon mr-3"
                      @click="removeWishlistItem(item)"
                    >
                      <i class="ti-close"></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="cart"
                      @click="addToCart(item)"
                    >
                      <i class="ti-shopping-cart"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="row wishlist-buttons justify-content-center"
          v-if="wishlist.length"
        >
          <div class="col-lg-11">
            <nuxt-link :to="{ path: '/' }" :class="'btn btn-solid'"
              >ادامه خرید</nuxt-link
            >
          </div>
        </div>
        <div
          class="col-lg-11 empty-cart-cls text-center m-auto p-3"
          v-if="!wishlist.length"
        >
          <img
            :src="'@/assets/images/empty-wishlist.png'"
            class="img-fluid"
            alt="empty cart"
          />
          <h3 class="mt-3">
            <strong>لیست علاقه مندی های شما خالیست!</strong>
          </h3>
          <div class="col-12">
            <nuxt-link :to="{ path: '/' }" class="btn btn-solid"
              >ادامه خرید</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "../../../components/header/header3";
import Footer from "../../../components/footer/footer1";
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
  },
  computed: {
    ...mapGetters({
      wishlist: "products/wishlistItems",
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
    removeWishlistItem: function (product) {
      this.$store.dispatch("products/removeWishlistItem", product);
    },
    addToCart: function (product) {
      this.$store.dispatch("cart/addToCart", product);
    },
  },
};
</script>
<style lang="scss" scoped>
.tbl,
.empty-cart-cls {
  background: #fff;
}
</style>
