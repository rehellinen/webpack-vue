<template lang="pug">
  div.img-container(@click="onClick" :class="{ pointer: isPointer }" :style="squareStyle" ref='imgContainer')
    img.img(:src="(needActive && isActive) ? activeSrc : src")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    needActive: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isPointer: {
      type: Boolean,
      default: false
    },
    isSquare: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      imgHeight: 0
    }
  },
  computed: {
    activeSrc () {
      const srcArr = this.src.split('.')
      const postfix = srcArr.pop()
      const filename = srcArr.pop()

      srcArr.push(`${filename}@active`, postfix)
      return srcArr.join('.')
    },
    squareStyle () {
      return this.isSquare ? `height: ${this.imgHeight}px` : ''
    }
  },
  mounted () {
    if (this.isSquare) {
      const imgContainer = this.$refs.imgContainer
      console.log(imgContainer.clientWidth)
      if (imgContainer.clientWidth > 0) {
        this.imgHeight = imgContainer.clientWidth
      }
    }
  },
  methods: {
    onClick () {
      if (this.href) {
        window.open(this.href)
      }
      this.$emit('on-click', {
        src: this.src
      })
    }
  }
}
</script>

<style scoped>
.img-container {
  width: 100%;
  height: 100%;
}
.img {
  width: 100%;
  height: 100%;
}
.pointer {
  cursor: pointer;
}
</style>
