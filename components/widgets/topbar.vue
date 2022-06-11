<template>
  <div class="top-header d-lg-none d-block">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact">
            <ul>
              <li>Welcome to Our store Multikart</li>
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>Call Us: 123 - 456 - 7890
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 text-right">
          <ul class="header-dropdown">
            <li class="mobile-wishlist text-center">
              <nuxt-link :to="{ path: '/page/wishlist' }">
                <i class="fa fa-heart" aria-hidden="true"></i>
            <p class="text-center m-0">علاقمندی‌ها</p>
              <span class="cart_qty_cls cart_qty_cls-wishlist">{{ wishlist.length }}</span>

              </nuxt-link>
            </li>
            <li class="onhover-dropdown mobile-account text-center" @click="$emit('open-modal')">
              <i class="fa fa-user" aria-hidden="true"></i> 
            <p class="text-center m-0">پروفایل</p>
              <!-- <ul class="onhover-show-div">
                <li>
                  <a v-if="isLogin" @click="logout"> Logout </a>
                  <nuxt-link v-if="!isLogin" :to="{ path: '/page/account/login-firebase' }">Login</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/page/account/dashboard' }">Dashboard</nuxt-link>
                </li>
              </ul> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import UserAuth from '../../pages/page/account/auth/auth'
export default {
  data() {
    return {
      isLogin: false
    }
  },
  created() {
    if (process.client) {
      this.isLogin = localStorage.getItem('userlogin')
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        UserAuth.Logout()
        this.$router.replace('/page/account/login-firebase')
      })
    }
  },
  computed:{
    ...mapGetters({
      wishlist: 'products/wishlistItems',
    })
  }
}
</script>
<style lang="scss" scoped>
.mobile-wishlist,.mobile-account{
  width: 20%;
  i{
    font-size: 30px !important;
    color: rgb(0, 0, 0) !important;
  }
  p{
    font-size: 9px;
    color: rgb(0, 0, 0);
    font-weight: 700;
  }
}
.cart_qty_cls-wishlist{
  right: 10px;
}
</style>
