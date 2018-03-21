<template>
  <div class='layercardbox'>
    <Card>
        <p slot="title">点状要素</p>
        <span :style="{ cursor: 'pointer', color: 'blue' }" slot="extra" @click.prevent="changeVisibility" >
            {{ visible }}
        </span>
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
        <Row>
           <Slider v-model="param.scale" :max='2' :min='0' :step='0.01' show-tip='never'></Slider>
           <!-- <Slider v-model="param.scale" show-input :max='5' :min='0' :step='0.1' show-tip='never'></Slider> -->
        </Row>
        <Row>
           <Slider v-model="param.opacity" :max='1' :min='0' :step='0.05' show-tip='never'></Slider>
           <!-- <Slider v-model="param.opacity" show-input :max='1' :min='0' :step='0.05' show-tip='never'></Slider> -->
        </Row>
        <!-- <Row>
          <div :style="{backgroundColor: param.color, float: 'right', height: '1em', width: '2em'}" @click.prevent="toStylePage"></div>
        </Row> -->
    </Card>
  </div>
</template>

<script>

  export default {
    name: 'PointPanel',
    props: ['param', 'topMenu'],
    components: {
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
    data () {
      return {
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
