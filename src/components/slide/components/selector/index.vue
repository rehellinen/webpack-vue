<template lang="pug">
  div.selector-container
    div.img-container
      my-image.selector-img(src="/src/assets/images/slide/left.png" needActive @on-click="toChangeIndex(currentIndex - 1)")
      my-image.selector-img(src="/src/assets/images/slide/side.png" needActive :isActive="currentIndex === 0" @on-click="toChangeIndex(0)")
      my-image.selector-img(src="/src/assets/images/slide/side.png" needActive :isActive="currentIndex === 1" @on-click="toChangeIndex(1)")
      my-image.middle-img(src="/src/assets/images/slide/middle.png" needActive :isActive="currentIndex === 2" @on-click="toChangeIndex(2)")
      my-image.selector-img(src="/src/assets/images/slide/side.png" needActive :isActive="currentIndex === 3" @on-click="toChangeIndex(3)")
      my-image.selector-img(src="/src/assets/images/slide/side.png" needActive :isActive="currentIndex === 4" @on-click="toChangeIndex(4)")
      my-image.selector-img(src="/src/assets/images/slide/right.png" needActive @on-click="toChangeIndex(currentIndex + 1)")
</template>

<script>
import MyImage from '../../../image/index'

export default {
  components: {
    MyImage
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toChangeIndex (index) {
      if (index < 0) {
        index = 0
      }
      if (index > 4) {
        index = 4
      }
      this.$emit('on-index-changed', index)
    }
  }
}
</script>

<style scoped>
.selector-container {
  position: fixed;
  bottom: 4%;
  z-index: 100;
  width: 50%;
  margin-left: 25%;
}
.img-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.selector-img {
  width: 10%;
}
.middle-img {
  width: 20%
}
</style>
