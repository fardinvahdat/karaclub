<template>
  <div class="card-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-11 mx-auto py-2">
          <div class="d-flex flex-wrap py-2 justify-content-center">
            <div
              class="col-lg-4 col-md-6 padding-mobile"
              v-for="(card, index) in cards"
              :key="index"
            >
              <nuxt-link :to="`/service/${card.id}`">
                <card :item="card" class="mb-2" />
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 text-center mx-auto">
            <button class="w-100 more-product-btn">
              <i class="ti-plus"></i> مشاهده بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  props: ["title", "icon"],
  data() {
    return {
      cards: [
        {
          imgUrl: "1.jpg",
          stars: 5,
          location: "خیابان بهشتی",
          title: "پیتزا شهر",
          discount: "17%",
          id: 1,
        },
        {
          imgUrl: "2.jpg",
          stars: 5,
          location: "بازار ",
          title: "ساندویچی نیکا",
          discount: "12%",
          id: 2,
        },
        {
          imgUrl: "3.jpg",
          // stars:5,
          location: "امانیه",
          title: "فست فود لوتوس",
          discount: "10%",
          id: 3,
        },
        {
          imgUrl: "1.jpg",
          stars: 5,
          location: "خیابان بهشتی",
          title: "پیتزا شهر",
          discount: "17%",
          id: 4,
        },
        {
          imgUrl: "2.jpg",
          stars: 5,
          location: "بازار ",
          title: "ساندویچی نیکا",
          discount: "12%",
          id: 5,
        },
        {
          imgUrl: "3.jpg",
          // stars:5,
          location: "امانیه",
          title: "فست فود لوتوس",
          discount: "10%",
          id: 6,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
  .padding-mobile {
    padding: 0;
  }
}
.more-product-btn {
  border: none;
  padding: 7px 12px;
  color: #fff;
  background-color: #00bf6f;
  border-radius: 25px;
  box-shadow: 0 2px 5px 0 #bdbdbd;
  &:hover {
    background-color: #0eac5c !important;
  }
  i {
    font-weight: 400;
    position: relative;
    top: 3px;
  }
}
</style>