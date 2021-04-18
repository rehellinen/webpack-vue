<template lang="pug">
  div
    my-modal(:isActive.sync="isModalActive")
    div.axis(:style="axisContainerStyle" @mouseover="onMouseover" @mouseout="onMouseout" @click="toOpenModal")
      div(v-show="!isActive")
        my-image.axis-image(src='/src/assets/images/axis/icon@unactive.png')
        my-text.axis-text(:text="text" type="axis")
      div(v-show="isActive")
        my-image.axis-image-active(src='/src/assets/images/axis/icon@active.png')
</template>

<script>
import MyImage from '../image/index'
import MyText from '../text/index'
import MyModal from '../modal/index'

export default {
  components: {
    MyImage,
    MyText,
    MyModal
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: '0'
    },
    left: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
      isActive: false,
      isModalActive: false
    }
  },
  computed: {
    axisContainerStyle () {
      return `top: ${this.top}; left: ${this.left}`
    }
  },
  methods: {
    toOpenModal () {
      this.isModalActive = true
    },
    onMouseover () {
      this.isActive = true
    },
    onMouseout () {
      this.isActive = false
    }
  }
}
</script>

<style scoped>
.axis {
  position: fixed;
  width: 50px;
  cursor: pointer;
}
.axis-image {
  width: 50%;
  margin-left: 30%;
}
.axis-image-active {
  width: 100%;
}
.axis-text {
  width: 100%;
}
</style>
