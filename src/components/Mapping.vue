<template>
  <layout :style="{height: '100%', width: '100%'}">
      <MapMenu :params = 'params'/>
      <MapContainer>
        <TileLayer/>
        <template v-for="param in params">
          <component v-bind:is='param.layer' :param = 'param'></component>
        </template>
      </MapContainer>
      <MapLegend :params = 'params' />
  </layout>
</template>

<script>

  // 制图界面的顶层组件

  import MapMenu from './MapMenu.vue'
  import MapContainer from './MapContainer.vue'
  import TileLayer from './TileLayer.vue'
  // import ChartLayer from './ChartLayer.vue'
  import LineLayer from './LineLayer.vue'
  import PointLayer from './PointLayer.vue'
  import PolygonLayer from './PolygonLayer.vue'
  import MapLegend from './Legend.vue'
  import { PolylineParam, PointParam, PolygonParam } from '../core/mappingParams.js'
  import observe from '../core/observer.js'

  const mappingParams = {
    // 点
    esriGeometryPoint: PointParam,
    // 线
    esriGeometryPolyline: PolylineParam,
    // 面
    esriGeometryPolygon: PolygonParam,
  }

  /**
   * 当参数数组中所有的参数都获得了各自的制图数据之后，调用allDone方法
   * @type {[type]}
   */
  Object.defineProperty( Array.prototype, 'doneRequestParams', {
    set: function(newValue) {
      if( newValue < 0 || newValue > this.length ) return;
      if( newValue === this.length ) this.allDone();
      this._doneRequestParams = newValue;
    },
    get: function() {
      return this._doneRequestParams || 0;
    }
  } )
  // 传入allDone
  Array.prototype.callback = function( fn ) { this.allDone = fn; }

  export default {
    name: 'Mapping',
    components: {
      MapMenu,
      MapContainer,
      TileLayer,
      // ChartLayer,
      LineLayer,
      PointLayer,
      PolygonLayer,
      MapLegend,
    },
    data () {
      return {
        params: null,
      }
    },
    created() {
      // 没有路由缓存，所以，每次路由改变都会重新构建一遍组件
      // 加载
      this.$Spin.show();

      // 获取当前的制图模板类型
      const MAPINGTYPE = this.__global__.type;
      // 获取当前的制图数据数组
      const DATA = this.__global__.mappingData;
      // 制图参数，将传给子组件
      var params = [];

      DATA.forEach( ( value, index ) => {

        // 如果是系统发布的服务数据
        if( value.type === 'default' ) {
          // 数据类型，（点线面）
          const DATATYPE = value.geotype;
          // 点线面对应的参数
          const Param = mappingParams[ DATATYPE ];
          var p = new Param();

          // 参数可响应
          observe( p );
          // 数据源，数据源不需要observable，如果是用户上传的话，会是一个对象，就比较复杂
          p.url = `${value.address}/0/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=&geometryType=${value.geotype}&outFields=*&where=1=1`;
          p.container = params;
          // 数据名称
          p.name = value.name;
          params.push( p );
        }

        // 如果数据是用户上传的数据
        else if( value.type === 'custom' ) {

        }


      } )

      this.params = params;
      // 已经获取到制图数据源数据的参数个数
      params.doneRequestParams = 0;
      // 数据都添加到地图上后，隐藏加载动画
      const allDone = () => {
        this.$Spin.hide();
      };
      params.callback( allDone );

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
