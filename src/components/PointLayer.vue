<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

  const extent =  [118.02252448821446,  27.04527653758214, 123.15774781361063, 31.18247145139634];
  const esrijsonFormat = new ol.format.EsriJSON();

  export default {
    name: 'Pointlayer',
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

      /**
       * 检查字符串是否是数字
       * @param  {[type]} theObj [description]
       * @return {[type]}        [description]
       */
      function checkNumber(theObj) {
        var reg = /^[0-9]+.?[0-9]*$/;
        if (reg.test(theObj)) {
          return true;
        }
        return false;
      }

      if( typeof param.url === "string" ) {
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

                  // 保存可以用于分级符号的字段
                  param.fields = [];
                  debugger
                  for (var variable in features[0].values_) {
                    // 如果字段的属性值是数字的话，就可以用来做分级符号
                    if (features[0].values_.hasOwnProperty(variable) && checkNumber( features[0].values_[ variable ] ) ) {
                      let max, min;
                      max = min = features[0].values_[ variable ];
                      features.forEach( function( feature, index ) {
                        if( +feature.values_[ variable ] > max ) {
                          max = +feature.values_[ variable ];
                        }
                        if( +feature.values_[ variable ] < min ) {
                          min = +feature.values_[ variable ];
                        }
                      } )

                      // 保存可以用来做分级设色的字段（值为数字）和该字段值的最大值和最小值
                      param.fields.push( {
                        field: variable,
                        max: max,
                        min: min,
                      } );
                    }
                  }
                }

                // 通知顶层数据已经添加到地图上了
                param.container.doneRequestParams++;
              }
            }});
          },
        });
      } else if( typeof param.url === "object" ) {
        var vectorSource = new ol.source.Vector({
          features: (new ol.format.GeoJSON()).readFeatures(param.url)
        });
        // 通知顶层数据已经添加到地图上了
        param.container.doneRequestParams++;
      }



     // 初始的样式
     var initialStyle = new ol.style.Style({
       image: new ol.style.Icon( this.param )
       // image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
       //    color: '#8959A8',
       //    crossOrigin: 'anonymous',
       //    src: 'https://openlayers.org/en/v4.6.4/examples/data/dot.png'
       //  }))
     });

     this._olLayer = new ol.layer.Vector({
       source: vectorSource,
       style: initialStyle
     });

      // 图层对象都要定义一个update函数，用于实时更新制图参数
      this._olLayer.update = function() {
        this.setStyle( new ol.style.Style({
          image: new ol.style.Icon( param )
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
