<template>
  <div class="contAll">
    <div class="pictureSlider poster-main">
      <div class="poster-btn poster-prev-btn">
        <Icon type="chevron-left" size=50></Icon>
      </div>
      <ul class="poster-list">
        <li class="poster-item" label="自然水系模板" info="自然水系模板用于表示自然水系要素，包括河流、湖泊数据。">
          <router-link :to="{ path: 'data', query: { type: '1' }}" >
              <mapTemplate  class="maptemplat" pic="/static/pic/zrsx.png" label="自然水系模板" />
          </router-link>
        </li>
        <li class="poster-item" label="水利工程模板" info="水利工程模板用于表示水利工程设施分布，包括水库、水电站等数据。">
          <router-link :to="{ path: 'data', query: { type: '2' }}" >
                <mapTemplate class="maptemplat" pic="/static/pic/slgc.png" label="水利工程模板"/>
          </router-link>
        </li>
        <li class="poster-item" label="防汛工程模板" info="防汛工程模板用于表示防洪设施分布，包括堤防等数据。">
          <router-link :to="{ path: 'data', query: { type: '3' }}">
                <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板" />
          </router-link>
        </li>
        <li class="poster-item" label="防汛工程模板1" info="防汛工程模板1用于表示自然水系要素">
          <router-link :to="{ path: 'data', query: { type: '3' }}">
            <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板1" />
          </router-link>
        </li>
        <li class="poster-item" label="防汛工程模板2" info="防汛工程模板2用于表示自然水系要素">
          <router-link :to="{ path: 'data', query: { type: '3' }}">
            <mapTemplate class="maptemplat" pic="/static/pic/fxgc.png" label="防汛工程模板2" />
          </router-link>
        </li>
      </ul>
      <div class="poster-btn poster-next-btn" >
        <Icon type="chevron-right" size=50></Icon>
      </div>
    </div>
    <div class="cont-information">
      <p class="title"></p>
      <p class="info"></p>
    </div>
  </div>
</template>
<script>
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
 /* .info {
   font-size: 16
 } */
.title {
  float: right;
  /* size: 30; */
  font-size: 27px;
  /* margin-top: 30px; */

}
.info {
  float: right;
  font-size: 20px;
  margin-top: 20px;
}
.contAll {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.cont-information {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 10px;
  background-color: rgb(73, 80, 96);
  color: #f2f2f2;
  border-radius: 30px;
  height: 270px;
  width: 500px;
  padding: 40px 20px 30px 20px;
  /* border-color: #000;
  border-width: 20px; */

}
.pictureSlider {
  margin-left: 20px;
}
</style>
