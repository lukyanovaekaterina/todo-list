<template lang="pug">
    .todo-list
        .content
            ul.list
                li.item(v-for="todo in todos" :key="todo.id")
                    todoListItem(
                        :todo="todo"
                    )
                    taskBlock

</template>

<script>
import todoListItem from './todoListItem.vue'
import taskBlock from './task/taskBlock.vue'

export default {
props: {
    todos: Array
},
components: {
    todoListItem,
    taskBlock
},
methods: {
}
}
</script>


<style lang="scss" scoped>
 .todo-list{
     width: 100%;
 }

   .list {
    font-size: 24px;
    border-bottom: 1px solid #ededed;
    background-color: #ffffff;
  }
  .item {
    border-bottom: 1px solid #ededed;
    &:last-child {
    border-bottom: 0 none;
    }
  }

  

</style>