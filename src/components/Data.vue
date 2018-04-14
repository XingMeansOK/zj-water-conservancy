<template>
<div class="backgd">
  <editCard :isShow="isShow" @cancel="editClose" :selectedThead="selectedThead" :selectedTbody="selectedTbody" :selectedFields="selectedFields"/>
    <div  class="cont1-title">
      <p class="template-title">{{templatename}}</p>
      <HR width="100%" color=#f2f2f2 margin-left=20px></HR>
    </div>
    <div class="cont_1">
      <div class="cont2-data">
        <div class="titlist-cont">
          <p class="title">数据列表</p>
          <Card class="data-list-cont" :bordered="false" style="overflow-y:auto">
              <CheckboxGroup  class="data-list" v-model="checkgp" @on-change="checking" v-for="(item, index) in datalist" :key="index"  >
                <Checkbox class="data-item" :label="item.name" size="large" >
                  <span class="dataname">{{item.name}}</span>
                  <span class="datatype" v-if="item.type==='default'">默认数据</span>
                  <span class="datatype" v-if="item.type==='custom'">上传数据</span>
                  <Icon class="delete" type="trash-a" v-if="item.type==='custom'"
                  @click.native.prevent="deleteUpload(item.data,index)"></Icon>
                  <Icon class="edit" v-if="item.type==='custom'" type="edit"
                  @click.native.prevent="editShow(item.data)"></Icon>
                  <Poptip class="datapic" content="提示内容qqqqqqqqqqqqqqqqqqqq" v-if="item.type==='default'">
                    <Icon id="info"  type="information-circled" @click.native.prevent="datainf"></Icon>
                  </Poptip>
                  <HR width="100%" color= #f2f2f2></HR>
                </Checkbox>
              </CheckboxGroup>
          </Card>
        </div>
      </div>
      <div class="cont3-butn">
        <div class="but-cont">
          <uploadCard @uploadata="addata"/>
            <Button id="t" class="mapping-but" shape="circle" type="primary" @click="tomapping">
              <Icon class="icon" type="paintbrush" size=20></Icon>
              去制图
            </Button>
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
import uploadCard from './UploadCard';
import editCard from './EditCard';

// import upload from './Upload';

export default {
  components: {uploadCard, editCard},
  data () {
    return {
      formatpic: '/static/pic/description.png',
      //数据列表显示数据
      datalist: [],
      //选中数据
      checkgp: [],
      //上一步选中数据
      lastcheck: [],
      //默认模板名称
      templatename: '',
      //修改字段弹框显示控制
      isShow: false,
      //设置默认模板数
      defaultNum: 3,
      selectedThead: [],
      selectedTbody: [],
      selectedFields: {}

    }
  },
  created () {
    switch (this.$route.query.type){
      case '1':
        this.__global__.type = 'template1';
        this.templatename = '自然水系模板';
        this.__global__.allData.forEach(item => {
          if(item.template.indexOf("template1") != -1){
            this.datalist.push(item);
          }
        });

        break;
      case '2':
        this.__global__.type = 'template2';
        this.templatename = '水利工程模板';
        this.__global__.allData.forEach(item => {
          if(item.template.indexOf("template2") != -1){
            this.datalist.push(item);
          }
        });
        break;
      case '3':
        this.__global__.type = 'template3';
        this.templatename = '防汛工程模板';
        this.__global__.allData.forEach(item => {
          if(item.template.indexOf("template3") != -1){
            this.datalist.push(item);
          }
        });

        break;
     }
  },
  beforeMount () {
      var _this = this;
      this.__global__.mappingData.forEach(
        item => {
          _this.checkgp.push(item.name);
        });
        this.lastcheck = this.checkgp;
  },
  methods: {
    // selectedThead () {
    //   this.addata()
    // },
    checking (list){
      if (list.length > 3) {
        alert("最多选三个数据！");
        list.pop();
      }else {
        let last = new Set(this.lastcheck);
        let now = new Set(list);
        //选中数据
        if (this.lastcheck.length < list.length) {
          //新选中的数据
          let diff = new Set([...now].filter(x => !last.has(x)));
          let addchk = Array.from(diff);
          if(this.__global__.mappingData.findIndex(item => item.name === addchk[0]) === -1) {
          this.__global__.mappingData.push(this.datalist[this.datalist.findIndex(item => item.name === addchk[0])]);
          console.log(this.__global__.mappingData);
          console.log(list);
          }
        }
        //取消选中数据
        else {
          let diff = new Set([...last].filter(x => !now.has(x)));
          let unchk = Array.from(diff);
          this.__global__.mappingData.splice(this.__global__.mappingData.findIndex(item => item.name === unchk[0]), 1);
          console.log(this.__global__.mappingData);
          console.log(list);
        }
        this.lastcheck = list;
      }
    },
    addata (val) {
      this.datalist.push(val);
      this.__global__.allData.push(val);
      // this.selectedThead = val.data.thead;
      // this.selectedTbody = val.data;
      // this.selectedFields = val.data.fields;
    },
    datainf () {
      //检测冒泡
      // alert("11111");
    },
    tomapping () {
      if (this.__global__.mappingData.length > 0) {
        this.$router.push({path: '/map'});
      }else {
        alert("请选择制图数据！");
      }
    },
    editShow (data) {
      // this.isShow = true;
      this.isShow = !this.isShow;

      this.selectedThead = data.thead;
      this.selectedTbody = data;
      this.selectedFields = data.fields;
    },
    editClose (val) {
      this.isShow = !this.isShow;

      // this.isShow = val;
      // this.isShow = false;
    },
    deleteUpload (data,index) {
      this.datalist.splice(index);
    }
  }
}
</script>
<style >
  .backgd {
    flex: 1;
    background-color: #fff;
    overflow: hidden;
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
  .edit, .delete {
    float: right;
    margin-left: 8px;

  }
  .edit:hover {
    color: #336699;
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
 @media only screen and (max-width : 500px) {
   .cont4-description {
     display: none;
   }
 }
</style>
