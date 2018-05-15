<template>
  <div class="statusBar">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-layout md-gutter md-alignment-center-center">
        <div class="md-layout-item md-size-50">
          <span>Recent Projects!</span>
        </div>
      </div>
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

  .statusBar{
    margin-top: 250px;
  }
  .md-layout-item {
    height: 300px;
    background: linear-gradient(
      md-get-palette-color(lightblue, 50),
      md-get-palette-color(lightblue, 100));

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      content: " ";
    }

    &.md-layout {
      &:after {
        transform: translateY(-100%);
      }

      .md-layout-item:after {
        height: 40px;
        margin-top: 16px;
        position: relative;
        z-index: 1;
      }
    }
    span {
      width: 100%;
      height: 100%;
      padding: 8px;
      display: block;
      font-weight: bold;
    }
  }
</style>
