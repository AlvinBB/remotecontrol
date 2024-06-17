<template>
  <div class="main">
    <div class="phone-block-container">
      <div class="phone-block left-block">
        <img class="phone-block-bg" alt="phone" src="../assets/WechatIMG1.jpg"/>
      </div>
      <div class="phone-block right-block">
        <img class="phone-block-bg" alt="phone" src="../assets/WechatIMG2.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
// import phone1 from 'assets/WechatIMG1.jpg'
// import phone2 from 'assets/WechatIMG2.jpg'
export default {
  name: 'MainContent',
  props: {
    msg: String
  },
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  margin: 0 auto;
  max-width: 860px;
  padding: 50px;
  width: 100%;
  box-sizing: border-box;
  .phone-block-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    margin: 0 auto;
  }
  .phone-block {
    width: 40%;
  }
  .phone-block-bg {
    width: 100%;
  }
}
</style>
