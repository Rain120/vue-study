<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
      v-for="(item, index) in lists"
      :key="index">
        <img :src="item" :alt="index">
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  data() {
    return {
      lists: [
        "https://img01.sogoucdn.com/app/a/100520024/e0309765b931712dc5c0c2672624aee7",
        "https://img04.sogoucdn.com/app/a/100520024/a4d0fc2631b34c692accae52f6d3be54",
        "https://img02.sogoucdn.com/app/a/100520024/27695b45311d307feadc2b7ebb0a0dc3",
        "https://img01.sogoucdn.com/app/a/100520024/09a018b2d189ac51fd02e9928360d615",
        "https://img02.sogoucdn.com/app/a/100520024/11f1aa6e7c9236ff2b0c6a4f40e16170",
        "https://img02.sogoucdn.com/app/a/100520020/78fbca6600610c48b9a0a17089499d2c"
      ]
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      autoplay:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      freeMode: true,
      loop: true,
      slidesPerView: 3,
      controller: true
    })
  }
}
</script>

<style scoped>
  .swiper-container {
    height: 300px;
  }
  .swiper-slide {
    width: 100%;
    height: 400px;
  }
</style>