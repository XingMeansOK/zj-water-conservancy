<template>
  <div>
    <Card class="template-card">
      <Icon class="template-icon" :type="name" :color="color" :size= "size" />
      <img class="template-pic" :src="pic" />
      <p class="template-name">{{label}}</p>
    </Card>
  </div>

</template>

<script>

  export default {
    props: {
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
    width: 220px;
    height: 200px;
    text-align: center;
  }
  .template-name {
    font-size: 16px;
    text-align: center;
    color: rgb(35,53,77);

  }
  .template-pic {
    width: 70%
  }
  .template-icon {
    /* background-color: #000 */
  }

</style>
