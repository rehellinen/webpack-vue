<template lang="pug">
  div.top-right
    my-image.top-right-img(src='/src/assets/images/others/topRight.png' href="https://next.163.com/" isPointer)
    my-text.top-right-text(text="首页")
</template>

<script>
import MyImage from '../image/index'
import MyText from '../text/index'

export default {
  components: {
    MyImage,
    MyText
  }
}
</script>

<style scoped>
.top-right {
  position: fixed;
  top: 3%;
  right: 3%;
  width: 8%;
}
.top-right-text {
  width: 80%;
  margin-left: 10%;
}
</style>
