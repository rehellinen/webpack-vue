<template lang="pug">
  div.wrapper
    my-slide(:imgSrcArr="slideImgSrcArr" v-if="reRenderer")
</template>

<script>
import MySlide from './components/slide/index'

export default {
  components: {
    MySlide
  },
  data () {
    return {
      reRenderer: true,
      slideImgSrcArr: [
        '/src/assets/images/stars/mohuan.jpg',
        '/src/assets/images/stars/gufeng.jpg',
        '/src/assets/images/stars/zhuxing.jpg',
        '/src/assets/images/stars/hefeng.jpg',
        '/src/assets/images/stars/zhanzheng.jpg'
      ]
    }
  },
  async mounted () {
    if (process.env.RUNTIME_ENV === 'mobile') {
      window.addEventListener('orientationchange', (event) => {
        console.log(event)
        this.reRenderer = false
        setTimeout(() => {
          this.reRenderer = true
        }, 100)
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  //height: 100vw;
  //width: 100vh;
  //transform: rotate(-90deg);
  //min-height: 100vh;
  //min-width: 100vw;
}
</style>
