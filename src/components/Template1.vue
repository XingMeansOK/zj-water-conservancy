<template>
  <div>
    <div class="intr-cont">
      <Card class="introduce">
        <p>模板介绍</p>
        <p>blablablabla</p>
        <img src="/static/logo.png"/>
      </Card>
      <div class="data-but-cont">
        <Button class="upload-but" :loading="loading" @click="toloading">
          上传数据
        </Button>
        <Button class="preview-but" :loading="loading" @click="toloading">
          预览数据
        </Button>
      </div>
    </div>
    <Card class="dataformat">
      <p>数据格式说明</p>
      <p>blablabla</p>
      <img src="/static/logo.png"/>
    </Card>

  </div>



</template>
<script>

  export default {
    data () {
      return {
        loading: false
      }
    },
    methods: {
      toloading () {
        this.loading = true
      }

    }


  }


</script>
<style>
  .introduce {
    width: 50%;
  }
  .dataformat {
    width: 80%;
  }
  .intr-cont {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .upload-but, .preview-but {
    height: 60px;
    width: 160px;
    margin-left: 20px;
    margin-top: 20px;

  }
  .data-but-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
