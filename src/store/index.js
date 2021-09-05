import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import todos from './modules/todos'
import tasks from './modules/tasks'

export const store = new Vuex.Store({
 modules: {
     todos,
     tasks
 }
});