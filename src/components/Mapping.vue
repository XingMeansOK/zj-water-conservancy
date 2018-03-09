<template>
  <layout :style="{height: '100%', width: '100%'}">
      <MapMenu :params = 'testParam'/>
      <MapContainer>
        <TileLayer :params = 'testParam'/>
        <component v-bind:is='type' :params = 'testParam'></component>
        <!-- <ChartLayer :params = 'testParam'/> -->
      </MapContainer>
  </layout>
</template>

<script>
  // 制图界面的顶层组件

  import MapMenu from './MapMenu.vue'
  import MapContainer from './MapContainer.vue'
  import TileLayer from './TileLayer.vue'
  import ChartLayer from './ChartLayer.vue'
  import { TestMap, CHARTMAP } from '../core/mappingParams.js'
  import observe from '../core/observer.js'

  export default {
    name: 'Mapping',
    components: {
      MapMenu,
      MapContainer,
      TileLayer,
      ChartLayer,
    },
    data () {
      return {
        type: CHARTMAP,
        testParam: null,
      }
    },
    created() {
      // 没有路由缓存，所以，每次路由改变都会重新构建一遍组件
      debugger
      let p = new TestMap();
      observe( p );
      this.testParam = p;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
