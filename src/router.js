import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import todo from './components/todo.vue';
import todoCreate from './components/todoCreate.vue';

const routes = [{
path: '/',
component: todo
},
{
    path: '/create',
    component: todoCreate
}
];

export default new VueRouter({ routes, mode: 'history' });