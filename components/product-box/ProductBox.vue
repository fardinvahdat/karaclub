<template>
  <div class="d-flex flex-lg-column flex-row card-contain">
    <div class="img-wrapper">
      <div class="front">
        <nuxt-link :to="{ path: '/product/single/' + product.id }">
          <img
            :src="getImgUrl(imageSrc ? imageSrc : product.images[0].src)"
            :id="product.id"
            class="img-fluid bg-img product-img-product-box1"
            :alt="product.title"
            :key="index"
          />
        </nuxt-link>
      </div>
    </div>
    <div class="product-detail position-relative">
      <nuxt-link :to="{ path: '/product/single/' + product.id }">
        <h6 class="text-right product-name">{{ product.title }}</h6>
      </nuxt-link>
      <p class="text-right">{{ product.description }}</p>
      <div class="price-box">
        <span class="discount">10%</span>
        <del>{{ strReplace(String(product.price * 1000 - 10000)) }}</del>
        <h4 v-if="product.sale" class="text-left mt-2">
          {{ strReplace(String(product.price * 1000)) }}
        </h4>
        <h4 v-else class="text-left mt-2">
          تومان{{ strReplace(String(product.price * 1000)) }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { log } from "util";
export default {
  props: ["product", "index"],
  data() {
    return {
      imageSrc: "",
      discount: 10,
      quickviewProduct: {},
      compareProduct: {},
      cartProduct: {},
      showquickview: false,
      showCompareModal: false,
      cartval: false,
      variants: {
        productId: "",
        image: "",
      },
      dismissSecs: 5,
      dismissCountDown: 0,
    };
  },
  computed: {
    ...mapState({
      productslist: (state) => state.products.productslist,
    }),
    ...mapGetters({
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
    addToCart: function (product) {
      this.cartval = true;
      this.cartProduct = product;
      this.$emit("opencartmodel", this.cartval, this.cartProduct);
      this.$store.dispatch("cart/addToCart", product);
    },
    addToWishlist: function (product) {
      this.dismissCountDown = this.dismissSecs;
      this.$emit("showalert", this.dismissCountDown);
      this.$store.dispatch("products/addToWishlist", product);
    },
    showQuickview: function (productData) {
      this.showquickview = true;
      this.quickviewProduct = productData;
      this.$emit("openquickview", this.showquickview, this.quickviewProduct);
    },
    addToCompare: function (product) {
      this.showCompareModal = true;
      this.compareProduct = product;
      this.$emit(
        "showCompareModal",
        this.showCompareModal,
        this.compareProduct
      );
      this.$store.dispatch("products/addToCompare", product);
    },
    Color(variants) {
      const uniqColor = [];
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color);
        }
      }
      return uniqColor;
    },
    productColorchange(color, product) {
      product.variants.map((item) => {
        if (item.color === color) {
          product.images.map((img) => {
            if (img.image_id === item.image_id) {
              this.imageSrc = img.src;
            }
          });
        }
      });
    },
    productVariantChange(imgsrc) {
      console.log("I am calll");
      this.imageSrc = imgsrc;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
      this.$emit("alertseconds", this.dismissCountDown);
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
  },
};
</script>
<style scoped lang="scss">
.card-contain{
    @media screen and (max-width:992px){
        border-bottom: 1px solid #cccccc;
        padding: 0.5rem 0;
    }
}
.product-img-product-box1 {
  object-fit: cover;
}
.product-img-product-box1 {
  height: 300px;
  width: 100%;
  @media screen and (max-width: 992px) {
    height: 138px;
    width: 138px;
  }
}
.product-name {
  font-size: 13px !important;
}
.product-detail {
  @media screen and (max-width: 992px) {
    width: calc(100% - 138px);
  }
  .discount {
    background: rgb(6, 119, 0);
    padding: 4px;
    border-radius: 7px;
    color: #fff;
    font-size: 12px;
  }
  .price-box {
    @media screen and (max-width: 992px) {
      position: absolute;
      bottom: 0;
      left: 0;
      padding-top: 1rem;
      width: 100%;
      border-top: 1px dashed #cccccc;
    }
  }
}
.img-wrapper {
  border-radius: 19px;
  @media screen and (max-width: 992px) {
    width: 138px;
    height: 138px;
  }
}
</style>
