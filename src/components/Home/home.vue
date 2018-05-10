<template>
  <div class="home">
    <headerToolbar />
    <heading class="heading" />
    <statusBar />
  </div>
</template>

<script>
import headerToolbar from '../headerToolbar';
import heading from '../Home/heading';
import statusBar from '../Display/statusBar';

export default {
  name: 'home',
  components: { headerToolbar, heading, statusBar },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading {
  margin-top: 100px;
}
</style>
