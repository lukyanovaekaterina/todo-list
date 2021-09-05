<template lang="pug">
div.task-input
    div {{validation.firstError('task.name')}}
    .task-form
        input(
            type="text"
            placeholder="Новая задача"
            autofocus
            v-model="task.name"
            @keydown.enter="addNewTask"
        ).input
        button(
            type=""
            @click="addNewTask"
        ).task-btn--save Добавить  
</template>

<script>
import {Validator} from 'simple-vue-validator'
import { mapMutations } from 'vuex'

let uniqId = 0;
export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        'task.name'(value){
            return Validator.value(value).required('Поле не может быть пустым');
        }
    },
    data() {
        return {
            task: {
                id: 0,
                name: "",
                checked: false
            }
        }
    },
    methods: {
        ...mapMutations(['addTask']),
        addNewTask() {
            this.$validate().then(success => {
                if (!success) return;

            uniqId++;
            this.task.id=uniqId;

            this.addTask({...this.task});

            this.task.name="";

            this.validation.reset();
            })
        }
        }
    }

</script>

<style lang="scss" scoped>
.task{

&-form{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

&-input{
    width: 520px;
    margin: 0 auto;
}
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
.task-btn--save{
    width: 150px;
    height: 50px;
    text-align: center;
    border-radius: 5px;
    text-transform: uppercase;
}
</style>