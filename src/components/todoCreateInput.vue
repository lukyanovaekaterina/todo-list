<template lang="pug">
div
    div.error {{validation.firstError('todo.name')}}
    .todo-form

        input(
            type="text"
            placeholder="Новая заметка"
            autofocus
            v-model="todo.name"
            @keydown.enter="addNewTodo"
        ).input
        button(
            type=""
            @click="addNewTodo"
        ).todo-btn--save Добавить        
</template>

<script>
import {mapMutations} from "vuex";
import {Validator} from 'simple-vue-validator';

let unigId = 0;

export default {
    mixin: [require('simple-vue-validator').mixin],
    validators: {
        'todo.name'(value) {
            return Validator.value(value).required('Поле не может быть пустым');
        }
    },
    data() {
        return {
            todo: {
                id: 0,
                name: "",
                checked: false,
                tasks: []
        } 
    }
    },
    methods: {
        ...mapMutations(['addTodo']),
        addNewTodo() {
            this.$validate().then(success => {
                if(!success) return;
            unigId++;
            this.todo.id = unigId;

            this.addTodo({...this.todo});

            this.todo.name = "";

            this.validation.reset();

            })
        }
    }

}
</script>

<style lang="scss" scoped>

.todo-form{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

 .todo-board{
 display: flex;
 justify-content: space-around;
 flex-wrap: wrap;
 }

.input {
font-size: 24px;
padding: 16px 16px 16px 60px;
border: 1px solid transparent;
background: rgba(0, 0, 0, 0.003);
box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
line-height: 1.4em;
outline: none;
color: inherit;
width: 100%;;
}

.todo-btn--save{
    width: 150px;
    height: 50px;
    text-align: center;
    border-radius: 5px;
    text-transform: uppercase;
}
</style>ss
