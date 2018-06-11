<template>
  <div>
    <div class="template-card" :intrduce="intrduceInfo">
    <!-- <Card class="template-card" :intrduce="intrduceInfo"> -->
      <!-- <Icon class="template-icon" :type="name" :color="color" :size= "size" /> -->
      <img class="template-pic" :src="pic" />
      <div class="temInfo">
        <div class="cont-iconname">
          <Icon class="temicon" type="image" size=20></Icon>
          <p class="template-name">{{name}}</p>
        </div>
        <div class="cont-iconname">
          <Icon class="temicon" type="edit" size=18></Icon>
          <p class="template-descp">{{discription}}</p>
        </div>
        <div class="cont-iconname" v-if="temtype==='custom'">
          <Icon class="temicon" type="cube" size=17></Icon>
          <p class="template-category">{{category}}</p>
        </div>
        <div class="cont-iconname">
          <Icon class="temicon" type="person" size=18 v-if="temtype==='custom'"></Icon>
          <p class="template-author">{{author}}</p>
        </div>
        <div class="cont-iconname">
          <Icon  class="temicon" type="android-time" size=18 v-if="temtype==='custom'"></Icon>
          <p class="template-time">{{time}}</p>
        </div>
        <div class="cont-iconname">
          <Icon class="temicon" type="android-globe" size=18 v-if="right==='公开'"></Icon>
          <Icon class="temicon" type="locked" size=18 v-if="right==='个人'"></Icon>
          <p class="template-right"  v-if="right==='公开'">公开</p>
          <p class="template-right" v-if="right==='个人'">个人</p>
        </div>
      </div>




    <!-- </Card> -->
  </div>

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
      name: {
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
      },
      discription: {
        type: [String]
      },
      right: {
        type: [String]
      },
      temtype: {
        type: [String]
      },
      author: {
        type: [String]
      },
      time: {
        type: [String]
      },
      category: {
        type: [String]
      },


    }

  }
</script>
<style>
  .template-card {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #fff;
    opacity: 1;
    /* margin-left: 10% */
    /* border-radius: 20px; */
    /* position: absolute; */
    box-shadow:2px 2px 3px #aaaaaa;


  }
  .template-name {
    font-size: 22px;
    text-align: left;
    margin-left: 12px;
    /* color: rgb(35,53,77); */
    color: rgb(73, 80, 96);

  }
  .template-descp, .template-category, .template-author, .template-time, .template-right {
    font-size: 14px;
    margin-left: 15px;
    text-align: left;
    color:#797979;

  }
  .template-right {
    font-size: 14px;
    margin-left: 15px;
    text-align: left;

  }
  .template-pic {
    width: 100%;
    /* margin-top: 10px; */
  }
  .template-icon {
    /* background-color: #000 */
  }
  .cont-iconname {
    display: flex;
    flex-direction: row;
    align-items:baseline;
    margin-top: 3px;
    /* background-color:#000 */



  }
  .temicon {
    color: rgb(87,163,243);
    margin-left: 5px;
  }
  .temInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }

</style>
