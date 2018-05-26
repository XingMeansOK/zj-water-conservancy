<template lang="html">
  <div style="padding: 25px 50px; width: 100%; height:100%;display:flex;align-items: flex-start;">
    <div style="flex: 0 0 auto;width:25%;height:100%;background-color:#fff;">

    </div>
    <div style="flex: 1 1 auto;height:100%;background-color:#fff;display:flex;justify-content:center;align-items:center;">
      <div style="width:50%;height:80%;box-shadow:10px 10px #ccc">
        <MapContainer @bindMap='bindMap'>
          <TileLayer></TileLayer>
        </MapContainer>
        <Upfitter :params = 'params' :editable='editable'/>
      </div>

    </div>
      <!-- <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
      </Breadcrumb> -->
      <!-- <Content :style="{padding: '24px 0', width: '100%',height: '100%', background: '#fff'}">
          <Layout :style="{height: '100%', width: '100%'}">
              <Content :style="{ display: 'flex', justifyContent: 'center', padding: '24px', background: '#fff'}">
                  <MapContainer>
                    <TileLayer></TileLayer>
                  </MapContainer>
              </Content>
          </Layout>
      </Content> -->
  </div>
</template>

<script>
import MapContainer from './MapContainer.vue';
import TileLayer from './TileLayer.vue';

const PAPERWIDTH = 210;
const PAPERHEIGHT = 297;

export default {
  name: 'Print',
  data() {
    return {
      // 确认打印参数的地图对象
      printMap: null,
      // 打印纸张类型
      paperType: 'A4',
      // 纸张方向
      direction: '纵向',
    }
  },
  computed: {
    size: function() {

      switch (this.paperType) {
        case "A4":

          break;
        default:

      }
    },
  },
  methods: {
    /**
     * 绑定用于确认打印参数的地图对象
     * @param  {[type]} olMap [description]
     * @return {[type]}       [description]
     */
    bindMap( olMap ) {
      this.printMap = olMap;
      // 更新地图打印范围
      updateRange() {
        var lt = olMap.getCoordinateFromPixel( [ 0, 0 ] );
        var rb = olMap.getCoordinateFromPixel( olMap.getSize() );
      }
      olMap.on( 'pointerdrag', () => {
        this.updateRange();
      } )
      olMap.getView().on('change:resolution',() => {
        this.updateRange();
      });
    },
  }
  components: {
    MapContainer,
    TileLayer,
  },
}
</script>

<style lang="css">
</style>
