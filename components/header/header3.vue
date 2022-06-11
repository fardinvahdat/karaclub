<template>
  <!-- header start -->
  <header>
    <div class="mobile-fix-option"></div>
    <TopBar @open-modal="showModal = true" />
    <Modal v-show="showModal" @close-modal="showModal = false" />
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div
            class="
              main-menu
              d-lg-flex
              justify-content-between
              main-header
              d-none
              py-3
            "
          >
            <div class="right-box d-flex align-items-center col-md-3">
              <nuxt-link to="/cart"
                ><i class="ti-shopping-cart" style="color: initial"></i
              ></nuxt-link>

              <!-- <b-button v-b-modal.modal-1 class="btn btn-solid mr-2"
                >ورود / ثبت نام</b-button
              >
              <b-modal id="modal-1">
                <template #modal-title>1</template>
                <template #close
                  ><i
                    class="ti-close"
                    @click="$bvModal.hide('bv-modal-example')"
                  >
                  </i
                ></template>

                <h6 class="my-4 text-center title">ورود یا ثبت نام</h6>
              </b-modal> -->
              <div class="save-btn">
                <button @click="showModal = true" class="btn btn-solid mr-2">
                  ورود / ثبت نام
                </button>
              </div>
              <Modal v-show="showModal" @close-modal="showModal = false" />
            </div>
            <div class="center-box col-md-6">
              <input
                type="text"
                placeholder="جستجو در میان تمام آیتم های موجود..."
                class="w-100"
              />
              <i class="ti-search"></i>
            </div>
            <div class="col-md-3 left-box">
              <nuxt-link to="/">
                <img :src="'@/assets/images/icon/logo.png'" alt="logo" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid layout3-menu">
      <div class="row">
        <div class="col-sm-12 padding-mobile">
          <div
            class="main-menu justify-content-start justify-content-xl-center"
          >
            <div class="menu-left around-border">
              <div class="navbar d-none">
                <a @click="left_sidebar">
                  <i class="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                </a>
                <LeftSidebar
                  :leftSidebarVal="leftSidebarVal"
                  @closeVal="closeBarValFromChild"
                />
              </div>
              <div class="main-menu-right">
                <Nav />
              </div>
            </div>
            <div class="absolute-logo d-none">
              <div class="brand-logo">
                <nuxt-link to="/"
                  ><img
                    alt=""
                    :src="'@/assets/images/icon/logo.png'"
                    height="75"
                /></nuxt-link>
              </div>
            </div>
            <div class="d-block d-lg-none" style="width: 1px">
              <div class="menu-right pull-right">
                <HeaderWidgets />
              </div>
            </div>
            <!-- <div class="d-block d-lg-none w-100">
              <input type="text" class="w-100">
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- header end -->
</template>

<script>
import TopBar from "../widgets/topbar";
import LeftSidebar from "../widgets/left-sidebar";
import Nav from "../widgets/navbar";
import HeaderWidgets from "../widgets/header-widgets";
import Modal from "../widgets/Modal.vue";
export default {
  data() {
    return {
      leftSidebarVal: false,
      showModal: false,
    };
  },
  components: {
    TopBar,
    LeftSidebar,
    Nav,
    HeaderWidgets,
    Modal,
  },
  methods: {
    left_sidebar() {
      this.leftSidebarVal = true;
    },
    closeBarValFromChild(val) {
      this.leftSidebarVal = val;
    },
  },
};
</script>
<style scoped lang="scss">
.main-header .right-box button {
  line-height: 44px;
  border-radius: 28px;
  border: 1px solid #00bf6f;
  font-size: 0.8rem;
  padding: 0 24px;
  border: none;
}
.main-header .right-box i {
  font-size: 25px;
}
.main-header .center-box {
  position: relative;
}
.main-header .center-box i {
  position: absolute;
  right: 32px;
  font-size: 25px;
  top: 12px;
}
.main-header .center-box input {
  line-height: 50px;
  height: 50px;
  border-radius: 28px;
  background-color: #f5f5f5;
  border: none;
  padding-right: 50px;
  position: relative;
  outline: none;
}
@media screen and (max-width: 1199px) {
  .padding-mobile {
    /* padding: 0; */
  }
}
#mainnav .toggle-nav i {
  font-size: 40px;
  margin: 15px;
}
.modal-header {
  border: none !important;
  .close {
    display: none;
  }
}
.modal-content {
  background: none !important;
  border-radius: 16px;
  position: relative;
}
.modal-body {
  .title {
    font-size: 21px;
    font-weight: 100;
    color: #000;
  }
  .ti-close {
    position: absolute;
    top: -30px;
    right: 2px;
    font-size: 25px;
    color: #b1b1b1;
  }
}
</style>
