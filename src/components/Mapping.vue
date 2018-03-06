<template>
  <layout :style="{height: '100%', width: '100%'}">
      <MapMenu/>
      <MapContainer>
        <TileLayer/>
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
        zoom: 12,
        center: [120.19, 30.26],
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
