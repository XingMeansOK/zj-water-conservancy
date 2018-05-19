<template lang="html">
  <div class="toolbar">
    <span @click="editMapElements"><Icon :size='iconsize' type="edit"></Icon></span>
    <span @click="exportMap"><Icon :size='iconsize' type="printer"></Icon></span>
  </div>
</template>

<script>
export default {
  name: 'Tool',
  props: [ 'editable' ],
  data() {
    return {
      iconsize: 40,
    }
  },
  methods: {
    /**
     * 地图输出打印
     * @return {[type]} [description]
     */
    exportMap() {
      debugger
      this.__global__.olMap.once('postcompose', function(event) {
        var canvas = event.context.canvas;
        if (navigator.msSaveBlob) {
          navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
        } else {
          canvas.toBlob(function(blob) {
            saveAs(blob, 'map.png');
          });
        }
      });
      this.__global__.olMap.renderSync();
    },
    /**
     * 切换至编辑图面元素
     * @return {[type]} [description]
     */
    editMapElements() {
      this.$emit('switch');
    }
  }

}
</script>

<style scoped>
  .toolbar {
    position: absolute;
    /* top: 15px; */
    right: 15px;
    /* width: 300px;
    height: 100px; */
    /* background-color: #f90; */
    display: flex;
    justify-content: center;
  }
  .ivu-icon {
    margin: 10px;
    cursor: pointer;
  }
</style>
