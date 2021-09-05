const tasks = {
    state: {
        tasks: []
    },
    actions: {},
    getters: {},
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        },
        removeTask(state, taskId) {
            state.tasks = state.tasks.filter(item => item.id !== taskId);
        }
    }
}

export default tasks;