<template lang="pug">
    .task-item
        label.label
            .input-block
                input(
                    type="checkbox"
                ).input
            .title {{task.name}}
        .button
            button(
                 type="button"
                 @click="removeExistedTask"
            ).remove X
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    props: {
        task: Object
    },
    methods: {
        ...mapMutations(['removeTask']),
        removeExistedTask() {
            this.removeTask(this.task.id)
        }
    }
}
</script>

<style lang="scss" scoped>
.task-item{
       display: flex;
       align-items: center;
       justify-content: space-between;
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