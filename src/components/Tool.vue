<template lang="html">
  <div class="toolbar">
    <div v-if="editable === 'feature'" :class = "{ 'using': draw === 'arrow' }" @click="drawChangeTo('arrow')"><Icon :size='iconsize' type="arrow-graph-up-right"></Icon></div>
    <div :class = "{ 'current': editable === 'label' }" @click="editMapElements('label')"><Icon :size='iconsize' type="android-textsms"></Icon></div>
    <div :class = "{ 'current': editable === 'map' }" @click="editMapElements('map')"><Icon :size='iconsize' type="map"></Icon></div>
    <div :class = "{ 'current': editable === 'feature' }" @click="editMapElements('feature')"><Icon :size='iconsize' type="earth"></Icon></div>
    <div @click="editMapElements('print')"><Icon :size='iconsize' type="printer"></Icon></div>
  </div>
</template>

<script>
export default {
  name: 'Tool',
  props: [ 'editable', 'draw' ],
  data() {
    return {
      iconsize: 35,
    }
  },
  methods: {
    /**
     * 地图输出打印
     * @return {[type]} [description]
     */
    exportMap() {
      this.$router.push({path: '/print'});
    },
    /**
     * 切换至编辑图面元素
     * @param [string] type 要转换的模式字符串
     * @return {[type]} [description]
     */
    editMapElements( type ) {
      this.$emit( 'switch', type );
    },
    /**
     * 选择涂鸦的类型
     * @param  {string} type 选择的涂鸦类型
     * @return {[type]}      [description]
     */
    drawChangeTo( type ) {
      this.$emit( 'draw', type );
    }
  }

}
</script>

<style scoped>
  .toolbar {
    position: absolute;
    top: 75px;
    right: 15px;
    /* width: 300px;
    height: 100px; */
    /* background-color: #f90; */
    display: flex;
    justify-content: center;
  }
  .toolbar > div {
    border-radius: 50%;
    background-color: #56aee2;
    margin: 0 4px;
    width: 55px;
    display: flex;
    justify-content: center;
  }
  .toolbar > div.current {
    background-color: #f90;
  }
  .toolbar > div.using {
    background-color: #0f0;
  }
  .ivu-icon {
    margin: 10px auto;
    cursor: pointer;
    color: #fff;
  }
</style>
