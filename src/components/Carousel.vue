<template>
  <div >
    <div class="pictureSlider poster-main">
      <div class="poster-btn poster-prev-btn" >
        <Icon type="chevron-left" size=50></Icon>
      </div>
      <ul class="poster-list">
        <li class="poster-item" info="自然水系模板用于表示自然水系要素，包括河流、湖泊数据。">
          <router-link :to="{ path: 'data', query: { type: '1' }}" >
              <mapTemplate  class="maptemplat" pic="/static/pic/zrsx.png" label="自然水系模板" />
          </router-link>
        </li>
        <li class="poster-item"info="水利工程模板用于表示水利工程设施分布，包括水库、水电站等数据。">
          <router-link :to="{ path: 'data', query: { type: '2' }}" >
                <mapTemplate class="maptemplat" pic="/static/pic/slgc.png" label="水利工程模板"/>
          </router-link>
        </li>
        <li class="poster-item" info="防汛工程模板用于表示防洪设施分布，包括堤防等数据。">
          <router-link :to="{ path: 'data', query: { type: '3' }}">
                <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板" />
          </router-link>
        </li>
        <li class="poster-item" info="自然水系模板用于表示自然水系要素">
          <router-link :to="{ path: 'data', query: { type: '3' }}">
            <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板1" />
          </router-link>
        </li>
        <li class="poster-item" info="自然水系模板用于表示自然水系要素">
          <router-link :to="{ path: 'data', query: { type: '3' }}">
            <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板2" />
          </router-link>
        </li>
        <!-- <li class="poster-item" >
          <router-link :to="{ path: 'data', query: { type: '3' }}">
            <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板2" />

          </router-link>
        </li> -->
      </ul>
      <div class="poster-btn poster-next-btn" >
        <Icon type="chevron-right" size=50></Icon>
      </div>
      <span class="info"></span>

    </div>
  </div>
</template>
<script>
// import JQuery from 'jquery';

import mapTemplate from './MapTemplate';
  export default {
    components: {mapTemplate},
    mounted () {
      $(function(){
	       Carousel.init($(".pictureSlider"));
       });
    }
  }

</script>
<style scoped>
 .info {
   font-size: 16
 }
</style>
