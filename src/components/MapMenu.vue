<template>
      <Sider width='350' hide-trigger :style="{position: 'fixed', height: '100vh', left: 0, background: '#fff', overflow: 'auto', zIndex: '9999'}">
        <Tabs size="small" v-model="activeLabel">
            <TabPane label="color" name='color'>
              <ColorPick v-if="activeParam" :param='activeParam' :topMenu='self'/>
            </TabPane>
            <TabPane label="layers" name='layers'>
              <template v-for="param in params">
                <component v-bind:is='param.panel' :param = 'param' :topMenu='self'></component>
              </template>
            </TabPane>
            <TabPane  label="style" name='style'>
              <StylePick v-if="activeParam" :param='activeParam' :topMenu='self'/>
            </TabPane>
        </Tabs>
      </Sider>
</template>

<script>
import LinePanel from './LinePanel.vue'
import PointPanel from './PointPanel.vue'
import PolygonPanel from './PolygonPanel.vue'
import ColorPick from './ColorPick.vue'
import StylePick from './StylePick.vue'

// 制图菜单组件

export default {
  name: 'MapMenu',
  props: ['params'],
  data () {
    return {
      activeParam: null,
      activeLabel: 'layers',
      self: null,
    }
  },
  components: {
    LinePanel,
    PointPanel,
    PolygonPanel,
    ColorPick,
    StylePick,
  },
  created() {
    this.self = this;
  },
  mounted() {

  },
  methods: {
    /**
     * 跳转到指定的标签页，并且标记发起跳转的制图参数
     * @param  {[type]} name         [description]
     * @param  {[type]} currentParam [description]
     * @return {[type]}              [description]
     */
    toPage( name, currentParam ) {
      this.activeLabel = name;
      this.activeParam = currentParam;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .ivu-layout-sider:after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: #dddee1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  .ivu-tabs .ivu-tabs-tabpane{
    padding: 10px;
  }


</style>
