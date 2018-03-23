<template>
  <div class="cont">
    <div class="cont2-title">
      <p class="title">制图模板</p>
      <HR  width="100%" color= #e6e6e6></HR>

    </div>
    <div class="cont2-template">
      <router-link :to="{ path: 'data', query: { type: '1' }}" >
        <Tooltip :delay=800>
          <div slot="content" >
              <p>自然水系模板用于表示自然水系要素，</p>
              <p>包括河流、湖泊数据。</p>
            </div>
          <mapTemplate  class="maptemplat" pic="/static/logo.png" label="自然水系模板" />
        </Tooltip>
      </router-link>
      <router-link :to="{ path: 'data', query: { type: '2' }}" >
        <Tooltip :delay=800 >
          <div slot="content" >
              <p>水利工程模板用于表示水利工程设施分布，</p>
              <p>包括水库等数据。</p>
            </div>
          <mapTemplate class="maptemplat" pic="/static/logo.png" label="水利工程模板"/>
        </Tooltip>
      </router-link>
      <router-link :to="{ path: 'data', query: { type: '3' }}">
        <Tooltip :delay=800 >
          <div slot="content" >
              <p>防洪工程模板用于表示防洪设施分布，</p>
              <p>包括堤防等数据。</p>
            </div>
            <mapTemplate class="maptemplat" pic="/static/logo.png" label="防洪工程模板"/>
        </Tooltip>
      </router-link>
    </div>
  </div>
</template>

<script>
import mapTemplate from './MapTemplate';

export default {
  components: {mapTemplate},
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
    overflow-y:auto;
  }

  .cont2-template {
    /* background-color: #ccc; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

  }
  .maptemplat {
    padding: 10px

  }
  .title {
    font-size: 30px;
    padding: 2px;
    margin-left: 20px;

    color: rgb(23,30,58);

    font-weight: bold;
  }

</style>
