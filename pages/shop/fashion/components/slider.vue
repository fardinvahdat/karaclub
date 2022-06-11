<template>
  <div dir="ltr">
    <!-- <h2 class="title">{{ $t('home.title') }}</h2> -->
    <!-- <h2 class="subtitle">{{ $t('home.introduction') }}</h2> -->
    <!-- Home slider -->
    <section class="p-0">
      <div class="slide-1 home-slider container-fluid">
        <div v-swiper:mySwiper="swiperOption" class="col-md-11">
          <div class="swiper-wrapper">
            <div class="swiper-slide w-100" v-for="(item, index) in items" :key="index">
              <div
                class="home text-center"
                :class="item.alignclass"
                v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div>
                          <h4>{{ item.title }}</h4>
                          <h1>{{ item.subtitle }}</h1>
                          <!-- <nuxt-link :to="{ path: '/collection/leftsidebar/all'}" class="btn btn-solid">خرید کنید.</nuxt-link> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
    <!-- Home slider end -->
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView:1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/home-banner/1.jpg'),
          // title: 'به دنیای مد خوش آمدید',
          // subtitle: 'مد زنانه',
          // alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/2.jpg'),
          // title: 'به دنیای مد خوش آمدید',
          // subtitle: 'مد مردانه',
          // alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/3.jpg'),
          // title: 'به دنیای مد خوش آمدید',
          // subtitle: 'مد مردانه',
          // alignclass: 'p-left'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.swiper-slide{
  .home{
    border-radius: 30px;
  }
}
</style>
