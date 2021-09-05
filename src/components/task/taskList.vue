<template lang="pug">
.task--list
    ul.list
        li.item(v-for="task in tasks" :key="task.id")
            taskListItem(
                :task="task"
            )
</template>

<script>
import taskListItem from './taskListItem.vue'

export default {
    props: {
        tasks: Array
    },
    components: {
        taskListItem
    },
    methods: {

    }
}
</script>


<style lang="sss" scoped>
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

</style>
