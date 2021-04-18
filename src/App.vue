<template lang="pug">
  div
    my-slide(:imgSrcArr="slideImgSrcArr")
</template>

<script>
import MySlide from './components/slide/index'

export default {
  components: {
    MySlide
  },
  data () {
    return {
      slideImgSrcArr: [
        '/src/assets/images/stars/mohuan.jpg',
        '/src/assets/images/stars/gufeng.jpg',
        '/src/assets/images/stars/zhuxing.jpg',
        '/src/assets/images/stars/hefeng.jpg',
        '/src/assets/images/stars/zhanzheng.jpg'
      ]
    }
  }
}
</script>

<style>
</style>
