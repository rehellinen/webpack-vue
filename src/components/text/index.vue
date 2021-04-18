<template lang="pug">
  div.text-container(ref="textContainer" :style="textContainerStyle")
    my-image.image(:src="imgSrc")
    p.text(:class="{ 'mobile-text': (RUNTIME_ENV === 'mobile' || type === TypeEnum.AXIS)  }") {{text}}
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
      RUNTIME_ENV: process.env.RUNTIME_ENV,
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
    window.addEventListener('resize', () => {
      this.reComputedTextContainerHeight()
    })
  },
  methods: {
    reComputedTextContainerHeight () {
      const textContainer = this.$refs.textContainer
      const ratio = this.type === TypeEnum.SLIDE ? 3 : 3.3
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
}
.mobile-text {
  transform: scale(0.7)
}
</style>
