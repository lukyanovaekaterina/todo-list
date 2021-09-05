<template lang="pug">
    .todo-item
        label.label
            .input-block
                input(
                    type="checkbox"
                ).input
            .title {{todo.name}}
        .button
            button(
                 type="button"
                 @click="removeExistedTodo"
            ).remove X
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    props: {
        todo: Object
    },
    methods: {
        ...mapMutations(['removeTodo']),
        removeExistedTodo() {
            this.removeTodo(this.todo.id)
        }
    }
}
</script>

<style lang="scss" scoped>
.todo-item{
       display: flex;
       align-items: center;
       justify-content: space-between;
       background-color: #cccccc;
  }

  .label{
      display: flex;
      align-items: center;
      flex: 1;
  }

.input-block{
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title{
    padding: 15px 0;
    display: block;
    line-height: 1.2;
    font-size: 24px;
}

.button{
    width: 40px;
    align-items: center;
}

.remove{
    background: transparent;
    border: none;
    color: firebrick;
    cursor: pointer;
    font-size: 20px;
}
</style>