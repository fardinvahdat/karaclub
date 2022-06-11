<template>
  <div class="card-wrapper">
    <div class="img-section">
      <div class="header">
        <img
          :src="require(`../../../assets/images/service/${item.imgUrl}`)"
          alt=""
          class="w-100"
        />
        <div class="d-flex justify-content-between desc w-100">
          <div class="location" v-show="item.location">
            <i class="ti-location-pin"></i><span>{{ item.location }}</span>
          </div>
          <div class="stars" v-show="item.stars">
            <i
              class="fa fa-star"
              v-for="(star, index) in item.stars"
              :key="index"
            ></i>
          </div>
        </div>
      </div>
      <h1><i class="fas fa-utensils"></i>{{ item.title }}</h1>
      <div class="more-info d-flex justify-content-between">
        <div class="discount">{{ item.discount }} پس انداز</div>
        <b>پس انداز از کلیه خدمات</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped lang="scss">
.card-wrapper {
  padding: 5px;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgb(189, 189, 189);
  .header {
    position: relative;
    img {
      border-radius: 5px;
    }
    .desc {
      position: absolute;
      bottom: 1rem;
      .stars,
      .location {
        font-size: 14px;
        background: #fff;
        margin: 0 5px;
        padding: 2px 7px;
        border-radius: 15px;
        @media screen and (max-width: 768px) {
          font-size: 12px;
          font-weight: 100;
        }
      }
      .stars {
        i {
          font-size: 17px !important;
          color: orange;
          @media screen and (max-width: 768px) {
            font-size: 15px !important;
            font-weight: 100;
          }
        }
      }
    }
  }
  h1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 16px;
    text-align: right;
    margin: 10px 0;
    padding-bottom: 10px;
    @media screen and (max-width:991px){
        font-size: 14px;
    }
  }
  .more-info {
    .discount {
      font-size: 14px;
      padding: 7px;
      background: #00bf6f;
      color: #fff;
      border-radius: 15px;
      @media screen and (max-width: 1024px) {
        font-size: 12px;
        font-weight: 100;
      }
      @media screen and (max-width: 768px) {
        font-size: 10px;
        font-weight: 100;
      }
    }
    b {
      font-size: 16px;
      line-height: 20px;
      color: #00bf6f;
      @media screen and (max-width: 1024px) {
        font-size: 14px;
        font-weight: 100;
      }
      @media screen and (max-width: 768px) {
        font-size: 12px;
        font-weight: 100;
      }
    }
  }
}
</style>