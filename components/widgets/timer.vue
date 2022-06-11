<template>
  <div class="text-right d-inline" style="float:left">
    <div class="timer">
      <p id="demo" class="d-inline" dir="ltr">
        <!-- <span class="text-center">
          <span class="timer-num">{{ days }}</span>
        </span> -->
        <span class="text-center">
          <span class="timer-num">{{ hours }}</span>
        </span>
        <span class="text-center">
          <span class="timer-num">{{ minutes }}</span>
        </span>
        <span class="text-center">
          <span class="timer-num">{{ seconds }}</span>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  props: ['date'],
  data() {
    return {
      timerdate: Math.trunc(new Date(this.date).getTime() / 1000),
      now: Math.trunc(new Date().getTime() / 1000)
    }
  },
  computed: {
    seconds() {
      return (this.timerdate - this.now) % 60
    },
    minutes() {
      return Math.trunc((this.timerdate - this.now) / 60) % 60
    },
    hours() {
      return Math.trunc((this.timerdate - this.now) / 60 / 60) % 24
    },
    days() {
      return Math.trunc((this.timerdate - this.now) / 60 / 60 / 24)
    }
  }
}
</script>
