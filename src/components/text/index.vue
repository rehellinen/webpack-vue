<template lang="pug">
  div.text-container(ref="textContainer" :style="textContainerStyle")
    my-image.image(:src="imgSrc")
    p.text {{text}}
</template>

<script>
import MyImage from '../image'

const TypeEnum = {
  SLIDE: 'slide',
  AXIS: 'axis'
}

export default {
  components: {
    MyImage
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: TypeEnum.SLIDE
    }
  },
  data () {
    return {
      TypeEnum,
      textContainerHeight: 0
    }
  },
  computed: {
    imgSrc () {
      return this.type === TypeEnum.SLIDE
        ? '/src/assets/images/slide/textBg.png'
        : '/src/assets/images/axis/textBg.png'
    },
    textContainerStyle () {
      return `height: ${this.textContainerHeight}px`
    }
  },
  mounted () {
    this.reComputedTextContainerHeight()
    setTimeout(() => {
      this.reComputedTextContainerHeight()
    }, 500)
    window.addEventListener('resize', () => {
      this.reComputedTextContainerHeight()
    })
  },
  methods: {
    reComputedTextContainerHeight () {
      const textContainer = this.$refs.textContainer
      const ratio = this.type === TypeEnum.SLIDE ? 3 : 3.3
      if (this.type === TypeEnum.AXIS) {
        console.log(Math.ceil(textContainer.clientWidth / ratio), textContainer.clientWidth)
      }
      this.textContainerHeight = Math.ceil(textContainer.clientWidth / ratio)
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
  position: relative;
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
