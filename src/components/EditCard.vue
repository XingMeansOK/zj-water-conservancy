<template>
  <div>
  <Modal ref="editModal" class="editModal" v-model="show" :isShow="isShow" title="修改字段" width="70%" height="100%"
  :scrollable="true" @on-cancel="cancelEvent" :tbody="selectedTbody" :fields="selectedFields" :dataname="dataname">
    <div class="stepCont step2">
      <div class="cont-selector">
        <div class="cont-selectItem">
          <div class="cont-selectorSlice">
            <span>属性：</span>
            <Select class="selector" v-model="selectedFields.attr" @on-change="selectChange_attr">
              <Option class="selectOption" v-for="(field,index) in selectedThead" :value="field" :key="index"></Option>
            </Select>
          </div>
          <span class="errorTips" v-show="errorTipsShow_attr">请选择数据属性</span>
        </div>
        <div class="cont-selectItem" >
          <div class="cont-selectorSlice">
            <div class="cont-tips">
              <span>经度：</span>
              <span>（X坐标）</span>
            </div>
            <Select class="selector" v-model="selectedFields.x" @on-change="selectChange_x">
              <Option class="selectOption" v-for="(field,index) in selectedThead" :value="field" :key="index"></Option>
            </Select>
          </div>
          <span class="errorTips" v-show="errorTipsShow_x">请选择数据经度</span>
        </div>
        <div class="cont-selectItem">
          <div class="cont-selectorSlice">
            <div class="cont-tips">
              <span>纬度：</span>
              <span>（Y坐标）</span>
            </div>
            <Select class="selector" v-model="selectedFields.y" @on-change="selectChange_y">
              <Option class="selectOption" v-for="(field,index) in selectedThead" :value="field" :key="index"></Option>
            </Select>
          </div>
          <span class="errorTips" v-show="errorTipsShow_y">请选择数据纬度</span>
        </div>
      </div>
      <div class="cont-btn">
        <Button class="btn" @click="clean">清空</Button>
        <Button class="btn" @click="finish">确定</Button>
        <Button class="btn" @click="cancel">取消</Button>
      </div>
    </div>
    <div class="previewCont"  v-if="selectedTbody.length>0">
      <table class="tPreview">
        <thead>
          <tr>
            <th> </th>
              <th v-for="(i,index) in selectedThead" :key="index">
              {{i}}
            </th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(i,index) in selectedTbody" :key="index">
            <th scope="row">{{index}}</th>
            <td v-for="(j,index) in selectedThead" :key="index">{{i[j]}}</td>
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
  props: {
    isShow: [Boolean],
    selectedThead: [Array],
    selectedTbody: [Array],
    selectedFields: [Object],
    dataname: [String]
  },
  data () {
    return {
        //控制modal显示
        show: false,
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
        allSelectedField: {},
        clickOKCount: 0
    }
  },

  watch:{
    isShow: function (val) {
      this.show = !this.show;
      // this.show = false;
    }
  },

  methods: {
    cancelEvent() {
      this.$emit("cancel", false);
      this.show = false;
    },
    finish () {
      this.clickOKCount ++;
      if (this.selectedFields.x && this.selectedFields.y && this.selectedFields.attr) {
        //向data传递json,用户上传数据保存在“data”中，
        this.$emit("changefield", {"name": this.dataname, "fields": this.allSelectedField});
        this.show = false;
        this.clickOKCount = 0;
      }
      else if (!this.selectedFields.x) {
        this.errorTipsShow_x = true;
        if (!this.selectedFields.y) {
          this.errorTipsShow_y = true;
          if (!this.selectedFields.attr) {
            this.errorTipsShow_attr = true;
          }
        }
      }



    },
    //上传数据第二步清空
    clean () {
      this.$emit("cleanSelect",null);
    },
    selectChange_attr (val) {
      this.allSelectedField.attr = val;
      if(this.clickOKCount>0) {
        if (!val){
          this.errorTipsShow_attr = true;
        }else {
          this.errorTipsShow_attr = false;
        }
      }

    },
    selectChange_x (val) {
      this.allSelectedField.x=val;
      if(this.clickOKCount>0) {
        if (!val){
          this.errorTipsShow_x = true;
        }else {
          this.errorTipsShow_x = false;
        }
      }
    },
    selectChange_y (val) {
      this.allSelectedField.y=val;
      if(this.clickOKCount>0) {
        if (!val){
          this.errorTipsShow_y = true;
        }else {
          this.errorTipsShow_y = false;
        }
      }
    },
    cancel () {
      this.show = false;
      this.getInit();
    },
    getInit () {
      //控制modal显示
      this.show= false;
      //预览excel表头
      this.thead= this.selectedThead;
      //预览excel内容
      this.tbody= this.selectedTbody;
      //选择字段
      this.selected_attr= this.selectedFields.attr;
      this.selected_x= this.selectedFields.x;
      this.selected_y= this.selectedFields.y;
      //选择字段提示
      this.errorTipsShow_attr= false;
      this.errorTipsShow_x= false;
      this.errorTipsShow_y= false,
      //记录选择字段
      this.allSelectedField= {};
      this.clickOKCount= 0;
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
     height: 80%;
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
     height: 80%;
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
   .cont-tips {
     display: flex;
     flex-direction: column;
     align-items: center;
   }
</style>
