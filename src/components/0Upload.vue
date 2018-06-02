<template>
  <!-- <input type="text"  readonly="readonly" v-model="filename"> -->
  <!-- <input class="uploadip" ref="fileinput" type="file" @change="readfls($event)" /> -->

  <div class="upload-cont">
    <Button id="t" class="upload-but"  type="primary" @click="upload">
      <!-- <Icon class="icon" type="upload" size=20></Icon> -->
      <span>选择文件</span>
      <input class="uploadip" ref="fileinput" type="file" @change="readfls($event)" hidden="hidden" />
    </Button>
    <input class="showFilename" type="text"  readonly="readonly" v-model="filename">

  </div>
</template>
<script>
export default {
  data () {
    return {
      support: ["xlsx", "xlc", "xlm", "xls", "xlt", "xlw", "csv"],
      filename: ''
    }
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
            console.log(xl_json);
            resolve(xl_json);
          }
          reader.readAsBinaryString(file);
        }).then(
          (json) => {
            //向uploadcard传递
            this.$emit("uploadata", {"name": dataname, "type": "custom", "data": json});
            this.$emit("getJSON", json);
        });
      }else {
        alert("数据格式错误，请重新选择!");
      }
    }
  }
}
</script>
<style scoped>

  .upload-but {
    width: 50%


  }
  .mapping-but {
    height: 40px;
    width: 150px;
    margin: 10px;
    font-size: 13px;
    background-color: rgb(73, 80, 96);
    border-color: rgb(73, 80, 96);
  }
  .icon {
    margin-right: 5px
  }
  .upload-cont {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
   #t:hover {background-color: #004080;}
   .showFilename{
     width: 80%;
     height: 70%;
   }
</style>
