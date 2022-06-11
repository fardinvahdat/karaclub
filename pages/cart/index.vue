<template>
  <div dir="rtl">
    <Header />
    <Breadcrumbs title="سبد خرید" class="my-2" />
    <section class="cart-section section-b-space p-0">
      <div class="container-fluid">
        <div class="row justify-content-center mb-3">
          <div class="col-xl-8">
            <div class="product-item d-block d-lg-none" v-if="cart.length">
              <div
                v-for="(item, index) in cart"
                :key="index"
                class="product-items"
              >
                <div class="d-flex">
                  <div class="first-child-table first-child-table-mobile">
                    <a class="icon" @click="removeCartItem(item)">
                      <i class="ti-close"></i>
                    </a>
                    <nuxt-link :to="{ path: '/product/single/' + item.id }">
                      <img
                        :src="getImgUrl(item.images[0].src)"
                        alt
                        class="w-100 h-100"
                      />
                    </nuxt-link>
                  </div>
                  <div class="description-box">
                    <div class="d-block d-lg-none description-td">
                      <h4 class="product">{{ item.title }}</h4>
                      <h5 class="shop">از فروشگاه :</h5>
                      <p class="delivery">
                        <i class="ti-truck"></i>ارسال از دو روز کاری دیگر
                      </p>
                      <div class="price-section">
                        <div class="price d-flex justify-content-between">
                          <span>قیمت واحد</span
                          ><span>{{ strReplace(String(item.price)) }}</span>
                        </div>
                        <div class="discount d-flex justify-content-between">
                          <span>تخفیف</span
                          ><span>{{ strReplace(String(1000)) }}</span>
                        </div>
                        <div class="final-price d-flex justify-content-between">
                          <span>مبلغ کل</span
                          ><span>{{
                            strReplace(String(item.price * 1000 - 1000))
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-block d-lg-none counter">
                  <div class="input-group">
                    <span class="input-group-prepend">
                      <button
                        type="button"
                        class="btn quantity-right-plus"
                        data-type="plus"
                        data-field
                        @click="increment(item)"
                      >
                        <i class="ti-plus"></i>
                      </button>
                    </span>
                    <input
                      type="text"
                      name="quantity"
                      class="form-control input-number"
                      :disabled="item.quantity > item.stock"
                      v-model="item.quantity"
                    />
                    <span class="input-group-prepend">
                      <button
                        type="button"
                        class="btn quantity-left-minus"
                        data-type="minus"
                        data-field
                        @click="decrement(item)"
                      >
                        <i class="ti-minus"></i>
                      </button>
                    </span>
                  </div>
                  <a @click="removeCartItem(item)">
                    <i class="ti-trash" style="position: relative;bottom: 35px;font-size: 28px;color: #cb3512;"></i>
                  </a>
                </div>
                <input type="text" class="w-100 more-desc" placeholder="در صورت داشتن هرگونه خصوصیات خاصی از جمله (رنگ، سایز و ...) آن را وارد نمایید.">
              </div>
            </div>
            <table
              class="table cart-table table-responsive-xs product-item d-lg-table d-none"
              v-if="cart.length"
            >
              <tbody v-for="(item, index) in cart" :key="index">
                <!-- <input type="text" class="w-100" /> -->
                <tr>
                  <td class="first-child-table">
                    <a class="icon" @click="removeCartItem(item)">
                      <i class="ti-close"></i>
                    </a>
                    <nuxt-link :to="{ path: '/product/single/' + item.id }">
                      <img :src="getImgUrl(item.images[0].src)" alt />
                    </nuxt-link>
                  </td>
                  <td class="text-right d-lg-table-cell d-none">
                    <div>
                      <nuxt-link :to="{ path: '/product/single/' + item.id }">{{
                        item.title
                      }}</nuxt-link>
                      <p>{{ item.description }}</p>
                    </div>
                    <input
                      type="text"
                      placeholder="توضیحات مورد نظر خود را بنویسید"
                      class="desc mt-3"
                    />
                    <div class="mobile-cart-content row">
                      <div class="col-xs-3">
                        <div class="qty-box">
                          <div class="input-group">
                            <span class="input-group-prepend p-0">
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
                              class="form-control input-number p-0"
                              v-model="counter"
                            />
                            <span class="input-group-prepend p-0">
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
                      <div class="col-xs-3">
                        <h2 class="td-color">
                          {{ (item.price * curr.curr) | currency(curr.symbol) }}
                        </h2>
                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">
                          <a href="#" class="icon">
                            <i class="ti-close"></i>
                          </a>
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td class="d-lg-table-cell d-none">
                    <div class="qty-box d-flex align-items-center flex-column">
                      <label for="" class="m-0">تعداد</label>
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <button
                            type="button"
                            class="btn quantity-right-plus"
                            data-type="plus"
                            data-field
                            @click="increment(item)"
                          >
                            <i class="ti-plus"></i>
                          </button>
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          class="form-control input-number"
                          :disabled="item.quantity > item.stock"
                          v-model="item.quantity"
                        />
                        <span class="input-group-prepend">
                          <button
                            type="button"
                            class="btn quantity-left-minus"
                            data-type="minus"
                            data-field
                            @click="decrement(item)"
                          >
                            <i class="ti-minus"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="d-lg-table-cell d-none">
                    <h2 class="td-color">
                      {{ strReplace(String(item.price * 1000)) }}
                    </h2>
                    <h4 class="td-discount">
                      <del style="color: #cc0000">
                        {{ strReplace(String(item.price * 1000 - 100)) }}
                      </del>
                    </h4>
                  </td>
                  <td class="d-block d-lg-none description-td">
                    <h4 class="product">{{ item.title }}</h4>
                    <h5 class="shop">از فروشگاه :</h5>
                    <p class="delivery">
                      <i class="ti-truck"></i>ارسال از دو روز کاری دیگر
                    </p>
                    <div class="price-section">
                      <div class="price d-flex justify-content-between">
                        <span>قیمت واحد</span
                        ><span>{{ strReplace(String(item.price)) }}</span>
                      </div>
                      <div class="discount d-flex justify-content-between">
                        <span>تخفیف</span
                        ><span>{{ strReplace(String(1000)) }}</span>
                      </div>
                      <div class="final-price d-flex justify-content-between">
                        <span>مبلغ کل</span
                        ><span>{{
                          strReplace(String(item.price * 1000 - 1000))
                        }}</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="d-table-row d-lg-none counter">
                  <td class="d-table-cell">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <button
                          type="button"
                          class="btn quantity-right-plus"
                          data-type="plus"
                          data-field
                          @click="increment(item)"
                        >
                          <i class="ti-plus"></i>
                        </button>
                      </span>
                      <input
                        type="text"
                        name="quantity"
                        class="form-control input-number"
                        :disabled="item.quantity > item.stock"
                        v-model="item.quantity"
                      />
                      <span class="input-group-prepend">
                        <button
                          type="button"
                          class="btn quantity-left-minus"
                          data-type="minus"
                          data-field
                          @click="decrement(item)"
                        >
                          <i class="ti-minus"></i>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td class="d-table-cell" style="background: white">
                    <span style="visibility: hidden">p</span>
                  </td>
                </tr>
                <tr class="d-table-row d-lg-none counter">
                  <td class="d-table-cell">
                    <input type="text" class="w-100 px-3 py-4" />
                  </td>
                  <td class="table-cell">
                    <span style="visibility: hidden">1</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- <table
              class="table cart-table table-responsive-md"
              v-if="cart.length"
            >
              <tfoot>
                <tr>
                  <td>total price :</td>
                  <td>
                    <h2>
                      {{ (cartTotal * curr.curr) | currency(curr.symbol) }}
                    </h2>
                  </td>
                </tr>
              </tfoot>
            </table> -->
            <div
              class="col-sm-12 empty-cart-cls text-center"
              v-if="!cart.length"
            >
              <img
                :src="'@/assets/images/icon-empty-cart.png'"
                class="img-fluid"
                alt="empty cart"
              />
              <h3 class="mt-3">
                <strong>سبد خرید شما خالیست!</strong>
              </h3>
              <!-- <h4 class="mb-3">لورم ایپسوم</h4> -->
              <div class="col-12">
                <nuxt-link :to="{ path: '/' }" class="btn btn-solid"
                  >ادامه خرید</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="box">
              <div class="total d-flex justify-content-between">
                <span>مجموع خرید : </span
                ><span>{{ strReplace(String(cartTotal * 1000)) }} تومان</span>
              </div>
              <div class="discount d-flex justify-content-between">
                <span>مجموع تخفیف : </span
                ><span>{{ strReplace(String(cartTotal * 1000)) }} تومان</span>
              </div>
              <div class="final d-flex justify-content-between">
                <span>مبلغ قابل پرداخت : </span
                ><span>{{ strReplace(String(cartTotal * 1000)) }} تومان</span>
              </div>
              <button class="w-100">تکمیل خرید</button>
              <p>
                در صفحه بعد می توانید مشخصات خود را وارد نموده و خرید خود را
                تکمیل کنید
              </p>
            </div>
            <div class="cart-footer-buyer-protection card no-border mt-4">
              <div
                class="
                  under-result-box
                  buyer-protection
                  pasazh-fade-gray-separator-border
                "
              >
                <div class="protection-icon"></div>
                <div class="protection-text">
                  <div class="protection-title pasazh-blue-text">
                    حفاظت از خریدار
                  </div>
                  <div class="protection-items">
                    <div
                      class="
                        col-lg-12 col-md-12 col-sm-12 col-xs-12
                        not-padding
                      "
                    >
                      <div class="protection-item">
                        <img
                          data-v-87674168=""
                          src="https://img.icons8.com/color/48/000000/checked-checkbox.png"
                          height="20"
                          alt=""
                        />
                        <strong>بازگشت کامل وجه</strong> در صورت عدم دریافت کالا
                      </div>
                    </div>
                    <div
                      class="
                        col-lg-12 col-md-12 col-sm-12 col-xs-12
                        not-padding
                      "
                    >
                      <div class="protection-item">
                        <img
                          data-v-87674168=""
                          src="https://img.icons8.com/color/48/000000/checked-checkbox.png"
                          height="20"
                          alt=""
                        />
                        <strong>بازگشت کامل وجه</strong> در صورت عدم تطبیق کالا
                        با مشخصات ثبت شده
                      </div>
                    </div>
                    <div style="clear: both"></div>
                  </div>
                  <div style="clear: both"></div>
                  <!-- <div class="learn-more">
                    <a
                      class="
                        pasazh-dark-blue-text pasazh-light-blue-text-hovered
                      "
                      href="https://epasazh.com/buyer-protection"
                      >بیشتر بدانید</a
                    >
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row cart-buttons" v-if="cart.length">
          <div class="col-6">
            <nuxt-link :to="{ path: '/' }" :class="'btn btn-solid'"
              >ادامه خرید</nuxt-link
            >
          </div>
          <div class="col-6">
            <nuxt-link
              :to="{ path: '/page/account/checkout' }"
              :class="'btn btn-solid'"
              >پرداخت</nuxt-link
            >
          </div>
        </div> -->
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "../../components/header/header3";
import Footer from "../../components/footer/footer1";
import Breadcrumbs from "../../components/widgets/breadcrumbs";
export default {
  data() {
    return {
      counter: 1,
    };
  },
  components: {
    Header,
    Footer,
    Breadcrumbs,
  },
  computed: {
    ...mapGetters({
      cart: "cart/cartItems",
      cartTotal: "cart/cartTotalAmount",
      curr: "products/changeCurrency",
    }),
  },
  methods: {
    strReplace(item) {
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
    removeCartItem: function (product) {
      this.$store.dispatch("cart/removeCartItem", product);
    },
    increment(product, qty = 1) {
      this.$store.dispatch("cart/updateCartQuantity", {
        product: product,
        qty: qty,
      });
    },
    decrement(product, qty = -1) {
      this.$store.dispatch("cart/updateCartQuantity", {
        product: product,
        qty: qty,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.cart-table {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
}
.product-item tr {
  background: #fff;
  .ti-close {
    border-radius: 100%;
    border: 1px solid red;
    color: red;
    padding: 2px;
  }
  img {
    height: 130px;
    width: 130px;
    object-fit: cover;
    border-radius: 5px;
  }
  .first-child-table {
    min-width: 180px;
    width: 180px;
    @media screen and (max-width: 992px) {
      height: 300px;
      width: 40%;
    }
    img {
      @media screen and (max-width: 992px) {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .icon {
      @media screen and (max-width: 992px) {
        display: none;
      }
    }
  }
  .desc {
    max-height: 80px !important;
    border-radius: 5px;
    position: relative;
    top: 3px;
    background: #f9f9f9;
    border: solid 1px #f1f1f1;
    outline: none;
    // margin-top: 5px;
    &::placeholder {
      font-size: 11px;
    }
  }
}
.qty-box {
  button {
    height: 30px;
    width: 30px;
    border-radius: 5px !important;
    padding: 0;
  }
  input {
    height: 30px;
    padding: 0;
    border-radius: 5px !important;
  }
  label {
    font-size: 13px;
  }
}
.box {
  background: #fff;
  padding: 35px 20px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  @media screen and (max-width:1199px) and (min-width:992px){
    margin-top: 10px;
  }
  .total,
  .discount {
    margin-bottom: 12px;
    span {
      color: #999;
      font-size: 14px;
    }
  }
  .discount {
    border-bottom: 1px solid black;
    // margin: 0 !important;
    padding-bottom: 12px;
  }
  .final {
    margin-bottom: 15px;
  }
  button {
    padding: 0 37px;
    font-family: iranyekanR;
    font-size: 15px;
    border-radius: 5px;
    min-width: 185px;
    text-align: center;
    line-height: 25px;
    color: #fff;
    transition: all 0.3s;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: 0 !important;
    background: #00bf6f;
    margin-top: 17px;
    text-shadow: 0 0 9px black;
  }
  p {
    margin-top: 17px;
    text-align: right;
  }
}
.cart-footer-buyer-protection {
  padding: 7px 2px 10px 10px;
  background-color: #fff;
  text-align: right;
  // box-shadow: 0 0 3px 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
  .buyer-protection {
    border: none !important;
  }
  .protection-icon {
    width: 46px;
    height: 46px;
    background-position: 0 0;
    top: 4px;
    float: right;
    background-image: url(https://epasazh.com/images/buyer-protection.png);
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    top: 18px;
  }
  .protection-text {
    padding-right: 65px;
    .protection-title {
      font-size: 16px;
      line-height: normal;
    }
    .protection-items {
      font-size: 12px;
      line-height: 23px;
      color: #8a8a8a;
    }
  }
}
@media screen and (max-width: 992px) {
  .product-items {
    background: #fff;
    padding: 5px;
    margin-bottom: 1rem;
    border-radius: 6px;
    box-shadow: 0 0 9px 0px #c7c7c7;
  }
  .first-child-table {
    border: none;
    width: 40%;
    height: 300px;
    .icon {
      display: none;
    }
    img {
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .description-box {
    width: 60%;
  }
  .description-td {
    border: none;
    height: 300px;
    padding: 25px 10px;
    .product {
      margin-bottom: 12px;
      line-height: 19px;
      font-size: 12px;
      font-weight: 100;
      text-align: right;
      color: #000;
    }
    .shop {
      margin-bottom: 12px;
      line-height: 19px;
      color: #212529;
      text-align: right;
      font-size: 11px;
    }
    .delivery {
      color: #717195;
      margin-bottom: 12px;
      line-height: 19px;
      font-size: 11px;
      text-align: right;
    }
    .price-section {
      .price {
        color: #717195;
        margin-bottom: 12px;
        line-height: 19px;
        font-size: 12px !important;
      }
      .discount {
        color: #c82e04 !important;
        margin-bottom: 12px;
        line-height: 19px;
        font-size: 12px !important;
      }
      .final-price {
        color: #137c00 !important;
        margin-bottom: 12px;
        line-height: 19px;
        font-size: 12px !important;
      }
    }
  }
}
@media screen and (max-width:768px){

  .description-box,.first-child-table {
    height: 230px;
  }
}
@media screen and (max-width:570px){

  .description-box,.first-child-table {
    height: 200px;
  }
  .description-box .description-td{
    padding-top: 0;
  }
}
@media screen and (max-width:425px){

  .description-box,.first-child-table {
    height: 170px;
  }
}
.counter {
  .input-group {
    width: 40%;
    padding: 0;
    margin-top: 10px;
    border-radius: 50px;
    border: 1px solid #dddddd;
  }
  input {
    width: 60%;
    max-width: 60%;
    flex: unset;
    border: none;
    outline: none;
    background: transparent;
    text-align: center;
  }
  span {
    width: 20%;
  }
  .input-group-prepend{
    justify-content: center;
  }
}
.more-desc{
  width: 100%;
    border-radius: 200px;
    padding: 15px 10px;
    font-size: 11px;
    background: #f1f1f1;
    border: none;
    line-height: 17px;
    max-height: 60px;
    outline: none!important;
    margin-top: 10px;
}
</style>