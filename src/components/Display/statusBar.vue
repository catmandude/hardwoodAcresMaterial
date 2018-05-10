<template>
  <div class="statusBar">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-15"></div>
      <div class="md-layout-item"></div>
      <div class="md-layout-item md-size-15"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'statusBar',
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";

  .md-layout-item {
    background-color: #ecf2f7;
    margin-top: 100px;
    height: 200px;

    &:after {
      width: 100%;
      height: 60%;
      display: block;
      background:rgb(24, 220, 24);
      content: " ";
    }
  }
</style>
