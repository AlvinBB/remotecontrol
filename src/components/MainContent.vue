<template>
  <div class="main">
    <div class="phone-block-container">
      <div class="phone-block left-block"></div>
      <div class="phone-block right-block"></div>
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
    width: 80vw;
    height: 500px;
    background: red;
    margin: 0 auto;
  }
  .phone-block {
    width: '40%';
    height: 200px;
    background: yellow;
  }
}
</style>
