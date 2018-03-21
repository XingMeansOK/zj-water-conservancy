<template>
  <div class='layercardbox'>
    <Card>
        <p slot="title">水利线性要素</p>
        <span :style="{ cursor: 'pointer', color: 'blue' }" slot="extra" @click.prevent="changeVisibility" >
            {{ visible }}
        </span>
        <!-- <Switch v-model="switch1" @on-change="change"></Switch>    @click.prevent="changeLimit"-->
        <Row>
          颜色
          <ColorPicker v-model="param.color" size="large" alpha />
        </Row>
        <Row>
          线宽
           <Slider v-model="param.width" show-input :max='10' :min='0' :step='0.5' show-tip='never'></Slider>
        </Row>
        <Row>
        </Row>
    </Card>
  </div>
</template>

<script>

  export default {
    name: 'LinePanel',
    props: ['param'],
    components: {
    },
    methods: {
      changeVisibility() {
        this.param.visible = !this.param.visible;
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
