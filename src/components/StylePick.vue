<template>
  <div class="box open">
    <template v-for="item in items">
      <div class="stylechunk" >
        <div class="styleimg" :style="{ background: `url(./static/${param.layer}/${type}/${item.id}.png) no-repeat center center`}" @click.prevent="setStyle"></div>
        <span>{{item.name}}</span>
      </div>
    </template>
    <Button type="success" long @click.prevent='backToLayers' style="margin-top:20px">确认</Button>
  </div>
</template>

<script>

  const PointLayer = {
    template1: [

    ],
    template2: [
      { id: 'shuibeng', name: '水泵' },
      { id: 'shuifa', name: '水阀' },
      { id: 'shuizha1', name: '水闸1' },
    ],
    template3: [

    ],
  }

  const Layer = {
    PointLayer
  }

  export default {
    name: 'StylePick',
    props: ['param', 'topMenu'],
    components: {
    },
    data() {
      return {
        items: null, // 当前制图模板+图层类型（点线面）条件下提供的符号类型
        type: null,
      }
    },
    created() {
      // 【当前图层的图层类型】【当前的制图模板】
      this.items = Layer[ this.param.layer ][ this.__global__.type ];
      // 当前的制图模板
      this.type = this.__global__.type;
    },
    methods: {
      /**
       * 点击确认，返回到图层页
       * @return {[type]} [description]
       */
      backToLayers() {
        this.topMenu.toPage( 'layers', this.param );
      },
      /**
       * 将选中的符号样式应用到图层参数上
       * @param {[type]} e [description]
       */
      setStyle(e) {
        e = e || event;
        var reg = /(\.\/static).*(\.png)/;
        var src = e.target.style.background.match( reg );
        this.param.src = src[0];
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
   width: 330px; background: #fff; margin-top: 2px; padding: 10px; padding-bottom: 5px;  opacity: 0; transition: all .3s ease;
}
.box.open{ visibility: visible; opacity: 1; text-align: center;}

.stylechunk{
  display: inline-block;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  background: #495060;
  margin: 3px;
  transition: all .3s ease;
  border-radius: 4px;
  padding: 2px;
}
.styleimg {
  width: 56px;
  height: 56px;
}
.stylechunk:hover{
  transform: scale(1.3);
  box-shadow: 0 0 5px rgba(0,0,0,.4);
}
</style>
