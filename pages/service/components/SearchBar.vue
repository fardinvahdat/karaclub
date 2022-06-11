<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-11 mx-auto">
          <div class="d-flex search-bar flex-column flex-lg-row">
            <div class="logo col-lg-1 text-center">
              <img
                src="https://emway.ir/assets/images/image.jpg"
                height="60"
                width="60"
                alt=""
              />
            </div>
            <div class="col-lg-11 row align-items-center">
              <div class="state col-lg-2">
                <b-form-input
                  list="my-list-id-state"
                  v-model="selectedState"
                  @change="change"
                  placeholder="همه استان ها"
                ></b-form-input>

                <datalist id="my-list-id-state" class="w-100">
                  <option>همه استان ها</option>
                  <option v-for="(state, index) in stateInfo" :key="index">
                    {{ state.name }}
                  </option>
                </datalist>
              </div>
              <div class="cities col-lg-2">
                <b-form-input
                  list="my-list-id-city"
                  v-model="selectedCity"
                  placeholder="همه شهر ها"
                ></b-form-input>

                <datalist id="my-list-id-city">
                  <option>همه شهر ها</option>
                  <option
                    v-show="showCities"
                    v-for="(city, index) in list"
                    :key="index"
                  >
                    {{ city }}
                  </option>
                </datalist>
              </div>
              <div class="col-lg-3 category">
                <b-form-input
                  list="my-list-id-category"
                  v-model="selectedCategory"
                  placeholder="همه دسته بندی ها"
                ></b-form-input>

                <datalist id="my-list-id-category">
                  <option>همه دسته بندی ها</option>
                  <option v-for="(category, index) in categories" :key="index">
                    {{ category }}
                  </option>
                </datalist>
              </div>
              <div class="col-lg-3 search">
                <b-form-input
                  v-model="search"
                  placeholder="جستجو (نوع , عنوان و ....)"
                ></b-form-input>
              </div>
              <div class="col-lg-2 filter-btn">
                <button class="btn">
                  <span class="ti-search"></span>جستجو
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      stateInfo: [
        {
          name: "تهران",
          cities: ["تهران", "اسلام شهر", "شهر ری", "ورامین"],
        },
        {
          name: "البرز",
          cities: ["کرج", "فردیس", "ورامین", "چهارباغ"],
        },
        {
          name: "اصفهان",
          cities: ["اصفهان", "شهررضا", "اسلام آباد"],
        },
        {
          name: "فارس",
          cities: ["شیراز", "کازرون", "ممسنی"],
        },
      ],
      showCities: false,
      selectedState: "",
      selectedCity: "",
      selectedCategory: "",
      search: "",
      list: [],
      categories: ["آرایشی", "آموزشی", "ورزشی", "نوشیدنی"],
    };
  },
  methods: {
    change() {
      this.showCitiesa = true;
      this.stateInfo.map((item) => {
        if (this.selectedState == item.name) {
          this.list = item.cities;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.search-bar {
    background: #fff;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #dddddd;
  input {
    border-radius: 5px;
    outline: none;
    background: #fff;
    border: 1px solid #e3e3e3;
    height: 38px;
    padding: 7px 12px;
    color: #565656;
    transition: all 300ms linear;
    font-size: 14px;
  }
  .filter-btn {
    button {
      width: 100%;
      background: #00bf6f;
      color: #fff;
      border-radius: 30px;
    }
    span {
      font-size: 20px;
      position: relative;
      top: 4px;
      left: 2px;
    }
  }
}
@media screen and (max-width: 992px) {
  .state,
  .cities,
  .search,
  .filter-btn,
  .category {
    margin-top: 1rem;
  }
}
</style>