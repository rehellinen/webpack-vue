<template lang="pug">
  div.text-container(ref="textContainer" :style="textContainerStyle")
    my-image.image(src="/src/assets/images/slide/textBg.png")
    p.text {{text}}
</template>

<script>
import MyImage from '../image'

export default {
  components: {
    MyImage
  },
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      textContainerHeight: 0
    }
  },
  computed: {
    textContainerStyle () {
      return `height: ${this.textContainerHeight}px`
    }
  },
  mounted () {
    this.reComputedTextContainerHeight()
  },
  methods: {
    reComputedTextContainerHeight () {
      const textContainer = this.$refs.textContainer
      this.textContainerHeight = Math.ceil(textContainer.clientWidth / 3)
    }
  }
}
</script>

<style scoped>
.text-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  width: 100%;
  height: 100%;
  position: absolute;
}
.text {
  position: absolute;
  color: white;
  font-size: 8px;
  transform: scale(0.7)
}
</style>
