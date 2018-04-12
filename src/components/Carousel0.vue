<template>

  <div class="cont2-template">
    <div class="poster-btn poster-next-btn">
      <Icon type="chevron-left" size=50></Icon>
    </div>

    <ul class="poster-list">
      <li class="poster-item" active=true>
        <router-link :to="{ path: 'data', query: { type: '1' }}" >
          <mapTemplate  class="maptemplat" pic="/static/pic/zrsx.png" label="自然水系模板" />
        </router-link>
      </li>
      <li class="poster-item" active=false>
        <router-link :to="{ path: 'data', query: { type: '2' }}" >
          <mapTemplate class="maptemplat" pic="/static/pic/slgc.png" label="水利工程模板"/>
        </router-link>
      </li>
      <li class="poster-item" active=false>
        <router-link :to="{ path: 'data', query: { type: '3' }}">
          <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板" />
        </router-link>
      </li>
      <!-- <li class="poster-item" active=false>
        <router-link :to="{ path: 'data', query: { type: '3' }}">
          <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板1" />
        </router-link>
      </li>
      <li class="poster-item" active=false>
        <router-link :to="{ path: 'data', query: { type: '3' }}">
          <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板2" />
        </router-link>
      </li> -->
    </ul>
    <div class="poster-btn poster-prev-btn" >
      <Icon type="chevron-right" size=50></Icon>
    </div>

  </div>


</template>

<script>
import mapTemplate from './MapTemplate';

  export default {
    components: {mapTemplate},
    data () {
      return {

      }

    },
    // created () {
    //   $(function(){
    //     Carousel.init($(".cont2-template"));
    //   });
    // }
  }

</script>
<style>
.poster-item:hover,.poster-item:focus {
  transform:translate(50px,100px);

}
.cont2-template {
  background-color: #ccc;
  /* display:inline; */
/* display:block; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%

}
.poster-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* flex:1; */
  /* display:inline-block; */
  /* position: absolute; */
  /* float:left; */
  width: 100%;


}
.poster-item {
  /* width: 100%;
  height: 80%;
  position: absolute;
  display:inline-block;
  align-items: center; */
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;

}


</style>
