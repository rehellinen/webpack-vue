<template lang="pug">
  div.slide-container(:style="imgStyle")
    top-right
    my-image(
      v-for="(src, index) in imgSrcArr"
      v-show="index === currentIndex"
      :key="src + index"
      :src="src"
    )
    my-image.cloud(v-if="isShowCloud" src="/src/assets/images/transition/cloud.webp")
    my-selector(:currentIndex="currentIndex" @on-index-changed="onIndexChanged")
    div(
      v-for="(configArr, index) in axisConfig"
      v-if="index === currentIndex"
      :key="index"
    )
      my-axis(
        v-for="(config, i) in configArr"
        :key="i"
        :top="config.top"
        :left="config.left"
        :text="config.text"
        :id="config.id"
      )
</template>

<script>
import MyImage from '../image'
import TopRight from '../topRight'
import MySelector from './components/selector'
import MyAxis from '../axis'
import axisConfig from '../../config/axis'

export default {
  components: {
    MyImage,
    MySelector,
    MyAxis,
    TopRight
  },
  props: {
    imgSrcArr: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      axisConfig,
      currentIndex: 2,
      isShowCloud: false,
      imgWidth: '0px',
      imgHeight: '0px'
    }
  },
  computed: {
    imgStyle () {
      const translateX = this.imgWidth === '100vw'
        ? 0
        : -(this.imgWidth.replace('px', '') - document.documentElement.clientWidth) / 2
      const translateY = this.imgHeight === '100vh'
        ? 0
        : -(this.imgHeight.replace('px', '') - document.documentElement.clientHeight) / 2

      return `
      height: ${this.imgHeight};
      width: ${this.imgWidth};
      transform: translate(${translateX}px, ${translateY}px);
    `
    }
  },
  watch: {
    currentIndex () {
      if (this.isShowCloud) {
        return
      }

      this.showCloud()
    }
  },
  mounted () {
    this.reComputedImgWidth()
    window.addEventListener('resize', () => {
      this.reComputedImgWidth()
    })
    this.showCloud()
  },
  methods: {
    showCloud () {
      this.isShowCloud = true
      setTimeout(() => {
        this.isShowCloud = false
      }, 1280)
    },
    onIndexChanged (index) {
      this.currentIndex = index
    },
    reComputedImgWidth () {
      const ratio = 16 / 9
      const bodyWidth = document.documentElement.clientWidth
      const bodyHeight = document.documentElement.clientHeight

      if (bodyWidth / bodyHeight > ratio) {
        this.imgWidth = '100vw'
        this.imgHeight = `${Math.ceil(bodyWidth / ratio)}px`
      } else {
        this.imgHeight = '100vh'
        this.imgWidth = `${Math.ceil(bodyHeight * ratio)}px`
      }
    }
  }
}
</script>

<style scoped>
.slide-container {
  min-height: 100vh;
  min-width: 100vw;
}
.cloud {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}
</style>
