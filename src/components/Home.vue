<template>
  <div>
    <div class="def-template">
      <p class="title">制图模板</p>
      <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="100%" color= #e6e6e6 size=5 />
        <div class="template-cont">
          <router-link :to="{ path: 'data', query: { type: '1' }}" >
            <mapTemplate  class="maptemplat" pic="/static/logo.png" label="分级设色地图" />
          </router-link>
          <router-link :to="{ path: 'data', query: { type: '2' }}" >
            <mapTemplate class="maptemplat" pic="/static/logo.png" label="统计符号地图"/>
          </router-link>
          <router-link :to="{ path: 'data', query: { type: '3' }}">
            <mapTemplate class="maptemplat" pic="/static/logo.png" label="分级设色+统计符号地图"/>
          </router-link>
        </div>
    </div>
    <!-- <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="100%" color= #d9d9d9 SIZE=3 /> -->
    <div class="cust-template">
      <p class="title">自定义模板</p>
      <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="100%" color= #e6e6e6 size=5 />
        <div class="template-cont">
          <mapTemplate class="maptemplat" name="plus-round" size=140 color="#e6e6e6" label="自定义模板名称"/>
        </div>
    </div>

  </div>
</template>

<script>
import mapTemplate from './MapTemplate';

export default {
  components: {mapTemplate},
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title::after {
    content: "";

  }
  .template-cont {
    /* background-color: #ccc; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

  }
  .maptemplat {
    padding: 10px

  }
  .title {
    font-size: 18px;
    padding: 2px;
  }

</style>
