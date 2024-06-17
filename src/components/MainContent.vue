<template>
  <div class="main">
    <div class="phone-block-container">
      <div class="phone-block left-block">
        <image src="./assets/WechatIMG1.jpg"/>
      </div>
      <div class="phone-block right-block">
        <image src="./assets/WechatIMG1.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  width: 100%;
  height: 1000px;
  background: #000;
  .phone-block-container {
    display: flex;
    justify-content: space-between;
    width: 80vw;
    height: 500px;
    background: red;
    margin: 0 auto;
  }
  .phone-block {
    width: 50px;
    height: 200px;
    background: yellow;
  }
}
</style>
