<template>
  <div class="md-layout md-alignment-top-center full">
    <div class="md-layout-item md-size-33">
      <md-content class="md-elevation-8">
        <img src="../../../static/clouds-conifers.jpg"/>
      </md-content>
    </div>
    <div class="md-layout-item md-size-50 text">
      <h2 class="md-display-1">Some text about things and stuff for the website. Ya know?</h2>
    </div>
    <div class="md-layout-item md-size-33">
      <md-content class="md-elevation-8">
        <img class="right" src="../../../static/clouds-daylight.jpg"/>
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
  name: 'heading',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.full {
  position: relative;
}
.text {
  margin-top: 50px;
  position: absolute;
}
.md-content {
    width: 400px;
    height: auto;
    justify-content: center;
    margin: 50px;
    text-align: center;
  }
.right {
  margin-top: -45px;
}

.titlemain {
  position: absolute;
}
</style>
