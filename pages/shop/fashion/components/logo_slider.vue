<template>
  <div>
    <section class="section-b-space">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="slide-6 no-arrow">
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                    <div>
                      <div class="logo-block text-center">
                        <a href="#">
                          <img :src="item.imagepath" alt />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        loop: true,
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        freeMode: true,
        breakpoints: {
          1199: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 3
          },
          420: {
            slidesPerView: 2
          }
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/logos/1.png')
        },
        {
          imagepath: require('@/assets/images/logos/2.png')
        },
        {
          imagepath: require('@/assets/images/logos/3.png')
        },
        {
          imagepath: require('@/assets/images/logos/4.png')
        },
        {
          imagepath: require('@/assets/images/logos/5.png')
        },
        {
          imagepath: require('@/assets/images/logos/6.png')
        },
        {
          imagepath: require('@/assets/images/logos/7.png')
        },
        {
          imagepath: require('@/assets/images/logos/8.png')
        }
      ]
    }
  }
}
</script>
<style scoped>
.swiper-button-next,.swiper-button-prev{
  background-size: 40px;
  width:50px !important;
}
/* .swiper-button-next{
  background-image: url(@/assets/images/arrows/prev.png) !important;
}
.swiper-button-prev{
  background-image: url(@/assets/images/arrows/next.png) !important;
} */
</style>
