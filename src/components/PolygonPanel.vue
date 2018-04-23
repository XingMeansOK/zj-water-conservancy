<template>
    <transition name="scale" mode="out-in">
      <div v-bind:class="{ layercardbox: true }" v-if="front" key="polygon">
        <Card>
            <p slot="title">{{param.name}}</p>
            <span :style="{ cursor: 'pointer', color: 'blue' }" slot="extra" @click.prevent="changeVisibility" >
                {{ visible }}
            </span>
            <Row>
                <ButtonGroup shape="circle">
                    <Button type="primary" @click.prevent="toColorPage">
                        <Icon type="chevron-left"></Icon>
                        颜色
                    </Button>
                    <Button type="primary" @click.prevent="toStylePage">
                        样式
                        <Icon type="chevron-right"></Icon>
                    </Button>
                </ButtonGroup>
            </Row>
            <Row>
              <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">分级设色{{ item + 1 }}</Tag>
              <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">分级设色</Button>
            </Row>
        </Card>
      </div>
      <div v-bind:class="{ layercardbox: true }" v-else key="grade">
        <Card>
            <p slot="title">{{param.name}}</p>
            <span :style="{ cursor: 'pointer', color: 'blue' }" slot="extra" @click.prevent="changeVisibility" >
                {{ visible }}
            </span>
            <Row>
                <ButtonGroup shape="circle">
                    <Button type="primary" @click.prevent="toColorPage">
                        <Icon type="chevron-left"></Icon>
                        颜色
                    </Button>
                    <Button type="primary" @click.prevent="toStylePage">
                        样式
                        <Icon type="chevron-right"></Icon>
                    </Button>
                </ButtonGroup>
                <ButtonGroup shape="circle">
                    <Button type="primary" @click.prevent="toColorPage">
                        <Icon type="chevron-left"></Icon>
                        颜色
                    </Button>
                    <Button type="primary" @click.prevent="toStylePage">
                        样式
                        <Icon type="chevron-right"></Icon>
                    </Button>
                </ButtonGroup>
                <ButtonGroup shape="circle">
                    <Button type="primary" @click.prevent="toColorPage">
                        <Icon type="chevron-left"></Icon>
                        颜色
                    </Button>
                    <Button type="primary" @click.prevent="toStylePage">
                        样式
                        <Icon type="chevron-right"></Icon>
                    </Button>
                </ButtonGroup>
                <ButtonGroup shape="circle">
                    <Button type="primary" @click.prevent="toColorPage">
                        <Icon type="chevron-left"></Icon>
                        颜色
                    </Button>
                    <Button type="primary" @click.prevent="toStylePage">
                        样式
                        <Icon type="chevron-right"></Icon>
                    </Button>
                </ButtonGroup>
            </Row>
            <Row>
              <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">分级设色{{ item + 1 }}</Tag>
              <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">分级设色</Button>
            </Row>
        </Card>
      </div>
    </transition>
</template>

<script>

  export default {
    name: 'PolygonPanel',
    props: ['param', 'topMenu'],
    components: {

    },
    methods: {
      /**
       * 更改图层可见性
       * @return {[type]} [description]
       */
      changeVisibility() {
        this.param.visible = !this.param.visible;
      },
      /**
       * 跳转到颜色选择页
       * @return {[type]} [description]
       */
      toColorPage() {
        this.topMenu.toPage( 'color', this.param );
      },
      /**
       * 跳转到样式选择页
       * @return {[type]} [description]
       */
      toStylePage() {
        this.topMenu.toPage( 'style', this.param );
      },

      handleAdd () {
        // if (this.count.length) {
        //    this.count.push(this.count[this.count.length - 1] + 1);
        // } else {
        //    this.count.push(0);
        // }
        this.front = !this.front;
        var s = this;
        setTimeout( function() {s.front = !s.front}, 2000 )
      },
      handleClose2 (event, name) {
        const index = this.count.indexOf(name);
        this.count.splice(index, 1);
      }
    },
    data () {
      return {
        count: [0, 1, 2],
        front: true,
      }
    },
    computed: {
      visible: function() {
        return this.param.visible? '隐藏' : '显示';
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .colorpick{
    height: 5em;
    width: 5em;
  }

</style>
