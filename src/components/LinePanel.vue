<template>
  <div class='layercardbox'>
    <Card>
        <p slot="title">{{param.name}}</p>
        <span :style="{ cursor: 'pointer', color: 'blue' }" slot="extra" @click.prevent="changeVisibility" >
            {{ visible }}
        </span>
        <Row>
          线宽
           <Slider v-model="param.width" :max='10' :min='0' :step='0.5' show-tip='never'></Slider>
            <!-- <Slider v-model="param.width" show-input :max='10' :min='0' :step='0.5' show-tip='never'></Slider> -->
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
    name: 'LinePanel',
    props: ['param','topMenu'],
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

</style>
