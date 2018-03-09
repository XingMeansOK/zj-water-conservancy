<template lang="html">
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'chartlayer',
  props: ['params'],
  data() {
    return {
      _olLayer: null, // 用来在内部保存layer的引用
    }
  },
  created() {

    /**
     * openlayers图层对象
     */
    this._olLayer = new ol.layer.Tile({
        extent: [118.02252448821446,  27.04527653758214, 123.15774781361063, 31.18247145139634],
        source: new ol.source.WMTS(options)
    });

    var params = this.params

    // 图层对象都要定义一个update函数，用于实时更新制图参数
    this._olLayer.update = function() {
      console.log( params );
    }

    // 将制图参数和图层对象绑定
    this.params.__myob__.dep.addSub( this._olLayer );

    // 将当前图层添加到ol.Map中
    this.$nextTick(t => this.$parent.$emit("addtile", this._olLayer));

  },
  mounted() {

  }
}
</script>

<style lang="css">
</style>
