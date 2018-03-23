<script>
/**
 * 用于存放项目的全局变量，如制图参数，制图类型等
 * @type {[type]}
 */
  export default
  {
    // 制图数据

    mappingData:[],
    // 制图类型
    type: null,
    allData: [
      {"name":"水库","geotype":"polygon","type":"default","template":["template2"],"address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuiku/MapServer"},
      {"name":"泵站","geotype":"point","type":"default","template":["template2"],"address":"http://114.215.249.116:6079/arcgis/rest/services/zjsl/bengzhan/MapServer"},
      {"name":"堤防工程","geotype":"polyline","type":"default","template":["template2","template3"],"address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/difanggongcheng/MapServer"},
      {"name":"灌区工程","geotype":"polygon","type":"default","template":["template2"],"address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/guanqugongcheng/MapServer"},
      {"name":"海塘","geotype":"polyline","type":"default","template":["template2"],"address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/haitang/MapServer"},
      {"name":"河流","geotype":"polygon","type":"default","template":["template1"],"address":" http://114.215.249.116:6080/arcgis/rest/services/zjsl/heliu/MapServer"},
      {"name":"湖泊","geotype":"polygon","type":"default","template":["template1"],"address":"http://114.215.249.116:6079/arcgis/rest/services/zjsl/hupo/MapServer"},
      {"name":"农村供水工程","geotype":"point","type":"default","template":["template2"],"address":"http://114.215.249.116:6079/arcgis/rest/services/zjsl/nongcungongshuigongcheng/MapServer"},
      {"name":"山塘","geotype":"point","type":"default","template":["template2"],"address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shantang/MapServer"},
      {"name":"水电站","geotype":"point","type":"default","template":["template2"],"address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuidianzhan/MapServer"},
      {"name":"水文测站","geotype":"point","type":"default","template":["template2"],"address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuiwencezhan/MapServer"},
      {"name":"水闸","geotype":"polyline","type":"default","template":["template2"],"address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuizha/MapServer"},
      {"name":"围垦","geotype":"polygon","type":"default","template":["template2","template3"],"address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/weiken/MapServer"},
      {"name":"引调水","geotype":"polyline","type":"default","template":["template2"],"address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/yindiaoshui/MapServer"},

],

    // 制图类型
    // type: 'template2',
    mappingData: [
      // {
      //   url: 'http://114.215.249.116:6080/arcgis/rest/services/zjsl/difanggongcheng/MapServer/'
      //    + '0' + '/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=&geometryType=esriGeometryPolyline&outFields=*&where=1=1',
      //   type: 'esriGeometryPolyline',
      //   name: '堤防工程'
      // },
      // {
      //   url: 'http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuiwencezhan/MapServer/'
      //    + '0' + '/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=&geometryType=esriGeometryPoint&outFields=*&where=1=1',
      //   type: 'esriGeometryPoint',
      //   name: '水文观测'
      // },
      // {
      //   url: 'http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuiku/MapServer/'
      //    + '0' + '/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=&geometryType=esriGeometryPolygon&outFields=*&where=1=1',
      //   type: 'esriGeometryPolygon',
      //   name: '水库'
      // },
    ],

  }
</script>
