import Vue from 'vue';
import Vuex from 'vuex';
import {STATE} from './state';
import {MUTATIONS} from './mutations';
import {ACTION} from './actions';

Vue.use(Vuex);
export default  new Vuex.Store({
    state:STATE ,
    mutations: MUTATIONS,
    actions: ACTION
});