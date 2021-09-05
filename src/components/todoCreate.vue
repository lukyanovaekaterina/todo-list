<template lang="pug">
    .todo-create--container
        h1.todo-create--title Страница изменения заметки
        todoCreateInput
        todoCreateList(
           :todos="todos"
        )
        taskFooter


</template>

<script>
import todoCreateInput from './todoCreateInput.vue'
import todoCreateList from './todoCreateList.vue'
import taskFooter from './taskFooter.vue'
import {mapState} from 'vuex'

export default {
    data() {
        return {
          
        }
    },
    components: {
        todoCreateInput, 
        todoCreateList,
        taskFooter
    },
    methods: {

    },
    computed: {
        ...mapState({
            todos: state => state.todos.todos
        })
    }

}
</script>

<style lang="scss" scoped>
.todo-create--container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #999999;
    margin-top: 100px;
}

</style>