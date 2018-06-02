<template>
  <div class="cont">
    <div class="cont1-title">
      <p class="homeTitle">制图模板</p>
      <HR  width="100%" color= #e6e6e6></HR>
    </div>
    <carousel/>
  </div>
</template>

<script>
import carousel from './Carousel';
export default {
  components: {carousel},
  name: 'Home',
  created () {
    this.__global__.mappingData = [];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cont {
    display: flex;
    flex: 1;
    background-color: #fff;
    flex-direction: column;
    overflow: hidden;
  }

  /* .poster-list, .cont2-template {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

  } */
  /* .maptemplat {
    padding: 10px

  } */
  .homeTitle {
    font-size: 30px;
    padding: 2px;
    margin-left: 20px;

    color: rgb(23,30,58);

    font-weight: bold;
    z-index: 1000;
  }

</style>
