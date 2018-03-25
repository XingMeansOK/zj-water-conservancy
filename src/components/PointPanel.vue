<template>
  <div class='layercardbox'>
    <Card>
        <p slot="title">{{param.name}}</p>
        <span :style="{ cursor: 'pointer', color: 'blue' }" slot="extra" @click.prevent="changeVisibility" >
            {{ visible }}
        </span>
        <Row>
          <div style="margin-top:10px;">
            <div style="float:left">
              <span>大小</span>
            </div>
            <div style="float:right">
              <i-switch size="large" v-model="manual">
                 <span slot="open">手动</span>
                 <span slot="close">自动</span>
               </i-switch>
            </div>
          </div>
        </Row>
        <Row>
          <Slider v-model="param.scale" :max='scaleMax' :min='scaleMin' :step='0.01' show-tip='never' :disabled="!manual"></Slider>
        </Row>
        <Row>
          透明度
           <Slider v-model="param.opacity" :max='1.1' :min='0' :step='0.05' show-tip='never'></Slider>
        </Row>
        <Row>
            <ButtonGroup shape="circle">
                <Button type="primary" @click.prevent="toColorPage">
                    <Icon type="chevron-left"></Icon>
                    颜色
                </Button>
                <Button type="primary" @click.prevent="toStylePage">
                    样式
                    <Icon type="chevron-right"></Icon>
                </Button>
            </ButtonGroup>
        </Row>
    </Card>
  </div>
</template>

<script>

  export default {
    name: 'PointPanel',
    props: ['param', 'topMenu'],
    data () {
      return {
        manual: false,
        scaleMax: 2,
        scaleMin: 0,
      }
    },
    mounted() {
      var scope = this;
      // 确保ol地图对象已经保存
      setTimeout( function() {

        /**
         * 监听地图分辨率变化的处理函数
         * @return {[type]} [description]
         */
        function checkZoom () {
          // 如果是手动控制的话直接返回
          if( scope.manual ) return
          var zoom = map.getView().getZoom();
          // 计算新的符号缩放大小
          scope.param.scale = ( scope.scaleMax - scope.scaleMin ) * ( ( zoom - minZoom ) / ( maxZoom - minZoom ) )
        }

        var map = scope.__global__.olMap;
        map.getView().on('change:resolution',checkZoom);
        var maxZoom = map.getView().getMaxZoom();
        var minZoom = map.getView().getMinZoom();
      }, 0 )




    },
    methods: {
      /**
       * 更改图层可见性
       * @return {[type]} [description]
       */
      changeVisibility() {
        this.param.visible = !this.param.visible;
      },
      /**
       * 跳转到颜色选择页
       * @return {[type]} [description]
       */
      toColorPage() {
        this.topMenu.toPage( 'color', this.param );
      },
      /**
       * 跳转到样式选择页
       * @return {[type]} [description]
       */
      toStylePage() {
        this.topMenu.toPage( 'style', this.param );
      }
    },
    computed: {
      visible: function() {
        return this.param.visible? '隐藏' : '显示';
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ivu-card {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: #eee;
  }
  .ivu-color-picker {
    float: right;
  }

  .colorpick{
    height: 5em;
    width: 5em;
  }

</style>
