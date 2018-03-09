<template>
  <layout :style="{height: '100%', width: '100%'}">
      <MapMenu :params = 'testParam'/>
      <MapContainer>
        <TileLayer :params = 'testParam'/>
      </MapContainer>
  </layout>
</template>

<script>
  // 制图界面的顶层组件

  import MapMenu from './MapMenu.vue'
  import MapContainer from './MapContainer.vue'
  import TileLayer from './TileLayer.vue'
  import { TestMap } from '../core/mappingParams.js'
  import observe from '../core/observer.js'

  export default {
    name: 'Mapping',
    components: {
      MapMenu,
      MapContainer,
      TileLayer
    },
    data () {
      return {
        testParam: null,
      }
    },
    created() {
      let p = new TestMap();
      observe( p );
      this.testParam = p;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
