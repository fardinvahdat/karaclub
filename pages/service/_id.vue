<template>
  <div class="single-service" dir="rtl">
    <header-1 />
    <breadcrumbs title="خدمات" class="my-2" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-11 mx-auto">
          <div
            style="
              background: #fff;
              border: 1px solid #dddddd;
              border-radius: 5px;
            "
          >
            <header class="d-flex align-items-center px-3 py-3 flex-wrap">
              <div class="col-md-1 d-none d-md-block icon">
                <i class="ti-map-alt"></i>
              </div>
              <div class="head col-md-9">
                <h1>{{ itemValue.title }}</h1>
                <h3>{{ itemValue.location }}</h3>
              </div>
              <div class="btn-section col-md-2">
                <button>همه طرف قرارداد ها<i class="ti-angle-left"></i></button>
              </div>
            </header>
            <hr />
            <div class="banner p-3 row">
              <div class="col-md-8 mx-auto">
                <img
                  :src="
                    require(`../../assets/images/service/${itemValue.imgUrl}`)
                  "
                  alt=""
                  class="w-100"
                />
              </div>
            </div>
            <div class="caption p-3">
              <h4 class="text-right">{{ itemValue.discount }} پس انداز</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-3 info">
        <div class="col-lg-11">
          <div class="d-flex info-wrapper flex-wrap">
            <div class="col-md-6 text-right">
              <div class="name-sec">
                <h1 class="name m-0 pb-0">
                  <i class="ti-home"></i> {{ itemValue.title }}
                </h1>
                <hr style="width: 60%" class="mb-1 mr-0" />
                <p class="desc-all">انواع پیتزا ، برگر ، ساندویچ و ..</p>
              </div>
              <ul class="fa-ul p-0">
                <li
                  v-for="(i, index) in feature"
                  :key="index"
                  class="d-block my-3"
                >
                  <span class=""><i class="fa fa-circle"></i></span>
                  {{ i }}
                </li>
              </ul>
            </div>
            <div class="col-md-6 text-right">
              <div class="name-sec">
                <h1 class="name m-0 pb-0">
                  <i class="ti-info-alt"></i> شرایط استفاده
                </h1>
                <hr style="width: 60%" class="mb-1 mr-0" />
              </div>
              <ul class="fa-ul p-0">
                <li
                  v-for="(i, index) in info"
                  :key="index"
                  class="d-block my-3"
                >
                  <span class=""><i class="fa fa-circle"></i></span>
                  {{ i }}
                </li>
              </ul>
              <div class="contact-form">
                <p class="response-time">
                  <b><i class="ti-time"></i> ساعت پاسخ دهی</b> :
                  {{ contactInfo.response }}
                </p>
                <p class="response-days">
                  <b><i class="ti-calendar"></i> روز های سرویس دهی</b> :
                  {{ contactInfo.days }}
                </p>
                <p class="address">
                  <b><i class="ti-location-pin"></i> آدرس</b> :
                  {{ itemValue.location }}
                </p>
                <p class="phone">
                  <b><i class="ti-headphone-alt"></i> تلفن</b> :
                  {{ contactInfo.phone }}
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54528.64142281401!2d48.667033599999996!3d31.33026595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1653751935954!5m2!1sen!2s"
                style="border: 0; width: 100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-3 comments">
        <div class="col-lg-11">
          <form method="post" class="theme-form">
            <!---->
            <div class="form-row">
              <div class="col-md-6 text-right mb-4">
                <label for="fname">نام</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="نام"
                  name="fname"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-md-6 text-right mb-4">
                <label for="lname">نام خانوادگی</label>
                <input
                  type="text"
                  id="lname"
                  placeholder="نام خانوادگی"
                  name="lname"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-md-6 text-right mb-4">
                <label for="phone">شماره موبایل</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="شماره خود را وارد کنید"
                  name="phone"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-md-6 text-right mb-4">
                <label for="email">ایمیل</label>
                <input
                  type="text"
                  id="email"
                  placeholder="ایمیل"
                  name="email"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-md-12 text-right mb-4">
                <label for="message">پیام</label>
                <textarea
                  placeholder="پیام خود را بنویسید"
                  id="message"
                  name="message"
                  rows="6"
                  class="form-control"
                ></textarea>
              </div>
              <div class="col-md-12 text-right mb-4">
                <input type="submit" value="فرستادن" class="btn btn-solid" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer-1 />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer1 from "../../components/footer/footer1.vue";
