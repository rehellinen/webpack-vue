<template lang="pug">
  div.slide-container
    my-image(
      v-for="(src, index) in imgSrcArr"
      v-show="index === currentIndex"
      :key="src + index"
      :src="src"
    )
    my-image.cloud(v-if="isShowCloud" src="/src/assets/images/transition/cloud.webp")
    my-selector(:currentIndex="currentIndex" @on-index-changed="onIndexChanged")
</template>

<script>
import MyImage from '../image/index'
import MySelector from './components/selector/index'

export default {
  components: {
    MyImage,
    MySelector
  },
  props: {
    imgSrcArr: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentIndex: 0,
      isShowCloud: false
    }
  },
  watch: {
    currentIndex () {
      if (this.isShowCloud) {
        return
      }

      this.isShowCloud = true
      setTimeout(() => {
        this.isShowCloud = false
      }, 1280)
    }
  },
  methods: {
    onIndexChanged (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.slide-container {
  width: 100%;
  height: 100%;
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
