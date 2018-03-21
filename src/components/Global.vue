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
  {"id":"0","type":"default","name":"水库","geotype":"polygon","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuiku/MapServer"},
  {"id":"1","type":"default","name":"泵站","geotype":"point","address":"http://114.215.249.116:6079/arcgis/rest/services/zjsl/bengzhan/MapServer"},
  {"id":"2","type":"default","name":"堤防工程","geotype":"polyline","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/difanggongcheng/MapServer"},
  {"id":"3","type":"default","name":"灌区工程","geotype":"polygon","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/guanqugongcheng/MapServer"},
  {"id":"4","type":"default","name":"海塘","geotype":"polyline","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/haitang/MapServer"},
  {"id":"5","type":"default","name":"河流","geotype":"polygon","address":" http://114.215.249.116:6080/arcgis/rest/services/zjsl/heliu/MapServer"},
  {"id":"6","type":"default","name":"湖泊","geotype":"polygon","address":"http://114.215.249.116:6079/arcgis/rest/services/zjsl/hupo/MapServer"},
  {"id":"7","type":"default","name":"农村供水工程","geotype":"point","address":"http://114.215.249.116:6079/arcgis/rest/services/zjsl/nongcungongshuigongcheng/MapServer"},
  {"id":"8","type":"default","name":"山塘","geotype":"point","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shantang/MapServer"},
  {"id":"9","type":"default","name":"水电站","geotype":"point","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuidianzhan/MapServer"},
  {"id":"10","type":"default","name":"水文测站","geotype":"point","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuiwencezhan/MapServer"},
  {"id":"11","type":"default","name":"水闸","geotype":"polyline","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuizha/MapServer"},
  {"id":"12","type":"default","name":"围垦","geotype":"polygon","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/weiken/MapServer"},
  {"id":"13","type":"default","name":"引调水","geotype":"polyline","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/yindiaoshui/MapServer"},
]

    // 制图类型
    type: 'template2',
    mappingData: [
      {
        url: 'http://114.215.249.116:6080/arcgis/rest/services/zjsl/difanggongcheng/MapServer/'
         + '0' + '/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=&geometryType=esriGeometryPolyline&outFields=*&where=1=1',
        type: 'esriGeometryPolyline',
        name: '堤防工程'
      },
      {
        url: 'http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuiwencezhan/MapServer/'
         + '0' + '/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=&geometryType=esriGeometryPoint&outFields=*&where=1=1',
        type: 'esriGeometryPoint',
        name: '水文观测'
      },
      {
        url: 'http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuiku/MapServer/'
         + '0' + '/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=&geometryType=esriGeometryPolygon&outFields=*&where=1=1',
        type: 'esriGeometryPolygon',
        name: '水库'
      },
    ],

  }
</script>
