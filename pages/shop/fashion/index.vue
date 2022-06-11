<template>
  <div dir="rtl">
    <Header />
    <Slider />
    <bannerGroup />
    <ProductSlider
      :products="products"
      @openQuickview="showQuickview"
      @openCompare="showCoampre"
      @openCart="showCart"
    />
    <CollectionBanner />
    <Style/>
    <!-- <Banner /> -->
    <ProductSlider2
      :products="products"
      @openQuickview="showQuickview"
      @openCompare="showCoampre"
      @openCart="showCart"
      :title="'مانتو و رویه'"
      imgUrl="	https://dl.epasazh.com/images/advertises/a-d-img-621f1af5b9922.jpg"
    />
    <ProductSlider2
      :products="products.slice(0, 4)"
      @openQuickview="showQuickview"
      @openCompare="showCoampre"
      @openCart="showCart"
      :title="'کیف و کفش'"
      imgUrl="https://dl.epasazh.com/images/advertises/a-d-img-621f1c52dd6d7.png"
    />
    <CustomBanner />
    <ProductSlider2
      :products="products"
      @openQuickview="showQuickview"
      @openCompare="showCoampre"
      @openCart="showCart"
      :title="'شال و روسری'"
      imgUrl="https://dl.epasazh.com/images/advertises/a-d-img-6214961a4e9b2.png"
    />
    <!-- <LogoSlider /> -->
    <BottomBanner />

    <!-- <ProductTab :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" /> -->
    <Services class="d-lg-block d-none"/>
    <!-- <Blog /> -->
    <!-- <Instagram /> -->
    <Footer />
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
      :products="products"
    />
    <newsletterModel />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Header from "../../../components/header/header3";
import Footer from "../../../components/footer/footer1";
import quickviewModel from "../../../components/widgets/quickview";
import compareModel from "../../../components/widgets/compare-popup";
import cartModel from "../../../components/cart-model/cart-modal-popup";
import newsletterModel from "../../../components/widgets/newsletter-popup";
import Slider from "./components/slider";
import CollectionBanner from "./components/collection_banner";
import ProductSlider from "./components/product_slider";
import ProductSlider2 from "./components/Custome_slider";
// import ProductSlider from './components/product_slider'
import CustomBanner from "./components/customBanner";
import BottomBanner from "./components/bannerBottom";
import bannerGroup from "./components/bannerGrops";
import Style from "./components/Style";
import Banner from "./components/banner";
import ProductTab from "./components/product_tab";
import Services from "./components/services";
import Blog from "./components/blog";
// import Instagram from './components/instagram'
import LogoSlider from "./components/logo_slider";

export default {
  components: {
    Header,
    bannerGroup,
    Slider,
    Style,
    CollectionBanner,
    ProductSlider,
    CustomBanner,
    BottomBanner,
    Banner,
    ProductTab,
    Services,
    Blog,
    ProductSlider2,
    LogoSlider,
    Footer,
    quickviewModel,
    compareModel,
    cartModel,
    newsletterModel,
  },
  data() {
    return {
      products: [],
      category: [],
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
    };
  },
  computed: {
    ...mapState({
      productslist: (state) => state.products.productslist,
    }),
  },
  mounted() {
    this.productsArray();
  },
  methods: {
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
