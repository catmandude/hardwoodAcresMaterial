<template>
  <div class="home">
    <headerToolbar />
    <heading class="heading" />
  </div>
</template>

<script>
import headerToolbar from '../headerToolbar';
import heading from '../Home/heading';

export default {
  name: 'home',
  components: { headerToolbar, heading },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading {
  margin-top: 100px;
}
</style>
