<script>
/**
 * 用于存放项目的全局变量，如制图参数，制图类型等
 * @type {[type]}
 */
  export default
  {
    // 制图数据
    // mappingData: null,
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
