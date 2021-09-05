const todos = {
    state: {
        todos: []
    },
    actions: {},
    getters: {},
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        removeTodo(state, todoId) {
            state.todos = state.todos.filter(item => item.id !== todoId);
        }
    }
}

export default todos;