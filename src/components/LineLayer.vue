<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

  const extent =  [118.02252448821446,  27.04527653758214, 123.15774781361063, 31.18247145139634];
  const esrijsonFormat = new ol.format.EsriJSON();

  export default {
    name: 'linelayer',
    props: ['param'],
    data() {
      return {
        _olLayer: null, // 用来在内部保存layer的引用
      }
    },
    created() {

      /**
       * 矢量图层
       */

      var param = this.param;

       var vectorSource = new ol.source.Vector({
       loader: function(extent, resolution, projection) {
         var url = param.url;
         $.ajax({url: url, dataType: 'jsonp', success: function(response) {
           if (response.error) {
             alert(response.error.message + '\n' +
                 response.error.details.join('\n'));
           } else {
             // dataProjection will be read from document
             var features = esrijsonFormat.readFeatures(response, {
               featureProjection: projection
             });
             if (features.length > 0) {
               vectorSource.addFeatures(features);
             }

             // 通知顶层数据已经添加到地图上了
             param.container.doneRequestParams++;
           }
         }});
       },
     });

     // 初始的样式
     var initialStyle = new ol.style.Style({
       // fill: new ol.style.Fill({
       //   color: 'rgba(225, 225, 225, 255)'
       // }),
       stroke: new ol.style.Stroke( this.param )
     });

     this._olLayer = new ol.layer.Vector({
       source: vectorSource,
       style: initialStyle
     });

      // 图层对象都要定义一个update函数，用于实时更新制图参数
      this._olLayer.update = function() {
        this.setStyle( new ol.style.Style({
          stroke: new ol.style.Stroke( param )
        }) );
        // 图层是否可见
        param.visible? this.setVisible( true ) : this.setVisible( false );
      }

      // 将制图参数和图层对象绑定
      this.param.__myob__.dep.addSub( this._olLayer );

      // 将当前图层添加到ol.Map中
      this.$nextTick(t => this.$parent.$emit("addtile", this._olLayer));

    },
    mounted() {

    }
  }
</script>
