<template>
  <div dir="rtl">
    <Header />
    <Breadcrumbs title="مقایسه" class="my-2"/>
    <section class="compare-padding p-0">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="compare-page" v-if="compare.length">
              <div class="table-wrapper table-responsive">
                <table class="table">
                  <thead>
                    <tr class="th-compare">
                      <td class="text-right">تنظیمات</td>
                      <th class="item-row text-right" v-for="(item,index) in compare" :key="index">
                        <button type="button" class="remove-compare" style="float:unset" @click="removeCompareItem(item)">×</button>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="table-compare">
                    <tr>
                      <th class="product-name text-right">نام محصول</th>
                      <td class="grid-link__title text-right" v-for="(item,index) in compare" :key="index">{{item.title}}</td>
                    </tr>
                    <tr>
                      <th class="product-name text-right">عکس محصول</th>
                      <td class="item-row text-right" v-for="(item,index) in compare" :key="index">
                        <img :src='getImgUrl(item.images[0].src)' alt="" class="featured-image">
                        <div class="product-price product_price">
                          <strong v-if="item.sale">فروش :</strong>
                          <span>{{ strReplace(String(item.price*1000)) }} تومان</span>
                        </div>
                        <form class="variants clearfix">
                          <button title="Add to Cart" class="add-to-cart btn btn-solid" @click="addToCart(item)">اضافه کردن به کارت</button>
                        </form>
                        <h4 class="grid-link__title hidden pt-2">{{item.title}}</h4>
                      </td>
                    </tr>
                    <tr>
                      <th class="product-name text-right">توضیح محصول</th>
                      <td class="item-row text-right" v-for="(item,index) in compare" :key="index">
                        <p
                          class="description-compare text-right"
                        >{{item.description}}</p>
                      </td>
                    </tr>
                    <tr>
                      <th class="product-name text-right">وضعیت</th>
                      <td class="available-stock text-right" v-for="(item,index) in compare" :key="index">
                        <p class="text-right">موجودی : 1</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="empty-cart-cls text-center" v-if="!compare.length">
              <img :src='"@/assets/images/empty-compare.png"' class="img-fluid" alt="empty cart" />
              <h3 class="mt-3">
                <strong>لیست مقایسه شما خالیست!</strong>
              </h3>
              <div class="col-12">
                <nuxt-link :to="{ path: '/'}" class="btn btn-solid">ادامه خرید</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../../../components/header/header3'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  computed: {
    ...mapGetters({
      compare: 'products/compareItems',
      curr: 'products/changeCurrency'
    })
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
      return require('@/assets/images/' + path)
    },
    removeCompareItem: function (product) {
      this.$store.dispatch('products/removeCompareItem', product)
    },
    addToCart: function (product) {
      this.$store.dispatch('cart/addToCart', product)
    }
  }
}
</script>
<style lang="scss" scoped>
.compare-page,.empty-cart-cls{
  background: #fff;
  padding: 10px;
}
</style>
