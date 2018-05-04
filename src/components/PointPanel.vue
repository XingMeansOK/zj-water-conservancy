<template>
  <transition name="scale" mode="out-in">
    <div class='layercardbox' v-if="param.isGrade" key="grade">
      <Card>
          <p slot="title">{{param.name}}-分级符号</p>
          <span :style="{ cursor: 'pointer', color: 'blue' }" slot="extra" @click.prevent="changeVisibility" >
              {{ visible }}
          </span>
          <Row>
            <Select v-model="param.gradeField">
                <Option v-if="param.fields.length" v-for="item in param.fields" :value="item.field" :key="item.field">{{ item.field }}</Option>
            </Select>
          </Row>
          <Row>
            <Select v-model="param.gradeMethod">
                <Option v-for="item in gradeMethods" :value="item" :key="item">{{ item }}</Option>
            </Select>
          </Row>
          <Row>
            分级数
            <Slider v-model="param.gradeCount" show-input :max='10' :min='3' :step='1' show-tip='never'></Slider>
          </Row>
          <Row>
            <ButtonGroup shape="circle">
                <Button type="ghost" @click="changeToGrade"><Icon type="chevron-left"></Icon> 普通符号</Button>
                <Button type="ghost" @click.prevent="toStylePage">符号样式 <Icon type="chevron-right"></Icon></Button>
            </ButtonGroup>
          </Row>
      </Card>
    </div>
    <div class='layercardbox' v-else-if="param.isChart" key="chart">
      <Card>
          <p slot="title">{{param.name}}-统计图表</p>
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
            <div style="border-bottom: 1px solid #c5e2ff;padding-bottom:6px;margin-bottom:6px;">
              <CheckboxGroup v-model="statFields">
                  <Checkbox :label="item.field" v-for="item in param.fields" key="item.field">
                      <span>{{item.field}}</span>
                  </Checkbox>
              </CheckboxGroup>
            </div>
            <div style="margin-bottom:6px;">
              <Tag v-for="(item, index) in statFields" :key="item" :name="item" closable @on-close="handleClose2" :color="colors[index]"><span @click.prevent="toColorPage( index )">{{ item }}</span></Tag>
            </div>
          </Row>
          <Row>
            <ButtonGroup shape="circle">
                <Button type="ghost" @click="changeToChart"><Icon type="chevron-left"></Icon> 普通符号</Button>
                <Button type="ghost" @click.prevent="toStylePage">图表样式 <Icon type="chevron-right"></Icon></Button>
            </ButtonGroup>
          </Row>
      </Card>
    </div>
    <div class='layercardbox' v-else key="point">
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
                  <Button type="ghost" @click.prevent="toColorPage"><Icon type="chevron-left"></Icon> 颜色</Button>
                  <Button type="ghost" @click="changeToGrade">分级符号</Button>
                  <Button type="ghost" @click="changeToChart">统计图表</Button>
                  <Button type="ghost" @click.prevent="toStylePage">样式 <Icon type="chevron-right"></Icon></Button>
              </ButtonGroup>
          </Row>
      </Card>
    </div>
  </transition>
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
        gradeMethods: ['等间距分段', '等比分段'],
        statFields: [],
        colors: [ '#ffc12a', '#ffff3a', '#90cf5b', '#00af57', '#00afee', '#0071be', '#00215f', '#72349d', '#ffc12a', '#ffff3a', '#90cf5b', '#00af57', '#00afee', '#0071be', '#00215f', '#72349d' ], // 统计字段的默认颜色值
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
       * @param { number } 要修改的颜色值的索引
       * @return {[type]} [description]
       */
      toColorPage( index ) {
        var scope = this;
        this.topMenu.toPage( 'color', this.param, {
          isChart: this.param.isChart, update: function( newColor ) {
            // 直接使用数组【索引】=新值 的方式不会触发视图的重新渲染
            scope.colors.splice(index, 1, newColor);
          }
        } );
      },
      /**
       * 跳转到样式选择页
       * @return {[type]} [description]
       */
      toStylePage() {
        this.topMenu.toPage( 'style', this.param );
      },
      /**
       * 切换到分级符号面板
       * @return {[type]} [description]
       */
      changeToGrade () {
        this.param.isGrade = !this.param.isGrade;
      },
      /**
       * 切换到统计图表面板
       * @return {[type]} [description]
       */
      changeToChart () {
        this.param.isChart = !this.param.isChart;
      },

      handleClose2 (event, name) {
        const index = this.statFields.indexOf(name);
        this.statFields.splice(index, 1);
      }

    },
    computed: {
      visible: function() {
        return this.param.visible? '隐藏' : '显示';
      },
      // statFields: function() {
      //   return this.param.fields.map( function( value ) { return value.field } );
      // }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .colorpick{
    height: 5em;
    width: 5em;
  }

</style>
