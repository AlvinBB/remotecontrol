<template>
  <div class="main">
    <div class="phone-block-container">
      <div class="phone-block left-block">
        <img class="phone-block-bg" alt="phone" src="../assets/WechatIMG1.jpg"/>
      </div>
      <div class="phone-block right-block">
        <img class="phone-block-bg" alt="phone" :src="phone2"/>
      </div>
    </div>
  </div>
</template>

<script>
import phone1 from 'assets/WechatIMG1.jpg'
import phone2 from 'assets/WechatIMG2.jpg'
export default {
  name: 'MainContent',
  props: {
    msg: String
  },
  data() {
    return {
      phone1,
      phone2,
    }
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
  .phone-block-bg {
    width: 100px;
    height: 100px;
  }
}
</style>
