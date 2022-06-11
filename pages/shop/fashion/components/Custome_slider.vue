<template>
  <div>
    <div class="container-fluid custom-slider d-none d-lg-block">
      <div class="row justify-content-center">
        <h4 class="text-right w-100 category-title">
          {{ title }} <a href="" class="float-left">مشاهده همه</a>
        </h4>
        <div class="col-md-3">
          <img :src="imgUrl" class="w-100" alt="" />
        </div>
        <div class="col-xl-8 col-lg-9">
          <div class="row">
            <div
              class="col-xl-3 col-lg-4 mt-2"
              v-for="(product, index) in products"
              :key="index"
            >
              <div class="product-box">
                <productBox1
                  @opencartmodel="showCartModal"
                  @showCompareModal="showcomparemodal"
                  @openquickview="showquickview"
                  @showalert="alert"
                  @alertseconds="alert"
                  :product="product"
                  :index="index"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid d-block d-lg-none custom-slider mb-2">
      <!-- <h4 class="title-inner1 text-center">{{ subtitle }} <timer  date="December 20, 2022" /> </h4> -->
      <h4 class="text-right w-100 category-title">
        {{ title }} <a href="" class="float-left">مشاهده همه</a>
      </h4>
      <ul class="d-flex product-list-sm">
        <li v-for="(product, index) in products" :key="index">
          <div class="product-box">
            <productBox1
              @opencartmodel="showCartModal"
              @showCompareModal="showcomparemodal"
              @openquickview="showquickview"
              @showalert="alert"
              @alertseconds="alert"
              :product="product"
              :index="index"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import productBox1 from "../../../../components/product-box/product-box1";
export default {
  props: ["products", "title", "imgUrl"],
  components: {
    productBox1,
  },
  data() {
    return {
      //   title: "بهترین کالکشن",
      subtitle: "تخفیف های بهاری",
      showCart: false,
      imgSrc: ``,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      description: "بهار را با تخفیف آغاز کن!",
    };
  },
  methods: {
    alert(item) {
      this.dismissCountDown = item;
    },
    showCartModal(item, productData) {
      this.showCart = item;
      this.cartproduct = productData;
      this.$emit("openCart", this.showCart, this.cartproduct);
    },
    showquickview(item, productData) {
      this.showquickviewmodel = item;
      this.quickviewproduct = productData;
      this.$emit(
        "openQuickview",
        this.showquickviewmodel,
        this.quickviewproduct
      );
    },
    showcomparemodal(item, productData) {
      this.showcomapreModal = item;
      this.comapreproduct = productData;
      this.$emit("openCompare", this.showcomapreModal, this.comapreproduct);
    },
  },
};
</script>

<style lang="scss" scoped>
.category-title {
  padding: 0 6rem;
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
.product-box {
  box-shadow: 0 0 11px #00000052;
  background: #fff;
  padding: 4px;
  border-radius: 25px;
  position: relative;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
  //   @media screen and (max-width: 1024px) {
  //     width: 30vw;
  //     margin-left: 2rem;
  //   }
  @media screen and (max-width: 992px) {
    width: 24vw;
    margin-left: 2rem;
  }
  @media screen and (max-width: 768px) {
    width: 29vw;
    margin-left: 1rem;
    border-radius: 5px;
  }
  @media screen and (max-width: 500px) {
    width: 45vw;
    margin-left: 0.75rem;
    border-radius: 5px;
  }
}
.product-list-sm {
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100vw;
  padding: 1rem 0;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-button {
    width: 2px;
    background: transparent;
    height: 2px;
  }
  &:first-child {
    img {
      object-fit: cover;
      height: 100%;
      width: 60vw;
    }
  }
}
.custom-slider{
    margin-top: 6rem;
    @media screen and (max-width:992px){
        margin-top: 2rem;
    }
}
</style>