<template>
  <div class="upload-cont">

    <Button id="t" class="upload-but" shape="circle" type="primary" @click="upload">
      <Icon class="icon" type="upload" size=20></Icon>
      <!-- <Icon class="icon" type="ios-cloud-upload-outline" size=20></Icon> -->
      上传数据
      <input class="uploadip" ref="fileinput" type="file" @change="readfls($event)" />
    </Button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      support: ["xlsx", "xlc", "xlm", "xls", "xlt", "xlw", "csv"]
    }
  },
  methods: {
    upload () {
      this.$refs.fileinput.click();
    },
    readfls(ev) {
      var file = ev.target.files[0];
      var filefmt = file.name.split(".").reverse()[0];
      var hz = "."+filefmt;
      var dataname = file.name.replace(hz, "");
      var fmtchkup = false;
      this.support.forEach((item) => {
        if (item === filefmt) {
          fmtchkup = true;
        }
      });
      if (fmtchkup) {
        new Promise((resolve, reject) => {
          var reader = new FileReader();
          reader.onload = (e) => {
            var data = e.target.result;
            var wb = XLSX.read(data, {type: 'binary'});
            var xl_json = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
            console.log(xl_json);
            resolve(xl_json);
          }
          reader.readAsBinaryString(file);
        }).then(
          (json) => {
            this.$emit("uploadata", {"name": dataname, "type": "custom", "data": json});
        });
      }else {
        alert("数据格式错误，请重新选择!");
        // debugger
        // this.$Message.error("数据格式错误");
        //   {
        //   content: '数据格式错误，请重新选择！',
        //   // duration: 2,
        //   // top: 150
        // });
      }
    }
  }
}
</script>
<style scoped>
  .uploadip {
    opacity: 0;
    width: 0px
  }
  /* .upload-but {
    background-color: rgb(73, 80, 96);
    border-color: rgb(73, 80, 96);

  } */
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
   #t:hover {background-color: #004080;}
</style>
