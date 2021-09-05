<template lang="pug">
 div
    todoInput
    todoCreateList
</template>

<script>
import todoCreateList from './todoCreateList.vue'
import todoInput from './todoInput.vue'

export default {
     components: {
         todoCreateList, todoInput
     }
}
</script>

<style lang="scss" scoped>

 .todo-Input{
     display: flex;
     flex-direction: column;
 }

</style>