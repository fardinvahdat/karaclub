<template>
  <div class="modal-overlay1" @click="$emit('close-modal')">
    <div class="modal-login" @click.stop>
      <!-- <img class="check" src="" alt="" /> -->
      <div class="wrapper">
        <div class="close" @click="$emit('close-modal')">
          <i class="ti-close"></i>
        </div>
        <h6 class="title">ورود یا ثبت نام</h6>
        <p class="description">
          لطفا برای ادامه شماره همراه خود را وارد نمایید.
        </p>
        <div class="input-box">
          <span class="input-icon icon-profile-input-login font-icon"></span
          ><span class="font-icon icon-delete-input clear ti-user"></span
          ><input
            type="tel"
            class="mobile-num-input"
            maxlength="11"
            placeholder="شماره همراه"
          />
        </div>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="true"
          unchecked-value="false"
        >
          شرایط و قوانین استفاده از سرویس های سایت کاراکلاب را می پذیرم .
        </b-form-checkbox>
        <button>ادامه</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    };
  },
};
</script>
<style lang="scss">
// .center-box {
//   opacity: 0.05;
//   pointer-events: none;
// }
.modal-overlay1 {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 999999;
  .modal-login {
    text-align: center;
    background-color: white;
    height: fit-content;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
    position: relative;
    display: block !important;
    @media screen and (max-width:992px){
        border-radius: 5px;
        padding: 30px 0;
    }
    .wrapper {
      width: 80%;
      margin: auto;
      .custom-checkbox {
        right: 0 !important;
      }
      .custom-control-label::before,
      .custom-control-label::after {
        right: 0 !important;
      }
      .custom-control-label {
        padding-right: 20px !important;
        color: #494c52;
        font-size: 12px;
        line-height: 2.14;
        font-weight: 100;
        margin-top: 1rem;
    @media screen and (max-width:992px){
        font-size: 11px;
    }
      }
    }
  }
  .close {
    margin-top: 1rem !important;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 0;
  }

  .close-img {
    width: 25px;
  }

  .check {
    width: 150px;
  }
  .close {
    margin: 10% 0 0 16px;
    cursor: pointer;
  }

  .close-img {
    width: 25px;
  }

  .check {
    width: 150px;
  }

  .title {
    font-weight: 100;
    font-size: 28px;
    margin: 20px 0;
    color: #000;
    @media screen and (max-width:992px){
        font-size: 20px;
    }
  }

  .description {
    font-size: 16px;
    color: #797979;
    margin: 30px auto 30px;
    @media screen and (max-width:992px){
        font-size: 11px;
    }
  }

  .input-box {
    width: 100%;
    margin: 0;
    position: relative;
    .ti-user {
      position: absolute;
      right: 15px;
      top: 17px;
      font-size: 22px;
    @media screen and (max-width:992px){
        font-size: 15px;
    }
    }
    input {
      width: 100%;
      line-height: 60px;
      height: 60px;
      border-radius: 12px;
      font-size: 16px;
      border: solid 1px #c5c7cb;
      color: #000;
      padding-right: 57px;
      -webkit-transition: 0.3s;
      -o-transition: 0.3s;
      transition: 0.3s;
    @media screen and (max-width:992px){
        height: 50px;
        line-height: 50px;
        padding-right: 40px;
    }
    }
  }

  button {
    width: 100%;
    line-height: 60px;
    border-radius: 12px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
    min-height: 60px;
    margin: auto;
    background: #00bf6f;
    border: none;
    color: #fff;
    margin-top: 2rem;
    @media screen and (max-width:992px){
        line-height: 50px;
        height: 50px;
        font-size: 14px;
    }
  }
}
</style>