<template lang="pug">
  div.modal(v-if="isActive")
    my-image.bg-img(src='/src/assets/images/modal/bg.png')
    my-image.close-img(src='/src/assets/images/modal/close.png' isSquare @on-click="onCloseClick")
</template>

<script>
import MyImage from '../image'

export default {
  components: {
    MyImage
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onCloseClick () {
      this.$emit('update:isActive', false)
    }
  }
}
</script>

<style scoped>
.modal {
  z-index: 9999;
  position: absolute;
  top: 10%;
  bottom: 30%;
  left: 5%;
  right: 5%;
}
.bg-img {
  position: absolute;
  width: 100%;
  height: 100%;
}
.close-img {
  position: absolute;
  cursor: pointer;
  right: -0.5%;
  top: -0.5%;
  width: 2%;
}
</style>
