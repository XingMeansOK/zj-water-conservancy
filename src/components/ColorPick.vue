<template>

  <!-- 颜色色盘 -->
  <div class="box open">
    <div class="hd">
      <div class="colorView" v-bind:style="`background-color: ${param.color}`"></div>
    </div>
    <div class="bd">
      <h3>主题颜色</h3>
      <ul class="tColor">
        <li
          v-for="color of tColor"
          v-bind:style="{ backgroundColor: color }"
          v-on:mouseover="hoveColor = color"
          v-on:mouseout="hoveColor = null"
          v-on:click="updataValue(color)"
        ></li>
      </ul>
      <ul class="bColor">
        <li v-for="item of colorPanel">
          <ul>
            <li
              v-for="color of item"
              v-bind:style="{ backgroundColor: color }"
              v-on:mouseover="hoveColor = color"
              v-on:mouseout="hoveColor = null"
              v-on:click="updataValue(color)"
            ></li>
          </ul>
        </li>
      </ul>
      <h3>标准颜色</h3>
      <ul class="tColor">
        <li
          v-for="color of bColor"
          v-bind:style="{ backgroundColor: color }"
          v-on:mouseover="hoveColor = color"
          v-on:mouseout="hoveColor = null"
          v-on:click="updataValue(color)"
        ></li>
      </ul>
    </div>
    <Button type="success" long @click.prevent='backToLayers' style="margin-top:66px">确认</Button>
  </div>
</template>

<script>

  export default {
    name: 'ColorPick',
    props: ['param', 'topMenu'],
    data () {
      return {
        // 鼠标经过的颜色块
        hoveColor: null,
        // 主题颜色
        tColor: ['#000', '#fff', '#eeece1', '#1e497b', '#4e81bb', '#e2534d', '#9aba60', '#8165a0', '#47acc5', '#f9974c'],
        // 颜色面板
        colorConfig: [
          ['#7f7f7f', '#f2f2f2'],
          ['#0d0d0d', '#808080'],
          ['#1c1a10', '#ddd8c3'],
          ['#0e243d', '#c6d9f0'],
          ['#233f5e', '#dae5f0'],
          ['#632623', '#f2dbdb'],
          ['#4d602c', '#eaf1de'],
          ['#3f3150', '#e6e0ec'],
          ['#1e5867', '#d9eef3'],
          ['#99490f', '#fee9da']
        ],
        // 标准颜色
        bColor: ['#c21401', '#ff1e02', '#ffc12a', '#ffff3a', '#90cf5b', '#00af57', '#00afee', '#0071be', '#00215f', '#72349d'],
      }
    },
    components: {
    },
    computed: {
      // 颜色面板
      colorPanel () {
        let colorArr = []
        for (let color of this.colorConfig) {
          colorArr.push(this.gradient(color[1], color[0], 5))
        }
        return colorArr
      }
    },
    methods: {
      /**
       * 点击确认，返回到图层页
       * @return {[type]} [description]
       */
      backToLayers() {
        this.topMenu.toPage( 'layers', this.param );
      },
      updataValue (value) {
        this.param.color = value;
        (this.param.layer === 'PolygonLayer') && (this.param.stylePic = value);
      },
      // 格式化 hex 颜色值
       parseColor (hexStr) {
         if (hexStr.length === 4) {
           hexStr = '#' + hexStr[1] + hexStr[1] + hexStr[2] + hexStr[2] + hexStr[3] + hexStr[3]
         } else {
           return hexStr
         }
       },
       // RGB 颜色 转 HEX 颜色
       rgbToHex (r, g, b) {
         let hex = ((r << 16) | (g << 8) | b).toString(16)
         return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex
       },
       // HEX 转 RGB 颜色
       hexToRgb (hex) {
         hex = this.parseColor(hex)
         let rgb = []
         for (let i = 1; i < 7; i += 2) {
           rgb.push(parseInt('0x' + hex.slice(i, i + 2)))
         }
         return rgb
       },
      // 计算渐变过渡颜色
       gradient (startColor, endColor, step) {
         // 讲 hex 转换为 rgb
         let sColor = this.hexToRgb(startColor)
         let eColor = this.hexToRgb(endColor)
         // 计算R\G\B每一步的差值
         let rStep = (eColor[0] - sColor[0]) / step
         let gStep = (eColor[1] - sColor[1]) / step
         let bStep = (eColor[2] - sColor[2]) / step
         let gradientColorArr = []
         // 计算每一步的hex值
         for (let i = 0; i < step; i++) {
           gradientColorArr.push(this.rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])))
         }
         return gradientColorArr
       },
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul,li,ol{ list-style: none; margin: 0; padding: 0; }
  input{ display: none; }
  .colorBtn{ width: 25px; height: 25px; }
  .colorBtn.disabled{ cursor: no-drop; }
  .box{
     width: 100%; background: #fff; margin-top: 2px; padding: 10px; padding-bottom: 5px;  opacity: 0; transition: all .3s ease;
  }
  .box h3{ margin: 0; font-size: 14px; font-weight: normal; margin-top: 10px; margin-bottom: 5px; line-height: 1; }
  .box.open{ visibility: visible; opacity: 1; text-align: center;}
  .colorView{ height: 30px; transition: background-color .3s ease; margin: 0 auto;}
  .hd .defaultColor{ width: 80px; float: right; text-align: center; border: 1px solid #ddd; cursor: pointer; }
  .tColor li{ width: 25px; height: 25px; display: inline-block; margin: 0 2px; transition: all .3s ease; }
  .tColor li:hover{ box-shadow: 0 0 5px rgba(0,0,0,.4); transform: scale(1.3); }
  .bColor li{
      width: 25px; display: inline-block; margin: 0 2px;
    }
  .bColor li li{ display: block; width: 25px; height: 25px; transition: all .3s ease; margin: 0; }
  .bColor li li:hover{ box-shadow: 0 0 5px rgba(0,0,0,.4); transform: scale(1.3); }

</style>
