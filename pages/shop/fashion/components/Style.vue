<template>
  <div class="styles">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="row">
            <div
              class="col-lg-2 col-4 item c-pointer"
              v-for="(item, index) in items"
              :key="index"
            >
              <img :src="item.src" alt="" />
              <p class="text-center mb-0 mt-3">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61c721612d2e9.png",
          desc: "ترند ها",
        },
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61c721612d2e9.png",
          desc: "ترند ها",
        },
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61c721612d2e9.png",
          desc: "ترند ها",
        },
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61c721612d2e9.png",
          desc: "ترند ها",
        },
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61c721612d2e9.png",
          desc: "ترند ها",
        },
        {
          src: "https://dl.epasazh.com/images/advertises/a-d-img-61c721612d2e9.png",
          desc: "ترند ها",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.styles {
  margin-top: 6rem;
  @media screen and (max-width: 992px) {
    margin-top: 2rem;
  }
  img {
    width: 100%;
    height: auto;
  }
  p {
    transition: all 0.3s;
    font-size: 16px;
    color: #000;
    @media screen and (max-width:992px){
        font-size: 10px;
    }
  }
  .item {
    position: relative;
    transition: 0.5s;
    &:hover {
      transform: scale(1.03);
      p{
          font-weight: 900;
      }
    }
  }
}
</style>