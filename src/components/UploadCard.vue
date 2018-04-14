<template>

  <div>
    <Button id="t" class="upload-but" shape="circle" type="primary" @click="showSwitch">
      <Icon class="icon" type="upload" size=20></Icon>
      <span style="{fontsize:20px}">上传数据</span>
    </Button>
  <Modal ref="dataModal" class="dataModal" v-model="show" title="上传数据" width="70%" height="100%"
  :scrollable="true" :mask-closable="false" @on-cancel="cancelEvent">
    <Steps class="step" :current='current' >
       <Step title="选择数据" ></Step>
       <Step title="选择字段" ></Step>
    </Steps>
    <div class="stepCont step1" v-show="showStep1">
      <div class="cont-upload">
        <Button id="t" class="open-but"  type="primary" @click="upload">
          <span>
          <Icon class="icon" type="floder" size=20 color="#000"></Icon>
          <!-- <i class="glyphicon glyphicon-folder-open"/> -->
          选择文件
        </span>
          <input class="uploadip" ref="fileinput" type="file" @change="readfls($event)" hidden="hidden" />
        </Button>
        <input class="showFilename" type="text"  readonly="readonly" v-model="filename">

      </div>
      <!-- <upload @uploadata="addata" @getJSON="getJSON"/> -->
      <Button class="next" @click="nextStep" >下一步</Button>
    </div>
    <div class="stepCont step2" v-show="showStep2">
      <div class="cont-selector">
        <div class="cont-selectItem">
          <div class="cont-selectorSlice">
            <span>属性：</span>
            <Select class="selector" v-model="selected_attr" @on-change="selectChange_attr">
              <Option class="selectOption" v-for="field in thead" :value="field"></Option>
            </Select>
          </div>
          <span class="errorTips" v-show="errorTipsShow_attr">请选择数据属性</span>
        </div>
        <div class="cont-selectItem" >
          <div class="cont-selectorSlice">
            <span>X坐标：</span>
            <Select class="selector" v-model="selected_x" @on-change="selectChange_x">
              <Option class="selectOption" v-for="field in thead" :value="field"></Option>
            </Select>
          </div>
          <span class="errorTips" v-show="errorTipsShow_x">请选择数据X坐标</span>
        </div>
        <div class="cont-selectItem">
          <div class="cont-selectorSlice">
            <span>Y坐标：</span>
            <Select class="selector" v-model="selected_y" @on-change="selectChange_y">
              <Option class="selectOption" v-for="field in thead" :value="field"></Option>
            </Select>
          </div>

          <span class="errorTips" v-show="errorTipsShow_y">请选择数据Y坐标</span>


        </div>
      </div>
      <div class="cont-btn">
        <Button class="btn" @click="returnData">上一步</Button>
        <Button class="btn" @click="clean">清空</Button>
        <Button class="btn" @click="finish">确定</Button>
      </div>

    </div>
    <div class="previewCont" v-if="this.tbody.length>0">
      <table class="tPreview">
        <thead>
          <tr>
            <th> </th>
            <th v-for="i in thead">
              {{i}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i,index) in tbody">
            <th scope="row">{{index}}</th>
            <td v-for="j in thead">{{i[j]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div slot="footer"></div>
  </Modal>
</div>
</template>

<script>
export default {
  data () {
    return {
        support: ["xlsx", "xls",  "csv"],
        //带格式的文件名
        filename: '',
        //不带格式的文件名
        dataname: '',
        //控制modal显示
        show: false,
        //上传数据步骤
        current: 0,
        //步骤控制显示
        showStep1: true,
        showStep2: false,
        //预览excel表头
        thead: [],
        //预览excel内容
        tbody: [],
        //选择字段
        selected_attr: '',
        selected_x: '',
        selected_y: '',
        //选择字段提示
        errorTipsShow_attr: false,
        errorTipsShow_x: false,
        errorTipsShow_y: false,
        //记录选择字段
        selectedField: {},
        clickOKCount: 0
    }
  },
  watch:{
    current: function(cut){
      switch(cut) {
        case 0 :
        this.showStep1 = true;
        this.showStep2 = false;
        break;
        case 1:
        this.showStep1 = false;
        this.showStep2 = true;
        break;

      }
    },
    selected_attr: function(val){
      if(this.clickOKCount>0) {
        if (!val){
          this.errorTipsShow_attr = true;
          console.log(this.errorTipsShow_attr);

        }else {
          this.errorTipsShow_attr = false;

        }
      }
    },
    selected_x: function(val){
      if(this.clickOKCount>0) {
        if (!val){
          this.errorTipsShow_x = true;
          console.log(this.errorTipsShow_x);
        }else {
          this.errorTipsShow_x = false;

        }
      }
    },
    selected_y: function(val){
      if(this.clickOKCount>0) {
        if (!val){
          this.errorTipsShow_y = true;
        }else {
          this.errorTipsShow_y = false;

        }
      }
    },
  },

  methods: {
    upload () {
      this.$refs.fileinput.click();
    },
    readfls(ev) {
      var file = ev.target.files[0];
      //文件格式
      var filefmt = file.name.split(".").reverse()[0];
      //文件名
      this.filename = file.name;
      var hz = "."+filefmt;
      var dataname = file.name.replace(hz, "");
      this.dataname = dataname;
      var fmtchkup = false;
      //检查格式
      this.support.forEach((item) => {
        if (item === filefmt) {
          fmtchkup = true;
        }
      });
      //读取文件
      if (fmtchkup) {
        new Promise((resolve, reject) => {
          var reader = new FileReader();
          reader.onload = (e) => {
            var data = e.target.result;
            var wb = XLSX.read(data, {type: 'binary'});
            //转为json格式
            var xl_json = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
            // console.log(xl_json);
            resolve(xl_json);
          }
          reader.readAsBinaryString(file);
        }).then(
          (json) => {
            if(json && json.length>0) {
              var tableHead = [];
              for (let item in json[0]) {
                tableHead.push(item);
              }
              this.thead = tableHead;
              this.tbody = json;
            }
        });
      }else {
        this.filename = "";
        this.tbody = "";
        this.thead = "";
        alert("数据格式错误，请重新选择!");

      }
    },
    //是否显示上传数据弹窗,初始化
    showSwitch () {
      this.show = !this.show;
      this.getInit();
    },
    //上传数据下一步
    nextStep () {
      if(this.filename !== ''){
        this.current = this.current===1? 1 :this.current+1;
      }else {
        alert("请选择数据文件!");
      }
    },
    //上传数据上一步
    returnData () {
      this.current = this.current===0? 0 :this.current-1;
      this.clean();
      this.clickOKCount = 0;

    },
    finish () {
      this.clickOKCount ++;
      if (this.selected_x && this.selected_y && this.selected_attr) {
        //设置上传数据选择字段属性
        this.tbody.fields = this.selectedField;
        //设置上传数据表头属性
        this.tbody.thead = this.thead;
        //向data传递json,用户上传数据保存在“data”中，
        this.$emit("uploadata", {"name": this.dataname, "type": "custom", "data": this.tbody});
        // this.__global__.uploadData.push({"name": this.dataname, "type": "custom", "data": this.tbody});
        //data传递选择字段
        // this.$emit("selectedField", this.selectedField);

        this.show = false;
        this.clickOKCount = 0;

      }
      else if (!this.selected_x) {
        this.errorTipsShow_x = true;
        if (!this.selected_y) {
          this.errorTipsShow_y = true;
          if (!this.selected_attr) {
            this.errorTipsShow_attr = true;
          }
        }
      }



    },
    //上传数据第二步清空
    clean () {
      this.selected_attr = '';
      this.selected_x = '';
      this.selected_y = '';
    },
    selectChange_attr (val) {
      this.selectedField.attr=val;
    },
    selectChange_x (val) {
      this.selectedField.x=val;
    },
    selectChange_y (val) {
      this.selectedField.y=val;
    },
    getInit () {
      this.filename= '',
      //不带格式的文件名
      this.dataname= '',
      //上传数据步骤
      this.current= 0,
      //步骤控制显示
      this.showStep1= true,
      this.showStep2= false,
      //预览excel表头
      this.thead= [],
      //预览excel内容
      this.tbody= [],
      //选择字段
      this.selected_attr= '',
      this.selected_x= '',
      this.selected_y= '',
      //选择字段提示
      this.errorTipsShow_attr= false,
      this.errorTipsShow_x= false,
      this.errorTipsShow_y= false,
      //记录选择字段
      this.selectedField= {},
      this.clickOKCount= 0
    },
    cancelEvent() {
      this.getInit();
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .stepCont {
    height: 30%
  }
  .previewCont {
    height: 100%;
    background-color: #d9d9d9;
  }
  .step1 {
    display: flex;
    flex-direction: row;
  }
  .next {
    background-color: rgb(73, 80, 96);
    border-color: rgb(73, 80, 96);
    color: #f2f2f2;
  }
  .tPreview, th, td, tr{
    border: 1px solid #f2f2f2;
    min-width: 100%;
    text-align: center;
  }
  .selector {
    width: 60%;
  }

  .upload-but {
    width: 150px;

  }
  .mapping-but {
    height: 40px;
    width: 100%;
    margin: 10px;
    font-size: 13px;
    background-color: rgb(73, 80, 96);
    border-color: rgb(73, 80, 96);
  }
  .icon {
    margin-right: 5px
  }
  .cont-upload {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 200%;
  }
   #t:hover {background-color: #004080;}
   .showFilename{
     width: 50%;
     height: 100%;
   }
   .cont-selector {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
   }
   .cont-btn {
     display: flex;
     justify-content: flex-end;
   }
   .btn {
     margin: 5px;
     background-color: rgb(73, 80, 96);
     border-color: rgb(73, 80, 96);
     color: #f2f2f2
   }
   .cont-selectItem {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
   }
   .cont-selectorSlice {
     width: 100%;
     display: flex;
     flex-direction: row;
     align-items: center;
   }
   .errorTips {
     color: red;
   }
   .open-but {
     width: 20%;
     height: 100%;
     background-color: rgb(73, 80, 96);
     border-color: rgb(73, 80, 96);
     margin-right: 10px;
     align-items: center;
   }
   .step {
     width: 90%;
     margin-bottom: 20px;
   }
   .ivu-steps-head {
     color: rgb(73, 80, 96);
   }
</style>
