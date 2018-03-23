<template>
<div class="backgd">

    <div class="cont1-title">
      <p class="template-title">{{templatename}}</p>
      <HR width="100%" color=#f2f2f2 margin-left=20px></HR>
    </div>
    <div class="cont_1">
      <div class="cont2-data">
        <div class="titlist-cont">
          <p class="title">数据列表</p>
          <Card class="data-list-cont" :bordered="false" style="overflow-y:scroll">

            <!-- <Scroll height=400 > -->

              <CheckboxGroup  class="data-list" v-model="checkgp" @on-change="checking" v-for="item in datalist" :key="item.id">
                <Checkbox class="data-item" :label="item.name" size="large" >
                  <span class="dataname">{{item.name}}</span>
                  <span class="datatype" v-if="item.type==='default'">默认数据</span>
                  <span class="datatype" v-if="item.type==='custom'">上传数据</span>
                  <Poptip class="datapic" content="提示内容" v-if="item.type==='default'">
                    <Icon id="info"  type="information-circled" @click.native.prevent="datainf"></Icon>
                  </Poptip>
                  <HR width="100%" color= #f2f2f2></HR>
                </Checkbox>
              </CheckboxGroup>

           <!-- </Scroll> -->
          </Card>
        </div>
      </div>
      <div class="cont3-butn">
        <div class="but-cont">
          <upload @uploadata="addata"/>
          <router-link :to="{path:'map'}">
            <Button id="t" class="mapping-but" shape="circle" type="primary">
              <Icon class="icon" type="paintbrush" size=20></Icon>
              去制图
            </Button>
         </router-link>
         </div>
      </div>
      <div class="cont4-description">
        <div class="data-format">
          <p  class="title">数据格式说明</p>
          <p class="formatdcp"> 上传数据支持xlsx、csv格式，数据放置在Sheet1.</p>
          <Card :bordered="false">
            <img class="formatpic" :src="formatpic">
          </Card>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import upload from './Upload';
