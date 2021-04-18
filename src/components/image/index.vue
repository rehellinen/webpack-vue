<template lang="pug">
  div.img-container(@click="onClick")
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
    }
  },
  computed: {
    activeSrc () {
      const srcArr = this.src.split('.')
      const postfix = srcArr.pop()
      const filename = srcArr.pop()

      srcArr.push(`${filename}@active`, postfix)
      return srcArr.join('.')
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
</style>