import header1 from "../../components/header/header3.vue";
import Breadcrumbs from "../../components/widgets/breadcrumbs.vue";
export default {
  components: { header1, Breadcrumbs, Footer1 },
  data() {
    return {
      itemValue: null,
      feature: [
        "مشتری مداری عالی",
        "پیتزا و ساندویچ",
        " سیب زمینی سرخ شده",
        "سالاد و نوشیدنی",
        "بیرون بر و دارای لژ خانوادگی",
      ],
      info: [
        "پیک رایگان",
        "هنگام استفاده از خدمات باشگاه مشتریان ام وی همراه داشتن کارت بانکی رجیستر شده در شبکه ام وی الزامی می باشد.",
        "ارایه خدمات به مشتریان ام وی فقط با دستگاه کارت خوان باشگاه مشتریان ام وی انجام می شود.",
      ],
      contactInfo: {
        response: "11 قبل از ظهر تا 11 بعد از ظهر",
        days: "هر روز",
        phone: "04143240608",
      },
    };
  },
  beforeMount() {
    // this.cardInfo();
    window.onload = this.cardInfo();
  },
  methods: {
    cardInfo() {
      this.service.cards.map((item) => {
        if (item.id == this.$route.params.id) {
          this.itemValue = item;
        }
      });
      console.log(this.itemValue);
    },
  },
  computed: {
    ...mapState(["service"]),
  },
};
</script>

<style scoped lang="scss">
.single-service {
  .icon {
    i {
      font-size: 23px;
      color: #00bf6f;
      font-weight: 600;
    }
  }
  .head {
    h1 {
      font-size: 21px;
      line-height: 25px;
      color: #505458;
      text-align: right;
      @media screen and (max-width: 768px) {
        font-size: 15px;
      }
    }
    h3 {
      font-size: 16px;
      color: #797979;
      text-align: right;
      @media screen and (max-width: 768px) {
        font-size: 11px;
      }
    }
  }
  .btn-section {
    button {
      background: #00bf6f;
      font-size: 14px;
      border: none;
      border-radius: 2rem;
      padding: 6px 18px;
      color: #fff;
      width: 100%;
      @media screen and (min-width: 992px) and (max-width: 1440px) {
        background: #00bf6f;
        font-size: 12px;
        border: none;
        border-radius: 2rem;
        padding: 6px 8px;
        color: #fff;
        width: 100%;
      }
      @media screen and (max-width: 991px) {
        background: #00bf6f;
        font-size: 10px;
        border: none;
        border-radius: 2rem;
        padding: 6px 6px;
        color: #fff;
        width: 100%;
      }
    }
  }
  .banner {
    img {
      border-radius: 5px;
      height: auto !important;
      object-fit: cover;
    }
  }
  .caption {
    h4 {
      color: #00bf6f;
      font-size: 18px;
      line-height: 20px;
      padding-right: 3rem;
      margin: 1rem 0;
      @media screen and (max-width: 768px) {
        font-size: 12px;
        padding: 0;
        margin: 0.5rem;
      }
    }
  }
}
.info {
  .name {
    font-size: 21px;
    line-height: 25px;
    color: #505458;
    padding: 1rem;
    @media screen and (max-width: 600px) {
      font-size: 16px;
      font-weight: 100;
      padding: 0;
    }
    i {
      color: #00bf6f;
      font-weight: 400;
    }
  }
  .info-wrapper {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 5px;
    .name-sec {
      background: #fff;
      .desc-all {
        color: #797979;
        font-weight: 100;
        font-size: 16px;
        text-align: right;
        line-height: 24px;
        padding: 0 1rem;
        margin-bottom: 2rem;
        @media screen and (max-width: 600px) {
          font-size: 13px;
          font-weight: 100;
          padding: 0;
        }
      }
    }
    .fa-ul {
      @media screen and (max-width: 600px) {
        margin: 0;
        padding: 0;
        margin-bottom: 3rem;
      }
      li {
        color: #505458;
        font-weight: 100;
        font-size: 16px;
        line-height: 20px;
        @media screen and (max-width: 600px) {
          font-size: 12px;
        }
        i {
          color: #00bf6f;
        }
      }
    }
  }
}
.contact-form {
  padding: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 0 8px 0px #a2a2a2;
  @media screen and (max-width: 600px) {
    padding: 5px !important;
  }
  p {
    font-weight: 100;
    font-size: 16px;
    line-height: 20px;
    color: #505458;
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
    b {
      font-weight: 600;
    }
  }
}
.map {
  height: 450px;
  @media screen and (max-width: 600px) {
    height: 250px;
  }
}
.comments {
  .theme-form {
    padding: 2rem;
    background: #fff;
    border-radius: 5px;
    border: 1px solid rgb(221, 221, 221);
    label{
        @media screen and (max-width:600px){
            font-size: 12px;
        }
    }
    input{
        @media screen and (max-width:600px){
            font-size: 12px;
            :placeholder{
                font-size: 12px;
            }
        }
    }
    textarea{
        @media screen and (max-width:600px){
            font-size: 12px;
            :placeholder{
                font-size: 12px;
            }
        }
    }
  }
}
</style>