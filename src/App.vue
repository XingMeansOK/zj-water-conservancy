<template>
  <div id="app">

    <div class="layout">
      <layout :style="{height: '100vh'}">
          <Header>
              <Menu ref="mapmenu" mode="horizontal"  active-name="activeName" theme="dark">
              <!-- <Menu ref="mapmenu" mode="horizontal"  active-name="activeName" theme="primary"> -->

                <MenuItem  name="home">
                    <router-link tag="span" to="/">
                      <Icon type="images" class="icon"></Icon>
                      模板
                    </router-link>
                </MenuItem>
                <MenuItem name="data">
                    <router-link tag="span" to="/data">
                      <Icon type="stats-bars" class="icon"></Icon>
                      数据
                    </router-link>
                </MenuItem>
                <MenuItem name="map">
                    <router-link tag="span" to="/map">
                      <Icon type="map" class="icon"></Icon>
                      地图
                    </router-link>
                </MenuItem>
              </Menu>
          </Header>
          <transition name="slide-fade">
            <!-- <router-view name="template1"/> -->
            <router-view/>
          </transition>

      </layout>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
        activeName: 'map'
    }
  },
  created () {
    // 页面初始化时默认的active menuitem，根据路由决定
    this.activeName = this.$route.path.slice(1);
  },
  watch: {
    '$route' () {
      this.$refs.mapmenu.currentActiveName = this.$route.path.slice(1) || 'home';
    }
  }
}
</script>

<style>
.q {
  float: right;
}

  ul.ivu-menu > li > span {
    display: inline-block;
    height: inherit;
  }

  #app{padding: 0px;}
  .layout{
      background: #f5f7f9;
      position: relative;
      overflow: hidden;
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .ivu-layout-header {
    height: 60px;
    padding:0;
  }
  .icon {
    margin-right: 5px;
  }
  /* .mapping-but {
    height: 40px;
    width: 150px;
    margin: 10px;
    font-size: 13px;
    background-color: rgb(73, 80, 96);
    border-color: rgb(73, 80, 96);
  } */

</style>
