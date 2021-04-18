<template lang="pug">
  div.selector-container
    div.img-container
      my-image.selector-img(src="/src/assets/images/slide/left.png" needActive @on-click="toChangeIndex(currentIndex - 1)")
      div.selector-img
        my-image(src="/src/assets/images/slide/side.png" needActive :isActive="currentIndex === 0" @on-click="toChangeIndex(0)")
        my-text.selector-text(text="科幻星")
      div.selector-img
        my-image(src="/src/assets/images/slide/side.png" needActive :isActive="currentIndex === 1" @on-click="toChangeIndex(1)")
        my-text.selector-text(text="古风星")
      my-image.middle-img(src="/src/assets/images/slide/middle.png" needActive :isActive="currentIndex === 2" @on-click="toChangeIndex(2)")
      div.selector-img
        my-image(src="/src/assets/images/slide/side.png" needActive :isActive="currentIndex === 3" @on-click="toChangeIndex(3)")
        my-text.selector-text(text="和风星")
      div.selector-img
        my-image(src="/src/assets/images/slide/side.png" needActive :isActive="currentIndex === 4" @on-click="toChangeIndex(4)")
        my-text.selector-text(text="玄幻星")
      my-image.selector-img(src="/src/assets/images/slide/right.png" needActive @on-click="toChangeIndex(currentIndex + 1)")
</template>

<script>
import MyImage from '../../../image/index'
import MyText from '../../../text/index'

export default {
  components: {
    MyImage,
    MyText
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
  width: 70%;
  margin-left: 15%;
}
.img-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.selector-img {
  width: 8%;
}
.selector-text {
  position: absolute;
  width: 10%;
  margin-left: -1%;
  margin-top: 5px;
}
.middle-img {
  width: 16%;
}
</style>
