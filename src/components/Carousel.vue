<template>

  <div class="pictureSlider poster-main">

    <div class="poster-btn poster-prev-btn" >
      <Icon type="chevron-left" size=50></Icon>
    </div>
    <ul class="poster-list">
      <li class="poster-item">
        <router-link :to="{ path: 'data', query: { type: '1' }}" >
          <!-- <mapTemplate  class="maptemplat" pic="/static/pic/zrsx.png" label="自然水系模板" /> -->
          <Tooltip :delay=800>
            <div slot="content" >
                <p>自然水系模板用于表示自然水系要素，</p>
                <p>包括河流、湖泊数据。</p>
              </div>
            <mapTemplate  class="maptemplat" pic="/static/pic/zrsx.png" label="自然水系模板" />
          </Tooltip>
        </router-link>
      </li>
      <li class="poster-item">
        <router-link :to="{ path: 'data', query: { type: '2' }}" >
          <Tooltip :delay=800 >
            <div slot="content" >
                <p>水利工程模板用于表示水利工程设施分布，</p>
                <p>包括水库、水电站等数据。</p>
              </div>
              <mapTemplate class="maptemplat" pic="/static/pic/slgc.png" label="水利工程模板"/>
          </Tooltip>
        </router-link>
      </li>
      <li class="poster-item" >
        <router-link :to="{ path: 'data', query: { type: '3' }}">
          <Tooltip :delay=800 >
            <div slot="content" >
                <p>防洪工程模板用于表示防洪设施分布，</p>
                <p>包括堤防等数据。</p>
              </div>
              <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板" />
          </Tooltip>
        </router-link>
      </li>
      <li class="poster-item" >
        <router-link :to="{ path: 'data', query: { type: '3' }}">
          <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板1" />
        </router-link>
      </li>
      <li class="poster-item" >
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
