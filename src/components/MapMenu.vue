<template>
      <Sider hide-trigger :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto', background: '#fff', zIndex: '9999'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
              <submenu name="1">
                  <template slot="title">
                      <icon type="ios-navigate"></icon>
                      Item 1
                  </template>
                  <MenuItem name="1-1">Option 1</MenuItem>
                  <MenuItem name="1-2">Option 2</MenuItem>
                  <MenuItem name="1-3">Option 3</MenuItem>
              </submenu>
              <submenu name="2">
                  <template slot="title">
                      <icon type="ios-keypad"></icon>
                      Item 2
                  </template>
                  <MenuItem name="2-1">Option 1</MenuItem>
                  <MenuItem name="2-2">Option 2</MenuItem>
              </submenu>
              <submenu name="3">
                  <template slot="title">
                      <icon type="ios-analytics"></icon>
                      Item 3
                  </template>
                  <MenuItem name="3-1">Option 1</MenuItem>
                  <MenuItem name="3-2">Option 2</MenuItem>
              </submenu>
          </Menu>
      </Sider>
</template>

<script>
// 制图菜单组件

export default {
  name: 'MapMenu',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .ivu-layout-sider:after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: #dddee1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

</style>
