<template lang="pug">
  .container
    router-view

</template>

<script>
import todo from './components/todo.vue'

export default {
  name: 'app',
  components: {
    todo
  },
  data () {
    return {

    }
  }
}
</script>


<style lang="scss">
 body{
   font-family: "Helvetica Neue", Helvetis, sans-serif;
   font-size: 16px;
   line-height: 1.42;
   -webkit-font-smoothing: antiliased;
   font-weight: 300;
   background: #f5f5f5;
 }

 .container{
   width: 600px;
   margin: 0 auto;
 }

 ul{
   padding: 0;
   margin: 0;
   
   li{
     list-style: none;
   }
 }

* {
  box-sizing: border-box;
}
</style>
