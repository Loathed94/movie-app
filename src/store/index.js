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
     },
     mutations: {
        setUsername: (state, payload) => {
            state.username = payload;
        },
        setPassword: (state, payload) => {
            state.password = payload;
        },
         setProfile: (state, payload) => {
             state.profile = payload;
         },
         setMovies: (state, payload) => {
             state.movies = payload;
         },
         setSearchText: (state, payload) => {
             state.searchText = payload;
         },
         setError: (state, payload) => {
             state.error = payload;
         },
         addFavourite: (state, payload) => {
             state.profile.favourites = payload;
         }
     }
})