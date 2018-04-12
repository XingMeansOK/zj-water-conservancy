<template>

  <div class="cont2-template">
    <div class="poster-btn poster-next-btn" @click="next">
      <Icon type="chevron-left" size=50></Icon>
    </div>

    <ul class="poster-list">
      <li class="poster-item" ref="item0" :style="styleObj">
        <router-link :to="{ path: 'data', query: { type: '1' }}" >
          <mapTemplate  class="maptemplat" pic="/static/pic/zrsx.png" label="自然水系模板" />
        </router-link>
      </li>
      <li class="poster-item" ref="item1" :style="styleObj">
        <router-link :to="{ path: 'data', query: { type: '2' }}" >
          <mapTemplate class="maptemplat" pic="/static/pic/slgc.png" label="水利工程模板"/>
        </router-link>
      </li>
      <li class="poster-item" ref="item2" :style="styleObj">
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
      <!-- <li class="poster-item" active=false>
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
        allItem: [],
        allID: [],
        currentID: 1,
        currentItem: '',
        nomalItem: [],
        firstItem: '',
        lastItrm: '',

        nomalID: [0,2],
        visibleCount: 5,
        allItemNum: 0,
        contWidth: 0,
        currentWidth: 0,
        nomalWidth: 0,
        gap: 0,
        styleObj: {},
        scale: 0
      }
    },
    methods: {
      next () {
        // debugger
        let self = this;
        if($(self.currentItem).next().next().get(0)) {
          self.currentItem = $(self.currentItem).next() ;
          $("ul.poster-list li").each(function(item) {
            if($("ul.poster-list li").get(item) != self.currentItem.get(0)) {
              self.nomalItem.push($("ul.poster-list li").get(item));
            }
          });

        }else {
          self.currentItem = $(self.currentItem).next();
          self.nomalItem = this.getNomalItem(self.currentItem);

          let list = $("ul.poster-list li");
          $("ul.poster-list li")[0].remove();
          $("ul.poster-list").append(list[0]);
          self.firstItem = $("ul.poster-list li")[0];
        }
        $(self.currentItem).css({
          width: self.currentWidth.toString()+'px'
        });
        $(self.nomalItem).css({
          width: self.nomalWidth.toString()+'px'
        });
      },
      getNomalItem (currentItem) {
        let nomalItem = [];
        currentItem = $(currentItem).next() ;
        $("ul.poster-list li").each(function(item) {
          if($("ul.poster-list li").get(item) != currentItem.get(0)) {
            nomalItem.push($("ul.poster-list li").get(item));
          }
          return nomalItem;
        });
      }
    },
    mounted () {
      this.allItem = $("ul.poster-list li");
      this.currentID = Math.ceil(this.allItemNum);
      this.currentItem = $("ul.poster-list li")[this.currentID];
      this.firstItem = $("ul.poster-list li")[0];


      this.contWidth=$("ul.poster-list")[0].offsetWidth;
      this.allItemNum = $("ul.poster-list li").length;
      this.currentWidth = this.contWidth/this.visibleCount*1.1;
      this.nomalWidth = this.contWidth/this.visibleCount*0.8;
      this.gap = (this.contWidth-this.currentWidth-this.nomalWidth*(this.visibleCount-1))/(this.visibleCount-1);
      this.scale = this.currentWidth/this.nomalWidth;
      for(let i=0; i<this.allItemNum; i++) {
        this.allID.push(i);
      }
      this.nomalID.forEach((id) => {
        let itemNO = 'item'+id.toString();
        this.$refs[itemNO].style.width = this.nomalWidth.toString()+'px';
        this.$refs[itemNO].style.margin = (this.gap/2).toString()+'px';
      });
      var itemNO = 'item'+this.currentID.toString();
      this.$refs[itemNO].style.width = this.currentWidth.toString()+'px';

  }
}

</script>
<style>
.poster-item:hover,.poster-item:focus {
  transform:translate(50px,100px);
  /* -webkit-transform: translate(50px,100px); */

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


}


</style>
