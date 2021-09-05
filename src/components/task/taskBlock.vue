<template lang="pug">
    .task-container
        taskInput
        taskList(
            :tasks="tasks"
        )
    
</template>

<script>
import taskList from './taskList.vue'
import taskInput from './taskInput.vue'
import {mapState} from 'vuex'

export default {
    data() {
        return {
           // tasks: []
        }
    },
    components: {
        taskList,
        taskInput
    },
    computed: {
        ...mapState({
            tasks: state => state.tasks.tasks
        })
    },
    methods: {
        addTask(task) {
            this.tasks.push(task);
        },
        removeTask(taskId) {
            this.tasks = this.tasks.filter(item => item.id !== taskId);
        }
    }
}
</script>

<style lang="scss" scoped>
.task-container{
    background-color: #ffffff;
}
</style>