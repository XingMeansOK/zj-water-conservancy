<template>

  <div class="cont2-template">
    <div class="poster-btn poster-next-btn" @click="next">
      <Icon type="chevron-left" size=50></Icon>
    </div>

    <ul class="posterlist" ref="posterlist">
      <li class="poster-item" :style="stylecss">
        <router-link :to="{ path: 'data', query: { type: '1' }}" >
          <mapTemplate  class="maptemplat" pic="/static/zrsx.png" label="自然水系模板" />
        </router-link>
      </li>
      <li class="poster-item">
        <router-link :to="{ path: 'data', query: { type: '2' }}" >
          <mapTemplate class="maptemplat" pic="/static/slgc.png" label="水利工程模板"/>
        </router-link>
      </li>
      <li class="poster-item">
        <router-link :to="{ path: 'data', query: { type: '3' }}">
          <mapTemplate class="maptemplat" pic="/static/fxgc.png" label="防汛工程模板" />
        </router-link>
      </li>
      <!-- <li class="poster-item" active=false>
        <router-link :to="{ path: 'data', query: { type: '3' }}">
          <mapTemplate class="maptemplat" pic="/static/fxgc.png" label="防汛工程模板1" />
        </router-link>
      </li>
      <li class="poster-item" active=false>
        <router-link :to="{ path: 'data', query: { type: '3' }}">
          <mapTemplate class="maptemplat" pic="/static/fxgc.png" label="防汛工程模板2" />
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
        currentIndex: 0,
        stylecss: {}

      }

    },
    methods: {
      next () {
// debugger
        var a = this.$refs.posterlist.children[this.currentIndex++];
        a.style.width = 200+'px';
      }
    }
    // created () {
    //   $(function(){
    //     Carousel.init($(".cont2-template"));
    //   });
    // }
  }

</script>
<style>
.cont2-template {
  background-color: #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* position:absolute; */
  align-items: center;
  width: 100%

}
.posterlist {
  /* background-color: #ccc; */
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* position:absolute; */
  align-items: center;
  /* top: 0 */


}
.poster-item {
  width: 100px;
  height: 80%;
}

</style>
