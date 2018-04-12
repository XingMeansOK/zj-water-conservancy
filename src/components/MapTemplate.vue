<template>
  <div>
    <Card class="template-card" :intrduce="intrduceInfo">
      <!-- <Icon class="template-icon" :type="name" :color="color" :size= "size" /> -->
      <img class="template-pic" :src="pic" />
      <p class="template-name">{{label}}</p>
    </Card>
  </div>

</template>

<script>

  export default {
    props: {
      intrduceInfo: {
        type: [String]
      },
      pic: {
        type: [String]
      },
      label: {
        type: [String]
      },
      name: {
        type: [String]
      },
      size: {
        type: [String, Number]
      },
      color: {
        type: [String]
      }
    }

  }
</script>
<style>
  .template-card {
    /* width: 60%; */
    height: 100%;
    text-align: center;
    background-color: #4d6166;
    /* margin-left: 10% */
    border-radius: 20px;
    /* position: absolute; */


  }
  .template-name {
    font-size: 22px;
    text-align: center;
    /* color: rgb(35,53,77); */
    color: #e2e8e9

  }
  .template-pic {
    width: 100%;
    margin-top: 10px;
  }
  .template-icon {
    /* background-color: #000 */
  }

</style>
