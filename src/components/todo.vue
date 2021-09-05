<template lang="pug">
    div.todo
        todoBlock
        todoFooter
</template>

<script>
import todoBlock from './todoBlock.vue'
import todoFooter from './todoFooter.vue'

 export default {
     components: {
         todoBlock, todoFooter
     }

}
</script>

<style lang="scss" scoped>
 .todo{
     margin-top: 100px;
     background: #FFF;
     box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
 }
</style>