export default {
  components: {upload},
  data () {
    return {
      formatpic: '/static/description.png',
      datalist: [],
      checkgp: [],
      lastcheck: [],
      templatename: ''
    }
  },
  created () {
    switch (this.$route.query.type){
      case '1':
        this.__global__.type = 'template1';
        this.templatename = '自然水系模板';
        this.datalist = [
          {"id":"5","type":"default","name":"河流","geotype":"esriGeometryPolygon","address":" http://114.215.249.116:6080/arcgis/rest/services/zjsl/heliu/MapServer"},
          {"id":"6","type":"default","name":"湖泊","geotype":"esriGeometryPolygon","address":"http://114.215.249.116:6079/arcgis/rest/services/zjsl/hupo/MapServer"}
        ];
        break;
      case '2':
        this.__global__.type = 'template2';
        this.templatename = '水利工程模板';
        this.datalist = [
          {"id":"0","type":"default","name":"水库","geotype":"esriGeometryPolygon","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuiku/MapServer"},
          {"id":"1","type":"default","name":"泵站","geotype":"esriGeometryPoint","address":"http://114.215.249.116:6079/arcgis/rest/services/zjsl/bengzhan/MapServer"},
          {"id":"2","type":"default","name":"堤防工程","geotype":"esriGeometryPolyline","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/difanggongcheng/MapServer"},
          {"id":"3","type":"default","name":"灌区工程","geotype":"esriGeometryPolygon","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/guanqugongcheng/MapServer"},
          {"id":"7","type":"default","name":"农村供水工程","geotype":"esriGeometryPoint","address":"http://114.215.249.116:6079/arcgis/rest/services/zjsl/nongcungongshuigongcheng/MapServer"},
          {"id":"9","type":"default","name":"水电站","geotype":"esriGeometryPoint","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuidianzhan/MapServer"},
          {"id":"10","type":"default","name":"水文测站","geotype":"esriGeometryPoint","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuiwencezhan/MapServer"},
          {"id":"11","type":"default","name":"水闸","geotype":"esriGeometryPolyline","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuizha/MapServer"},
          {"id":"12","type":"default","name":"围垦","geotype":"esriGeometryPolygon","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/weiken/MapServer"},
          {"id":"13","type":"default","name":"引调水","geotype":"esriGeometryPolyline","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/yindiaoshui/MapServer"},
        ];
        break;
      case '3':
        this.__global__.type = 'template3';
        this.templatename = '防汛工程模板';
        this.datalist = [
          {"id":"2","type":"default","name":"堤防工程","geotype":"esriGeometryPolyline","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/difanggongcheng/MapServer"},
          {"id":"11","type":"default","name":"水闸","geotype":"esriGeometryPolyline","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/shuizha/MapServer"},
          {"id":"12","type":"default","name":"围垦","geotype":"esriGeometryPolygon","address":"http://114.215.249.116:6080/arcgis/rest/services/zjsl/weiken/MapServer"},
        ];
        break;
     }
  },
  methods: {
    checking (list){
      let last = new Set(this.lastcheck);
      let now = new Set(list);
      if (this.lastcheck.length < list.length) {
        let diff = new Set([...now].filter(x => !last.has(x)));
        let addchk = Array.from(diff);
        this.__global__.mappingData.push(this.datalist[this.datalist.findIndex(item => item.name === addchk[0])]);
        console.log(this.__global__.mappingData);
      }
      else {
        let diff = new Set([...last].filter(x => !now.has(x)));
        let unchk = Array.from(diff);
        this.__global__.mappingData.splice(this.__global__.mappingData.findIndex(item => item.name === unchk[0]), 1);
        console.log(this.__global__.mappingData);
      }
      this.lastcheck = list;
    },
    addata (data) {
      this.datalist.push(data);
      console.log(this.datalist);
    },
    datainf () {
      // alert("11111");
      // console.log("2222");
    }
  }
}
</script>
<style >
  .backgd {
    flex: 1;
    background-color: #fff;
    overflow: scroll;
  }
  .cont_1 {
    display: flex;
    flex: 1;

    flex-direction: row;
    justify-content: space-between;
  }
  .cont1-title {
    /* background-color: #ecf2f9; */
  }
  .cont2-data {
    /* background-color: #ccc; */
    width: 40%;
    height: 100%;
  }
  .cont3-butn{
    /* background-color: #c6d9ec; */
    width: 20%;
  }
  .cont4-description {
    /* background-color:  #336699; */
    width: 40%;
  }
  .template-title {
    font-size: 30px;
    padding: 2px;
    margin-left: 20px;
    /* margin-left: 20px;
    margin-bottom: 20px; */
    color: rgb(23,30,58);
    font-weight: bold;
  }
  .data-list-cont {
    width: 100%;
     height: 400px;
  }
  .titlist-cont {
    margin-top: 2px;
    margin-left: 20px;
    margin-right: 20px;
    height: 400px;
  }
  .data-list {
    display: flex;
    flex-direction: column;

  }
  .data-item {
    padding: 6px;
    /* background-color: #f2f2f2; */
  }
  .upload-but, .mapping-but {
    height: 40px;
    width: 150px;
    margin: 10px;
    font-size: 13px;
    background-color: rgb(73, 80, 96);
    border-color: rgb(73, 80, 96);
  }
  .but-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
  .title {
    font-size: 21px;
    padding: 2px;
    color: rgb(35,53,77);
    font-weight: bold;
    /* background-color: #ffebcc; */
  }
  .listbut-cont {
    display: flex;
    flex-direction: row;
  }

  .datapic {
    width: 20px;
    margin-left: 8px;
    float: right;
  }
 .data-format {
   margin-right: 20px;
   margin-left: 20px;

 }
 .formatpic {
   width: 80%;
   height: 80%
 }
 .icon {
   margin-right: 5px
 }
 .datatype {
   font-size: 10px;
   margin-left: 5px;

   color: #ccc;
 }
 .dataname {
   margin-left: 5px;
   font-size: 16px;
   color: #000;
 }
 .formatdcp {
   font-size: 10px;
 }
 #t:hover {
   background-color: #004080;
 }
 #info {
   z-index: 10;
 }
</style>
