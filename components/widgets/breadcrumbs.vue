<template>
  <div dir="ltr">
    <div class="breadcrumb-section">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!-- <div class="col-sm-6">
            <div class="page-title">
              <h2>{{ title }}</h2>
            </div>
          </div> -->
          <div class="col-lg-11">
            <nav aria-label="breadcrumb" class="theme-breadcrumb">
              <ol class="breadcrumb justify-content-end">
                <li class="breadcrumb-item active" v-if="title">
                  <nuxt-link to="/">{{ title }}</nuxt-link>
                </li>
                <li class="breadcrumb-item">
                  <nuxt-link :to="{ path: '/' }"
                    ><i class="ti-home ml-1"></i
                  ></nuxt-link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style lang="scss" scoped>
.breadcrumb-section {
  background: none !important;
}
.breadcrumb {
  padding: 5px 0;
  border: 1px solid #dddddd;
  background: #fff;
}
.breadcrumb-item {
  // a{
  //   color: rgb(0, 89, 255);
  // }
  i {
    font-weight: 400;
    font-size: 14px;
    // color: rgb(0, 89, 255);
  }
  &:before {
    content: "" !important;
  }
  // .ti-angle-left{
  //   font-size: 11px;
  //   font-weight: 900;
  //   margin-right: 3px;
  //   // color: #000;
  // }
  a {
    display: block;
    float: left;
    background: #f5f5f5;
    text-align: center;
    padding: 6px 21px 7px 15px;
    position: relative;
    margin: 0 3px 0 0;
    font-size: 12px;
    text-decoration: none;
    color: #728496;
    transition: all 0.3s;
    &:after {
      content: "";
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-left: 9px solid #f5f5f5;
      position: absolute;
      left: -9px;
      top: 0;
      z-index: 1;
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transition: all 0.3s;
    }
  }

  &:nth-child(2) a {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
}
.active a:before {
  content: "";
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 9px solid #fff;
  position: absolute;
  right: 0;
  top: 0;
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}
</style>
