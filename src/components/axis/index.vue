<template lang="pug">
  div.axis(:style="axisContainerStyle")
    div()
      my-image(src='/src/assets/images/axis/icon@unactive.png')
      my-text(:src="text")
</template>

<script>
import MyImage from '../image/index'
import MyText from '../text/index'

export default {
  components: {
    MyImage,
    MyText
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
  computed: {
    axisContainerStyle () {
      return `top: ${this.top}; left: ${this.left}`
    }
  }
}
</script>

<style scoped>
.axis {
  position: fixed;
}
</style>
