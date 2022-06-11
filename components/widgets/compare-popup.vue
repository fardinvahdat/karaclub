<template>
  <div>
    <b-modal
      id="modal-compare"
      size="lg"
      centered
      title="مقایسه"
      :hide-footer="true"
      :hide-header="true"
      v-if="openCompare"
    >
      <div class="row compare-modal">
        <div class="col-lg-12">
          <button class="close" type="button" @click="closeCompare(openCompare)">
            <span>×</span>
          </button>
          <div class="media">
            <img
              :src="getImgUrl(productData.images[0].src)"
              class="img-fluid"
              :alt="productData.images[0].alt"
            />
            <div class="media-body align-self-center text-center">
              <h5 class="text-right" dir="rtl">
                <i class="fa fa-check"></i>آیتم
                <span>{{productData.title}}</span>
                <span>با موفقیت به لیست مقایسه اضافه شد</span>
              </h5>
              <div class="buttons d-flex justify-content-center">
                <nuxt-link
                to="/page/compare"
                 @click="closeCompare(openCompare)"
                  class="btn-sm btn-solid"
                >مشاهده لیست</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ['openCompare', 'productData'],
  methods: {
    // Get Image Url
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    closeCompare(val) {
      val = false
      this.$emit('closeCompare', val)
    }
  }
}
</script>
