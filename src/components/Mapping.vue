<template>
  <layout :style="{height: '100%', width: '100%'}">
      <MapMenu/>
      <MapContainer :zoom="zoom" :center="center">
        <TileLayer :url="url"></TileLayer>
      </MapContainer>
  </layout>
</template>

<script>
  // 制图界面的顶层组件

  import MapMenu from './MapMenu.vue'
  import MapContainer from './MapContainer.vue'
  import TileLayer from './TileLayer.vue'

  export default {
    name: 'Mapping',
    components: {
      MapMenu,
      MapContainer,
      TileLayer
    },
    data () {
      return {
        url: 'http://114.215.249.116:6080/arcgis/rest/services/zjslmap/zjslvectormap/MapServer/WMTS/1.0.0/WMTSCapabilities.xml',
        zoom: 12,
        center: [120.19, 30.26],
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
