import Vue from 'vue'
import Vuex from 'vuex'

Vue.useAttrs(Vuex);

export default new Vuex.Store({
     state: {
         username: "",
         password: "",
         profile: {},
         movies: [],
         searchText: "",
         error: ""
     }
})