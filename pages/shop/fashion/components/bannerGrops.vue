<template>
  <div class="groups-container">
    <!---->
    <div class="groups d-flex align-items-center justify-content-center">
      <nuxt-link
        to="/"
        v-for="(item, index) in items"
        :key="index"
        class="
          group
          align-items-center
          justify-content-center
          flex-column
          mx-lg-3
          mx-1
        "
        :class="index > 4 ? 'd-none d-lg-flex' : 'd-lg-flex'"
        ><img
          :alt="item.desc"
          class="img-fluid lazyLoad isLoaded"
          :src="item.src"
        />
        <div class="name mt-2">{{ item.desc }}</div></nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61b84b9aa5431.png",
          desc: "لباس زمستانه",
        },
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61b84b93b0c2f.png",
          desc: "انتو و رویه",
        },
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61b84b8dc1cd8.png",
          desc: "لباس مجلسی",
        },
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61b84b8519840.png",
          desc: "شلوار زنانه",
        },
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61b84b75dbbe5.png",
          desc: "شال و روسری",
        },
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61b84bbc45674.png",
          desc: "کفش زنانه",
        },
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61b84b894f9d9.png",
          desc: "لباس زیر",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.groups-container {
  padding: 20px 0 40px;
  .group {
    color: #000;
    color: initial;
    position: relative;
    &:hover:before {
      opacity: 1;
      img {
        transform: translateY(-3px);
      }
    }
    &:before {
      content: "";
      display: inline-block;
      width: 90%;
      height: 11px;
      background-color: rgba(0, 0, 0, 0.13);
      border-radius: 200px;
      filter: blur(10px);
      position: absolute;
      bottom: -33px;
      right: 0;
      left: 0;
      margin: auto;
      opacity: 0;
      transition: 0.5s;
      &:hover {
        opacity: 1;
      }
    }
    img {
      width: 100px;
      min-width: 100px;
      height: 100px;
      -o-object-fit: cover;
      object-fit: cover;
      transition: all 0.3s;
      opacity: 1;
      @media screen and (max-width:992px){
          width: 54px;
          min-width: 54px;
          height: 50px;
      }
    }
    .name {
      transition: all 0.3s;
      @media screen and (max-width:992px){
          font-size: 12px;
      }
    }
  }
}
.groups {
  @media screen and (max-width: 992px) {
    &:nth-child(6),
    &:nth-child(7) {
      display: none;
    }
  }
}
</style>