<template>
  <div dir="rtl">
    <Header />
    <Breadcrumbs title="ارتباط با ما" class="my-2" />
    <section class="contact-page section-b-space p-0">
      <div class="container-fluid">
        <div class="row section-b-space p-0">
          <div class="col-lg-5">
            <div class="contact-right">
              <ul class="p-0">
                <li>
                  <div class="contact-icon">
                    <img :src="phoneimage" alt="Generic placeholder image" />
                    <h6>ارتباط با ما</h6>
                  </div>
                  <div class="media-body">
                    <p dir="ltr">{{phone1}}</p>
                    <p dir="ltr">{{phone2}}</p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <h6>آدرس</h6>
                  </div>
                  <div class="media-body">
                    <p v-html="address"></p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <img :src="emailimage" alt="Generic placeholder image" />
                    <h6>ایمیل</h6>
                  </div>
                  <div class="media-body">
                    <p>{{email1}}</p>
                    <p>{{email2}}</p>
                  </div>
                </li>
                <!-- <li>
                  <div class="contact-icon">
                    <i class="fa fa-fax" aria-hidden="true"></i>
                    <h6>Fax</h6>
                  </div>
                  <div class="media-body">
                    <p>{{email1}}</p>
                    <p>{{email2}}</p>
                  </div>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="col-lg-7 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <form class="theme-form" @submit="checkForm" method="post">
              <div v-if="errors.length">
                  <ul class="validation-error mb-3">
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                  </ul>
                </div>
              <div class="form-row">
                <div class="col-md-6 text-right">
                  <label for="fname">نام</label>
                  <input
                    type="text"
                    class="form-control"
                      id="fname"
                      v-model="fname"
                      placeholder="نام"
                      name="fname"
                    required
                  />
                </div>
                <div class="col-md-6 text-right">
                  <label for="lname">نام خانوادگی</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lname"
                      v-model="lname"
                      placeholder="نام خانوادگی"
                      name="lname"
                      required
                    />
                </div>
                <div class="col-md-6 text-right">
                  <label for="phone">شماره موبایل</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    v-model="phone"
                    placeholder="شماره خود را وارد کنید"
                    name="phone"
                    required
                  />
                </div>
                <div class="col-md-6 text-right">
                  <label for="email">ایمیل</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    v-model="email"
                    placeholder="ایمیل"
                    name="email"
                    required
                  />
                </div>
                <div class="col-md-12 text-right">
                  <label for="message">پیام</label>
                  <textarea
                    class="form-control"
                    placeholder="پیام خود را بنویسید"
                    id="message"
                    v-model="message"
                    name="message"
                    rows="6"
                  ></textarea>
                </div>
                <div class="col-md-12 text-right">
                  <input
                  type="submit"
                  class="btn btn-solid"
                  value="فرستادن"
                >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/header/header3'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      phoneimage: require('@/assets/images/icon/phone.png'),
      emailimage: require('@/assets/images/icon/email.png'),
      phone1: '+98 911 - 444 - 2222',
      phone2: '+98 911 - 444 - 2222',
      address: 'تهران میدان ولیعصر',
      email1: 'Support@Karaclub.com',
      email2: 'info@Karaclub.com',
      errors: [],
      fname: null,
      lname: null,
      email: null,
      phone: null,
      message: null
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = []
      if (!this.fname) {
        this.errors.push('وارد کردن نام الزامی است!')
      }
      if (!this.lname) {
        this.errors.push('وارد کردن نام خانوادگی الزامی است!')
      }
      if (!this.email) {
        this.errors.push('وارد کردن ایمیل الزامی است!')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('ایمیل وارد شده معتبر نمیباشد!')
      }
      if (!this.phone) {
        this.errors.push('وارد کردن شماره موبایل الزامی است!')
      }
      if (!this.message) {
        this.errors.push('وارد کردن پیام الزامی است!')
      }
      if (!this.errors.length) return true
      e.preventDefault()
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
