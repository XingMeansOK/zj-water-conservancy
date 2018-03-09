<template>
  <div id="tm">
    <!-- <div :is="current()"></div> -->

    <div :is="type()"></div>
  </div>
</template>
<script>
// import template1 from '../components/Template1';
// import template2 from '../components/Template2';
// export default {
//   components: {
//     'template1': '<template><div>11111</div></template>'
//   },
//   methods:{
//     type () {
//       switch (this.$route.query.type) {
//         case "1":
//           return template1; break;
//         // case "2":
//         //   return template2; break;
//       }
//     }
//   }
//
//
//
// }


//================================================================
  import template1 from '../components/Template1';
  import template2 from '../components/Template2';
  export default {
    // components: {
    //   template1, template2
    // },
    methods: {
      type () {
        switch (this.$route.query.type) {
          case "1":
            return template1; break;
          case "2":
            return template2; break;
          // case "3":
          //   return template3; break;
        }
      }
    },

    //////////////////??????????????
    // watch: {
    //   '$route' () {
    //     debugger
    //     console.log("发现你啦");
    //   }
    // }
  }


</script>
<style>

</style>
