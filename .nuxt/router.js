import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _acd57102 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _66a02774 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _159e7244 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _2322206a = () => interopDefault(import('../pages/checkout/index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _5f9c0292 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _51641cf0 = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _09a596be = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _ff3ba232 = () => interopDefault(import('../pages/service/index.vue' /* webpackChunkName: "pages/service/index" */))
const _b20c9b60 = () => interopDefault(import('../pages/blog/blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _5eaa13f4 = () => interopDefault(import('../pages/blog/blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _b5cd4b68 = () => interopDefault(import('../pages/blog/blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _063672ff = () => interopDefault(import('../pages/blog/blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _43904788 = () => interopDefault(import('../pages/collection/full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _128f83b8 = () => interopDefault(import('../pages/collection/list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _b6aa036e = () => interopDefault(import('../pages/collection/metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _0030dc60 = () => interopDefault(import('../pages/collection/no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _017174db = () => interopDefault(import('../pages/collection/right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _c75ed9aa = () => interopDefault(import('../pages/collection/sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _abf2f55e = () => interopDefault(import('../pages/collection/six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _3312d615 = () => interopDefault(import('../pages/collection/three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _1e32a699 = () => interopDefault(import('../pages/page/404.vue' /* webpackChunkName: "pages/page/404" */))
const _6021402e = () => interopDefault(import('../pages/page/about.vue' /* webpackChunkName: "pages/page/about" */))
const _66225166 = () => interopDefault(import('../pages/page/collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _ab159cb0 = () => interopDefault(import('../pages/page/coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _60dc6949 = () => interopDefault(import('../pages/page/compare/index.vue' /* webpackChunkName: "pages/page/compare/index" */))
const _6bb96d12 = () => interopDefault(import('../pages/page/faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _29ef5112 = () => interopDefault(import('../pages/page/lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _00eeaca5 = () => interopDefault(import('../pages/page/order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _3f4552f2 = () => interopDefault(import('../pages/page/review.vue' /* webpackChunkName: "pages/page/review" */))
const _27091cd7 = () => interopDefault(import('../pages/page/search.vue' /* webpackChunkName: "pages/page/search" */))
const _450fed5e = () => interopDefault(import('../pages/page/typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _0b647c37 = () => interopDefault(import('../pages/page/wishlist/index.vue' /* webpackChunkName: "pages/page/wishlist/index" */))
const _62870a36 = () => interopDefault(import('../pages/product/bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _0527b296 = () => interopDefault(import('../pages/product/four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _35122496 = () => interopDefault(import('../pages/shop/bags/index.vue' /* webpackChunkName: "pages/shop/bags/index" */))
const _3d911a67 = () => interopDefault(import('../pages/shop/beauty/index.vue' /* webpackChunkName: "pages/shop/beauty/index" */))
const _15017ae6 = () => interopDefault(import('../pages/shop/electronics-1/index.vue' /* webpackChunkName: "pages/shop/electronics-1/index" */))
const _bd7729fa = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _014fe730 = () => interopDefault(import('../pages/shop/fashion-2/index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
const _d78681ae = () => interopDefault(import('../pages/shop/fashion-3/index.vue' /* webpackChunkName: "pages/shop/fashion-3/index" */))
const _2b540cf4 = () => interopDefault(import('../pages/shop/flower/index.vue' /* webpackChunkName: "pages/shop/flower/index" */))
const _024b4e86 = () => interopDefault(import('../pages/shop/furniture/index.vue' /* webpackChunkName: "pages/shop/furniture/index" */))
const _74898f46 = () => interopDefault(import('../pages/shop/gym/index.vue' /* webpackChunkName: "pages/shop/gym/index" */))
const _49e7c7ce = () => interopDefault(import('../pages/shop/jewellery/index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
const _fa3d01d0 = () => interopDefault(import('../pages/shop/kids/index.vue' /* webpackChunkName: "pages/shop/kids/index" */))
const _a576a9c2 = () => interopDefault(import('../pages/shop/pets/index.vue' /* webpackChunkName: "pages/shop/pets/index" */))
const _b3313f9a = () => interopDefault(import('../pages/shop/shoes/index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _632ed366 = () => interopDefault(import('../pages/shop/tools/index.vue' /* webpackChunkName: "pages/shop/tools/index" */))
const _29617a46 = () => interopDefault(import('../pages/shop/vegetables/index.vue' /* webpackChunkName: "pages/shop/vegetables/index" */))
const _141cad5a = () => interopDefault(import('../pages/shop/watch/index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _fe98bb06 = () => interopDefault(import('../pages/blog/widgets/blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _0f03784d = () => interopDefault(import('../pages/blog/widgets/blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _5ce1a2b1 = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _1a3fcd57 = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _29b2731f = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _775c61d3 = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _7bbd88fa = () => interopDefault(import('../pages/page/account/forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _627340b0 = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _1cde72bc = () => interopDefault(import('../pages/page/account/login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _31d9ec28 = () => interopDefault(import('../pages/page/account/profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _5d46b834 = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _9d1c4354 = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _61bd4b7e = () => interopDefault(import('../pages/page/compare/compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _11230a4e = () => interopDefault(import('../pages/page/element/banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _f6a0d6c0 = () => interopDefault(import('../pages/page/element/category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _458de189 = () => interopDefault(import('../pages/page/element/collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _e96bdf46 = () => interopDefault(import('../pages/page/element/home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _aed3efde = () => interopDefault(import('../pages/page/element/logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _8ac649d2 = () => interopDefault(import('../pages/page/element/multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _786d7b21 = () => interopDefault(import('../pages/page/element/product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _1e16893e = () => interopDefault(import('../pages/page/element/product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _14959983 = () => interopDefault(import('../pages/page/element/service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _f4e0216c = () => interopDefault(import('../pages/page/portfolio/masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _a2e52178 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _a2c8f276 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _a2acc374 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _34e339fa = () => interopDefault(import('../pages/page/portfolio/portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _6db0ae0a = () => interopDefault(import('../pages/page/portfolio/portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _5d6c17fc = () => interopDefault(import('../pages/page/portfolio/portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _23f08824 = () => interopDefault(import('../pages/product/sidebar/no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _7062ee07 = () => interopDefault(import('../pages/product/sidebar/right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _1a23b565 = () => interopDefault(import('../pages/product/three-column/thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _60e58dc1 = () => interopDefault(import('../pages/product/three-column/thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _0ddd775c = () => interopDefault(import('../pages/product/three-column/thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _913e6826 = () => interopDefault(import('../pages/product/thumbnail-image/image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _ce15486a = () => interopDefault(import('../pages/product/thumbnail-image/left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _1b1f1c24 = () => interopDefault(import('../pages/product/thumbnail-image/right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _62c85644 = () => interopDefault(import('../pages/service/components/Card.vue' /* webpackChunkName: "pages/service/components/Card" */))
const _d2027c52 = () => interopDefault(import('../pages/service/components/CardSection.vue' /* webpackChunkName: "pages/service/components/CardSection" */))
const _51ce54ed = () => interopDefault(import('../pages/service/components/SearchBar.vue' /* webpackChunkName: "pages/service/components/SearchBar" */))
const _da4e233e = () => interopDefault(import('../pages/page/account/auth/auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _dc56feee = () => interopDefault(import('../pages/shop/bags/components/banner.vue' /* webpackChunkName: "pages/shop/bags/components/banner" */))
const _3128733f = () => interopDefault(import('../pages/shop/bags/components/blog.vue' /* webpackChunkName: "pages/shop/bags/components/blog" */))
const _c2472fca = () => interopDefault(import('../pages/shop/bags/components/category.vue' /* webpackChunkName: "pages/shop/bags/components/category" */))
const _3cc844a7 = () => interopDefault(import('../pages/shop/bags/components/category2.vue' /* webpackChunkName: "pages/shop/bags/components/category2" */))
const _24f2574a = () => interopDefault(import('../pages/shop/bags/components/categorytab.vue' /* webpackChunkName: "pages/shop/bags/components/categorytab" */))
const _14efda65 = () => interopDefault(import('../pages/shop/bags/components/instagram.vue' /* webpackChunkName: "pages/shop/bags/components/instagram" */))
const _462e7241 = () => interopDefault(import('../pages/shop/bags/components/productcategoryslider.vue' /* webpackChunkName: "pages/shop/bags/components/productcategoryslider" */))
const _b602767a = () => interopDefault(import('../pages/shop/bags/components/productslider.vue' /* webpackChunkName: "pages/shop/bags/components/productslider" */))
const _c813e90a = () => interopDefault(import('../pages/shop/bags/components/services.vue' /* webpackChunkName: "pages/shop/bags/components/services" */))
const _114197be = () => interopDefault(import('../pages/shop/bags/components/slider.vue' /* webpackChunkName: "pages/shop/bags/components/slider" */))
const _148143cf = () => interopDefault(import('../pages/shop/beauty/components/about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))
const _bc21d060 = () => interopDefault(import('../pages/shop/beauty/components/blog.vue' /* webpackChunkName: "pages/shop/beauty/components/blog" */))
const _021e6874 = () => interopDefault(import('../pages/shop/beauty/components/instagram.vue' /* webpackChunkName: "pages/shop/beauty/components/instagram" */))
const _0f3d2ca6 = () => interopDefault(import('../pages/shop/beauty/components/product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/product-slider" */))
const _6af15c0f = () => interopDefault(import('../pages/shop/beauty/components/slider.vue' /* webpackChunkName: "pages/shop/beauty/components/slider" */))
const _3ffc2bb6 = () => interopDefault(import('../pages/shop/beauty/components/top-product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/top-product-slider" */))
const _053f821e = () => interopDefault(import('../pages/shop/beauty/components/video-tutorial.vue' /* webpackChunkName: "pages/shop/beauty/components/video-tutorial" */))
const _7a817c60 = () => interopDefault(import('../pages/shop/electronics-1/components/collection_banner.vue' /* webpackChunkName: "pages/shop/electronics-1/components/collection_banner" */))
const _466d9330 = () => interopDefault(import('../pages/shop/electronics-1/components/product_tab.vue' /* webpackChunkName: "pages/shop/electronics-1/components/product_tab" */))
const _0fd1f60e = () => interopDefault(import('../pages/shop/electronics-1/components/slider.vue' /* webpackChunkName: "pages/shop/electronics-1/components/slider" */))
const _0219854a = () => interopDefault(import('../pages/shop/fashion-2/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
const _6021c04d = () => interopDefault(import('../pages/shop/fashion-2/components/collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
const _5db5345c = () => interopDefault(import('../pages/shop/fashion-2/components/collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
const _fe31d75a = () => interopDefault(import('../pages/shop/fashion-2/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
const _0a57bd60 = () => interopDefault(import('../pages/shop/fashion-2/components/product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
const _7e605490 = () => interopDefault(import('../pages/shop/fashion-2/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
const _4924d69c = () => interopDefault(import('../pages/shop/fashion-3/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-3/components/banner" */))
const _2d2ff9be = () => interopDefault(import('../pages/shop/fashion-3/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_slider" */))
const _e5a6bef6 = () => interopDefault(import('../pages/shop/fashion-3/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_tab" */))
const _6edc245e = () => interopDefault(import('../pages/shop/fashion-3/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/slider" */))
const _b6d0e914 = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _789d55c1 = () => interopDefault(import('../pages/shop/fashion/components/bannerBottom.vue' /* webpackChunkName: "pages/shop/fashion/components/bannerBottom" */))
const _53b87ec1 = () => interopDefault(import('../pages/shop/fashion/components/bannerGrops.vue' /* webpackChunkName: "pages/shop/fashion/components/bannerGrops" */))
const _751b556c = () => interopDefault(import('../pages/shop/fashion/components/blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _e348fdda = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _2a01e772 = () => interopDefault(import('../pages/shop/fashion/components/customBanner.vue' /* webpackChunkName: "pages/shop/fashion/components/customBanner" */))
const _2e070ad6 = () => interopDefault(import('../pages/shop/fashion/components/Custome_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/Custome_slider" */))
const _6c444c58 = () => interopDefault(import('../pages/shop/fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _d0922cca = () => interopDefault(import('../pages/shop/fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _132d3dfb = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _52922ac7 = () => interopDefault(import('../pages/shop/fashion/components/product_slider2.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider2" */))
const _254ae3eb = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _0a220f28 = () => interopDefault(import('../pages/shop/fashion/components/services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _2404a2ab = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _4c79bc92 = () => interopDefault(import('../pages/shop/fashion/components/Style.vue' /* webpackChunkName: "pages/shop/fashion/components/Style" */))
const _691adc2f = () => interopDefault(import('../pages/shop/flower/components/blog.vue' /* webpackChunkName: "pages/shop/flower/components/blog" */))
const _55a0093e = () => interopDefault(import('../pages/shop/flower/components/category_tab.vue' /* webpackChunkName: "pages/shop/flower/components/category_tab" */))
const _74364f30 = () => interopDefault(import('../pages/shop/flower/components/collection_banner.vue' /* webpackChunkName: "pages/shop/flower/components/collection_banner" */))
const _15c98775 = () => interopDefault(import('../pages/shop/flower/components/instagram.vue' /* webpackChunkName: "pages/shop/flower/components/instagram" */))
const _74316cfe = () => interopDefault(import('../pages/shop/flower/components/product_slider.vue' /* webpackChunkName: "pages/shop/flower/components/product_slider" */))
const _51aa7c6b = () => interopDefault(import('../pages/shop/flower/components/services.vue' /* webpackChunkName: "pages/shop/flower/components/services" */))
const _163d84ae = () => interopDefault(import('../pages/shop/flower/components/slider.vue' /* webpackChunkName: "pages/shop/flower/components/slider" */))
const _2435429b = () => interopDefault(import('../pages/shop/flower/components/top_products.vue' /* webpackChunkName: "pages/shop/flower/components/top_products" */))
const _f7d23ab4 = () => interopDefault(import('../pages/shop/furniture/components/blog.vue' /* webpackChunkName: "pages/shop/furniture/components/blog" */))
const _8ad4ca50 = () => interopDefault(import('../pages/shop/furniture/components/category_tab.vue' /* webpackChunkName: "pages/shop/furniture/components/category_tab" */))
const _438cc219 = () => interopDefault(import('../pages/shop/furniture/components/collection_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/collection_banner" */))
const _5cb3d280 = () => interopDefault(import('../pages/shop/furniture/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/parallax_banner" */))
const _6251c965 = () => interopDefault(import('../pages/shop/furniture/components/slider.vue' /* webpackChunkName: "pages/shop/furniture/components/slider" */))
const _51c37c22 = () => interopDefault(import('../pages/shop/gym/components/blog.vue' /* webpackChunkName: "pages/shop/gym/components/blog" */))
const _15695084 = () => interopDefault(import('../pages/shop/gym/components/collection-banner.vue' /* webpackChunkName: "pages/shop/gym/components/collection-banner" */))
const _da808c96 = () => interopDefault(import('../pages/shop/gym/components/instagram.vue' /* webpackChunkName: "pages/shop/gym/components/instagram" */))
const _0f3cebf4 = () => interopDefault(import('../pages/shop/gym/components/logo-slider.vue' /* webpackChunkName: "pages/shop/gym/components/logo-slider" */))
const _4cf43309 = () => interopDefault(import('../pages/shop/gym/components/product-list.vue' /* webpackChunkName: "pages/shop/gym/components/product-list" */))
const _10fe7a6e = () => interopDefault(import('../pages/shop/gym/components/slider.vue' /* webpackChunkName: "pages/shop/gym/components/slider" */))
const _9f2687ba = () => interopDefault(import('../pages/shop/gym/components/top-collection.vue' /* webpackChunkName: "pages/shop/gym/components/top-collection" */))
const _77980953 = () => interopDefault(import('../pages/shop/jewellery/components/category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
const _53a8602d = () => interopDefault(import('../pages/shop/jewellery/components/instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
const _41e83e5d = () => interopDefault(import('../pages/shop/jewellery/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
const _25ab44d8 = () => interopDefault(import('../pages/shop/jewellery/components/product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
const _79fe92f2 = () => interopDefault(import('../pages/shop/jewellery/components/product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
const _74b1acb3 = () => interopDefault(import('../pages/shop/jewellery/components/services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
const _286426f6 = () => interopDefault(import('../pages/shop/jewellery/components/slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
const _112eb544 = () => interopDefault(import('../pages/shop/kids/components/collection_banner.vue' /* webpackChunkName: "pages/shop/kids/components/collection_banner" */))
const _76d5bc93 = () => interopDefault(import('../pages/shop/kids/components/collection_slider.vue' /* webpackChunkName: "pages/shop/kids/components/collection_slider" */))
const _6353eba3 = () => interopDefault(import('../pages/shop/kids/components/instagram.vue' /* webpackChunkName: "pages/shop/kids/components/instagram" */))
const _095be226 = () => interopDefault(import('../pages/shop/kids/components/logo_slider.vue' /* webpackChunkName: "pages/shop/kids/components/logo_slider" */))
const _1e49c305 = () => interopDefault(import('../pages/shop/kids/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/kids/components/parallax_banner" */))
const _00047590 = () => interopDefault(import('../pages/shop/kids/components/product_slider.vue' /* webpackChunkName: "pages/shop/kids/components/product_slider" */))
const _4f633f40 = () => interopDefault(import('../pages/shop/kids/components/slider.vue' /* webpackChunkName: "pages/shop/kids/components/slider" */))
const _1261baf0 = () => interopDefault(import('../pages/shop/pets/components/blog.vue' /* webpackChunkName: "pages/shop/pets/components/blog" */))
const _3cd81076 = () => interopDefault(import('../pages/shop/pets/components/collection-banner.vue' /* webpackChunkName: "pages/shop/pets/components/collection-banner" */))
const _20ef0966 = () => interopDefault(import('../pages/shop/pets/components/logo-slider.vue' /* webpackChunkName: "pages/shop/pets/components/logo-slider" */))
const _165170a8 = () => interopDefault(import('../pages/shop/pets/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/pets/components/parallax-banner" */))
const _aec52336 = () => interopDefault(import('../pages/shop/pets/components/product-slider.vue' /* webpackChunkName: "pages/shop/pets/components/product-slider" */))
const _07f998c7 = () => interopDefault(import('../pages/shop/pets/components/slider.vue' /* webpackChunkName: "pages/shop/pets/components/slider" */))
const _0d34717c = () => interopDefault(import('../pages/shop/pets/components/top-collection.vue' /* webpackChunkName: "pages/shop/pets/components/top-collection" */))
const _25e4b2fa = () => interopDefault(import('../pages/shop/shoes/components/about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
const _7c9ce2c8 = () => interopDefault(import('../pages/shop/shoes/components/blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
const _0dfa417d = () => interopDefault(import('../pages/shop/shoes/components/brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
const _447e8cf8 = () => interopDefault(import('../pages/shop/shoes/components/category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
const _4b6abb6a = () => interopDefault(import('../pages/shop/shoes/components/category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
const _4b78d2eb = () => interopDefault(import('../pages/shop/shoes/components/category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
const _11d98744 = () => interopDefault(import('../pages/shop/shoes/components/collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
const _dd72c30e = () => interopDefault(import('../pages/shop/shoes/components/collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
const _0fe8f7a6 = () => interopDefault(import('../pages/shop/shoes/components/collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
const _23925128 = () => interopDefault(import('../pages/shop/shoes/components/instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
const _d9f803b4 = () => interopDefault(import('../pages/shop/shoes/components/productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
const _6d5a362b = () => interopDefault(import('../pages/shop/shoes/components/service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
const _b81d604a = () => interopDefault(import('../pages/shop/shoes/components/slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
const _d8d77520 = () => interopDefault(import('../pages/shop/tools/components/about.vue' /* webpackChunkName: "pages/shop/tools/components/about" */))
const _1076eaeb = () => interopDefault(import('../pages/shop/tools/components/category.vue' /* webpackChunkName: "pages/shop/tools/components/category" */))
const _215818d0 = () => interopDefault(import('../pages/shop/tools/components/logo_slider.vue' /* webpackChunkName: "pages/shop/tools/components/logo_slider" */))
const _ab60a5a8 = () => interopDefault(import('../pages/shop/tools/components/product-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-slider" */))
const _3a0a2e38 = () => interopDefault(import('../pages/shop/tools/components/product-tab-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-tab-slider" */))
const _1917b68c = () => interopDefault(import('../pages/shop/tools/components/select-vehical.vue' /* webpackChunkName: "pages/shop/tools/components/select-vehical" */))
const _e6966450 = () => interopDefault(import('../pages/shop/tools/components/service.vue' /* webpackChunkName: "pages/shop/tools/components/service" */))
const _6382e2e4 = () => interopDefault(import('../pages/shop/tools/components/slider.vue' /* webpackChunkName: "pages/shop/tools/components/slider" */))
const _55ab6c50 = () => interopDefault(import('../pages/shop/vegetables/components/banner.vue' /* webpackChunkName: "pages/shop/vegetables/components/banner" */))
const _1785a4c6 = () => interopDefault(import('../pages/shop/vegetables/components/blog.vue' /* webpackChunkName: "pages/shop/vegetables/components/blog" */))
const _24a7a4d5 = () => interopDefault(import('../pages/shop/vegetables/components/product_slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/product_slider" */))
const _747dbcfc = () => interopDefault(import('../pages/shop/vegetables/components/services.vue' /* webpackChunkName: "pages/shop/vegetables/components/services" */))
const _55cef8f6 = () => interopDefault(import('../pages/shop/vegetables/components/slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/slider" */))
const _5cc8814e = () => interopDefault(import('../pages/shop/vegetables/components/special_products.vue' /* webpackChunkName: "pages/shop/vegetables/components/special_products" */))
const _6c7c51fa = () => interopDefault(import('../pages/shop/watch/components/blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _7e536c42 = () => interopDefault(import('../pages/shop/watch/components/category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _67ef92dd = () => interopDefault(import('../pages/shop/watch/components/categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _00384d50 = () => interopDefault(import('../pages/shop/watch/components/collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _32323121 = () => interopDefault(import('../pages/shop/watch/components/instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _cc827fb8 = () => interopDefault(import('../pages/shop/watch/components/logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _614beed2 = () => interopDefault(import('../pages/shop/watch/components/product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _84202582 = () => interopDefault(import('../pages/shop/watch/components/services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _2dddcafc = () => interopDefault(import('../pages/shop/watch/components/slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _2539f9c7 = () => interopDefault(import('../pages/shop/watch/components/timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _1bee296f = () => interopDefault(import('../pages/shop/watch/components/top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _875dac60 = () => interopDefault(import('../pages/collection/leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _2d979ed4 = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _fe152e98 = () => interopDefault(import('../pages/product/single/_id.vue' /* webpackChunkName: "pages/product/single/_id" */))
const _6ea681e2 = () => interopDefault(import('../pages/service/_id.vue' /* webpackChunkName: "pages/service/_id" */))
const _3117ee7e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _acd57102,
    name: "about"
  }, {
    path: "/blog",
    component: _66a02774,
    name: "blog"
  }, {
    path: "/cart",
    component: _159e7244,
    name: "cart"
  }, {
    path: "/checkout",
    component: _2322206a,
    name: "checkout"
  }, {
    path: "/contact",
    component: _5f9c0292,
    name: "contact"
  }, {
    path: "/faq",
    component: _51641cf0,
    name: "faq"
  }, {
    path: "/product",
    component: _09a596be,
    name: "product"
  }, {
    path: "/service",
    component: _ff3ba232,
    name: "service"
  }, {
    path: "/blog/blog-detail",
    component: _b20c9b60,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _5eaa13f4,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _b5cd4b68,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _063672ff,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _43904788,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _128f83b8,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _b6aa036e,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _0030dc60,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _017174db,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _c75ed9aa,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _abf2f55e,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _3312d615,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _1e32a699,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _6021402e,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _66225166,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _ab159cb0,
    name: "page-coming-soon"
  }, {
    path: "/page/compare",
    component: _60dc6949,
    name: "page-compare"
  }, {
    path: "/page/faq",
    component: _6bb96d12,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _29ef5112,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _00eeaca5,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _3f4552f2,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _27091cd7,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _450fed5e,
    name: "page-typography"
  }, {
    path: "/page/wishlist",
    component: _0b647c37,
    name: "page-wishlist"
  }, {
    path: "/product/bundle-product",
    component: _62870a36,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _0527b296,
    name: "product-four-image"
  }, {
    path: "/shop/bags",
    component: _35122496,
    name: "shop-bags"
  }, {
    path: "/shop/beauty",
    component: _3d911a67,
    name: "shop-beauty"
  }, {
    path: "/shop/electronics-1",
    component: _15017ae6,
    name: "shop-electronics-1"
  }, {
    path: "/shop/fashion",
    component: _bd7729fa,
    name: "shop-fashion"
  }, {
    path: "/shop/fashion-2",
    component: _014fe730,
    name: "shop-fashion-2"
  }, {
    path: "/shop/fashion-3",
    component: _d78681ae,
    name: "shop-fashion-3"
  }, {
    path: "/shop/flower",
    component: _2b540cf4,
    name: "shop-flower"
  }, {
    path: "/shop/furniture",
    component: _024b4e86,
    name: "shop-furniture"
  }, {
    path: "/shop/gym",
    component: _74898f46,
    name: "shop-gym"
  }, {
    path: "/shop/jewellery",
    component: _49e7c7ce,
    name: "shop-jewellery"
  }, {
    path: "/shop/kids",
    component: _fa3d01d0,
    name: "shop-kids"
  }, {
    path: "/shop/pets",
    component: _a576a9c2,
    name: "shop-pets"
  }, {
    path: "/shop/shoes",
    component: _b3313f9a,
    name: "shop-shoes"
  }, {
    path: "/shop/tools",
    component: _632ed366,
    name: "shop-tools"
  }, {
    path: "/shop/vegetables",
    component: _29617a46,
    name: "shop-vegetables"
  }, {
    path: "/shop/watch",
    component: _141cad5a,
    name: "shop-watch"
  }, {
    path: "/blog/widgets/blog-list",
    component: _fe98bb06,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _0f03784d,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _5ce1a2b1,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _1a3fcd57,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _29b2731f,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _775c61d3,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _7bbd88fa,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _627340b0,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _1cde72bc,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _31d9ec28,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _5d46b834,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _9d1c4354,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-2",
    component: _61bd4b7e,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _11230a4e,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _f6a0d6c0,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _458de189,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _e96bdf46,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _aed3efde,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _8ac649d2,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _786d7b21,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _1e16893e,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _14959983,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _f4e0216c,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _a2e52178,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _a2c8f276,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _a2acc374,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _34e339fa,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _6db0ae0a,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _5d6c17fc,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _23f08824,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _7062ee07,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _1a23b565,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _60e58dc1,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _0ddd775c,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _913e6826,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _ce15486a,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _1b1f1c24,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/service/components/Card",
    component: _62c85644,
    name: "service-components-Card"
  }, {
    path: "/service/components/CardSection",
    component: _d2027c52,
    name: "service-components-CardSection"
  }, {
    path: "/service/components/SearchBar",
    component: _51ce54ed,
    name: "service-components-SearchBar"
  }, {
    path: "/page/account/auth/auth",
    component: _da4e233e,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/bags/components/banner",
    component: _dc56feee,
    name: "shop-bags-components-banner"
  }, {
    path: "/shop/bags/components/blog",
    component: _3128733f,
    name: "shop-bags-components-blog"
  }, {
    path: "/shop/bags/components/category",
    component: _c2472fca,
    name: "shop-bags-components-category"
  }, {
    path: "/shop/bags/components/category2",
    component: _3cc844a7,
    name: "shop-bags-components-category2"
  }, {
    path: "/shop/bags/components/categorytab",
    component: _24f2574a,
    name: "shop-bags-components-categorytab"
  }, {
    path: "/shop/bags/components/instagram",
    component: _14efda65,
    name: "shop-bags-components-instagram"
  }, {
    path: "/shop/bags/components/productcategoryslider",
    component: _462e7241,
    name: "shop-bags-components-productcategoryslider"
  }, {
    path: "/shop/bags/components/productslider",
    component: _b602767a,
    name: "shop-bags-components-productslider"
  }, {
    path: "/shop/bags/components/services",
    component: _c813e90a,
    name: "shop-bags-components-services"
  }, {
    path: "/shop/bags/components/slider",
    component: _114197be,
    name: "shop-bags-components-slider"
  }, {
    path: "/shop/beauty/components/about",
    component: _148143cf,
    name: "shop-beauty-components-about"
  }, {
    path: "/shop/beauty/components/blog",
    component: _bc21d060,
    name: "shop-beauty-components-blog"
  }, {
    path: "/shop/beauty/components/instagram",
    component: _021e6874,
    name: "shop-beauty-components-instagram"
  }, {
    path: "/shop/beauty/components/product-slider",
    component: _0f3d2ca6,
    name: "shop-beauty-components-product-slider"
  }, {
    path: "/shop/beauty/components/slider",
    component: _6af15c0f,
    name: "shop-beauty-components-slider"
  }, {
    path: "/shop/beauty/components/top-product-slider",
    component: _3ffc2bb6,
    name: "shop-beauty-components-top-product-slider"
  }, {
    path: "/shop/beauty/components/video-tutorial",
    component: _053f821e,
    name: "shop-beauty-components-video-tutorial"
  }, {
    path: "/shop/electronics-1/components/collection_banner",
    component: _7a817c60,
    name: "shop-electronics-1-components-collection_banner"
  }, {
    path: "/shop/electronics-1/components/product_tab",
    component: _466d9330,
    name: "shop-electronics-1-components-product_tab"
  }, {
    path: "/shop/electronics-1/components/slider",
    component: _0fd1f60e,
    name: "shop-electronics-1-components-slider"
  }, {
    path: "/shop/fashion-2/components/banner",
    component: _0219854a,
    name: "shop-fashion-2-components-banner"
  }, {
    path: "/shop/fashion-2/components/collection",
    component: _6021c04d,
    name: "shop-fashion-2-components-collection"
  }, {
    path: "/shop/fashion-2/components/collection-banner",
    component: _5db5345c,
    name: "shop-fashion-2-components-collection-banner"
  }, {
    path: "/shop/fashion-2/components/instagram",
    component: _fe31d75a,
    name: "shop-fashion-2-components-instagram"
  }, {
    path: "/shop/fashion-2/components/product",
    component: _0a57bd60,
    name: "shop-fashion-2-components-product"
  }, {
    path: "/shop/fashion-2/components/slider",
    component: _7e605490,
    name: "shop-fashion-2-components-slider"
  }, {
    path: "/shop/fashion-3/components/banner",
    component: _4924d69c,
    name: "shop-fashion-3-components-banner"
  }, {
    path: "/shop/fashion-3/components/product_slider",
    component: _2d2ff9be,
    name: "shop-fashion-3-components-product_slider"
  }, {
    path: "/shop/fashion-3/components/product_tab",
    component: _e5a6bef6,
    name: "shop-fashion-3-components-product_tab"
  }, {
    path: "/shop/fashion-3/components/slider",
    component: _6edc245e,
    name: "shop-fashion-3-components-slider"
  }, {
    path: "/shop/fashion/components/banner",
    component: _b6d0e914,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/bannerBottom",
    component: _789d55c1,
    name: "shop-fashion-components-bannerBottom"
  }, {
    path: "/shop/fashion/components/bannerGrops",
    component: _53b87ec1,
    name: "shop-fashion-components-bannerGrops"
  }, {
    path: "/shop/fashion/components/blog",
    component: _751b556c,
    name: "shop-fashion-components-blog"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _e348fdda,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/customBanner",
    component: _2a01e772,
    name: "shop-fashion-components-customBanner"
  }, {
    path: "/shop/fashion/components/Custome_slider",
    component: _2e070ad6,
    name: "shop-fashion-components-Custome_slider"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _6c444c58,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _d0922cca,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _132d3dfb,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_slider2",
    component: _52922ac7,
    name: "shop-fashion-components-product_slider2"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _254ae3eb,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/services",
    component: _0a220f28,
    name: "shop-fashion-components-services"
  }, {
    path: "/shop/fashion/components/slider",
    component: _2404a2ab,
    name: "shop-fashion-components-slider"
  }, {
    path: "/shop/fashion/components/Style",
    component: _4c79bc92,
    name: "shop-fashion-components-Style"
  }, {
    path: "/shop/flower/components/blog",
    component: _691adc2f,
    name: "shop-flower-components-blog"
  }, {
    path: "/shop/flower/components/category_tab",
    component: _55a0093e,
    name: "shop-flower-components-category_tab"
  }, {
    path: "/shop/flower/components/collection_banner",
    component: _74364f30,
    name: "shop-flower-components-collection_banner"
  }, {
    path: "/shop/flower/components/instagram",
    component: _15c98775,
    name: "shop-flower-components-instagram"
  }, {
    path: "/shop/flower/components/product_slider",
    component: _74316cfe,
    name: "shop-flower-components-product_slider"
  }, {
    path: "/shop/flower/components/services",
    component: _51aa7c6b,
    name: "shop-flower-components-services"
  }, {
    path: "/shop/flower/components/slider",
    component: _163d84ae,
    name: "shop-flower-components-slider"
  }, {
    path: "/shop/flower/components/top_products",
    component: _2435429b,
    name: "shop-flower-components-top_products"
  }, {
    path: "/shop/furniture/components/blog",
    component: _f7d23ab4,
    name: "shop-furniture-components-blog"
  }, {
    path: "/shop/furniture/components/category_tab",
    component: _8ad4ca50,
    name: "shop-furniture-components-category_tab"
  }, {
    path: "/shop/furniture/components/collection_banner",
    component: _438cc219,
    name: "shop-furniture-components-collection_banner"
  }, {
    path: "/shop/furniture/components/parallax_banner",
    component: _5cb3d280,
    name: "shop-furniture-components-parallax_banner"
  }, {
    path: "/shop/furniture/components/slider",
    component: _6251c965,
    name: "shop-furniture-components-slider"
  }, {
    path: "/shop/gym/components/blog",
    component: _51c37c22,
    name: "shop-gym-components-blog"
  }, {
    path: "/shop/gym/components/collection-banner",
    component: _15695084,
    name: "shop-gym-components-collection-banner"
  }, {
    path: "/shop/gym/components/instagram",
    component: _da808c96,
    name: "shop-gym-components-instagram"
  }, {
    path: "/shop/gym/components/logo-slider",
    component: _0f3cebf4,
    name: "shop-gym-components-logo-slider"
  }, {
    path: "/shop/gym/components/product-list",
    component: _4cf43309,
    name: "shop-gym-components-product-list"
  }, {
    path: "/shop/gym/components/slider",
    component: _10fe7a6e,
    name: "shop-gym-components-slider"
  }, {
    path: "/shop/gym/components/top-collection",
    component: _9f2687ba,
    name: "shop-gym-components-top-collection"
  }, {
    path: "/shop/jewellery/components/category",
    component: _77980953,
    name: "shop-jewellery-components-category"
  }, {
    path: "/shop/jewellery/components/instagram",
    component: _53a8602d,
    name: "shop-jewellery-components-instagram"
  }, {
    path: "/shop/jewellery/components/parallax-banner",
    component: _41e83e5d,
    name: "shop-jewellery-components-parallax-banner"
  }, {
    path: "/shop/jewellery/components/product-slider",
    component: _25ab44d8,
    name: "shop-jewellery-components-product-slider"
  }, {
    path: "/shop/jewellery/components/product-tab",
    component: _79fe92f2,
    name: "shop-jewellery-components-product-tab"
  }, {
    path: "/shop/jewellery/components/services",
    component: _74b1acb3,
    name: "shop-jewellery-components-services"
  }, {
    path: "/shop/jewellery/components/slider",
    component: _286426f6,
    name: "shop-jewellery-components-slider"
  }, {
    path: "/shop/kids/components/collection_banner",
    component: _112eb544,
    name: "shop-kids-components-collection_banner"
  }, {
    path: "/shop/kids/components/collection_slider",
    component: _76d5bc93,
    name: "shop-kids-components-collection_slider"
  }, {
    path: "/shop/kids/components/instagram",
    component: _6353eba3,
    name: "shop-kids-components-instagram"
  }, {
    path: "/shop/kids/components/logo_slider",
    component: _095be226,
    name: "shop-kids-components-logo_slider"
  }, {
    path: "/shop/kids/components/parallax_banner",
    component: _1e49c305,
    name: "shop-kids-components-parallax_banner"
  }, {
    path: "/shop/kids/components/product_slider",
    component: _00047590,
    name: "shop-kids-components-product_slider"
  }, {
    path: "/shop/kids/components/slider",
    component: _4f633f40,
    name: "shop-kids-components-slider"
  }, {
    path: "/shop/pets/components/blog",
    component: _1261baf0,
    name: "shop-pets-components-blog"
  }, {
    path: "/shop/pets/components/collection-banner",
    component: _3cd81076,
    name: "shop-pets-components-collection-banner"
  }, {
    path: "/shop/pets/components/logo-slider",
    component: _20ef0966,
    name: "shop-pets-components-logo-slider"
  }, {
    path: "/shop/pets/components/parallax-banner",
    component: _165170a8,
    name: "shop-pets-components-parallax-banner"
  }, {
    path: "/shop/pets/components/product-slider",
    component: _aec52336,
    name: "shop-pets-components-product-slider"
  }, {
    path: "/shop/pets/components/slider",
    component: _07f998c7,
    name: "shop-pets-components-slider"
  }, {
    path: "/shop/pets/components/top-collection",
    component: _0d34717c,
    name: "shop-pets-components-top-collection"
  }, {
    path: "/shop/shoes/components/about",
    component: _25e4b2fa,
    name: "shop-shoes-components-about"
  }, {
    path: "/shop/shoes/components/blog",
    component: _7c9ce2c8,
    name: "shop-shoes-components-blog"
  }, {
    path: "/shop/shoes/components/brand",
    component: _0dfa417d,
    name: "shop-shoes-components-brand"
  }, {
    path: "/shop/shoes/components/category",
    component: _447e8cf8,
    name: "shop-shoes-components-category"
  }, {
    path: "/shop/shoes/components/category2",
    component: _4b6abb6a,
    name: "shop-shoes-components-category2"
  }, {
    path: "/shop/shoes/components/category3",
    component: _4b78d2eb,
    name: "shop-shoes-components-category3"
  }, {
    path: "/shop/shoes/components/collectionbanner",
    component: _11d98744,
    name: "shop-shoes-components-collectionbanner"
  }, {
    path: "/shop/shoes/components/collectionslider",
    component: _dd72c30e,
    name: "shop-shoes-components-collectionslider"
  }, {
    path: "/shop/shoes/components/collectiontab",
    component: _0fe8f7a6,
    name: "shop-shoes-components-collectiontab"
  }, {
    path: "/shop/shoes/components/instagram",
    component: _23925128,
    name: "shop-shoes-components-instagram"
  }, {
    path: "/shop/shoes/components/productSlider",
    component: _d9f803b4,
    name: "shop-shoes-components-productSlider"
  }, {
    path: "/shop/shoes/components/service",
    component: _6d5a362b,
    name: "shop-shoes-components-service"
  }, {
    path: "/shop/shoes/components/slider",
    component: _b81d604a,
    name: "shop-shoes-components-slider"
  }, {
    path: "/shop/tools/components/about",
    component: _d8d77520,
    name: "shop-tools-components-about"
  }, {
    path: "/shop/tools/components/category",
    component: _1076eaeb,
    name: "shop-tools-components-category"
  }, {
    path: "/shop/tools/components/logo_slider",
    component: _215818d0,
    name: "shop-tools-components-logo_slider"
  }, {
    path: "/shop/tools/components/product-slider",
    component: _ab60a5a8,
    name: "shop-tools-components-product-slider"
  }, {
    path: "/shop/tools/components/product-tab-slider",
    component: _3a0a2e38,
    name: "shop-tools-components-product-tab-slider"
  }, {
    path: "/shop/tools/components/select-vehical",
    component: _1917b68c,
    name: "shop-tools-components-select-vehical"
  }, {
    path: "/shop/tools/components/service",
    component: _e6966450,
    name: "shop-tools-components-service"
  }, {
    path: "/shop/tools/components/slider",
    component: _6382e2e4,
    name: "shop-tools-components-slider"
  }, {
    path: "/shop/vegetables/components/banner",
    component: _55ab6c50,
    name: "shop-vegetables-components-banner"
  }, {
    path: "/shop/vegetables/components/blog",
    component: _1785a4c6,
    name: "shop-vegetables-components-blog"
  }, {
    path: "/shop/vegetables/components/product_slider",
    component: _24a7a4d5,
    name: "shop-vegetables-components-product_slider"
  }, {
    path: "/shop/vegetables/components/services",
    component: _747dbcfc,
    name: "shop-vegetables-components-services"
  }, {
    path: "/shop/vegetables/components/slider",
    component: _55cef8f6,
    name: "shop-vegetables-components-slider"
  }, {
    path: "/shop/vegetables/components/special_products",
    component: _5cc8814e,
    name: "shop-vegetables-components-special_products"
  }, {
    path: "/shop/watch/components/blog",
    component: _6c7c51fa,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _7e536c42,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _67ef92dd,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _00384d50,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _32323121,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _cc827fb8,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _614beed2,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _84202582,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _2dddcafc,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _2539f9c7,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _1bee296f,
    name: "shop-watch-components-top_products"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _875dac60,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _2d979ed4,
    name: "product-sidebar-id"
  }, {
    path: "/product/single/:id?",
    component: _fe152e98,
    name: "product-single-id"
  }, {
    path: "/service/:id",
    component: _6ea681e2,
    name: "service-id"
  }, {
    path: "/",
    component: _3117ee7e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
