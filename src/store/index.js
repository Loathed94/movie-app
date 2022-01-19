import Vue from 'vue'
import Vuex from 'vuex'
import {LoginAPI} from "@/components/Login/LoginAPI"
import {MoviesAPI} from "@/components/Movie/MoviesAPI"

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
     },
     getters: {

     },
     actions: {
         async loginUser({state, commit}){
             try{
                const loginDetails = JSON.stringify({
                    user: {
                        username: state.username,
                        password: state.password
                    }
                })
                const user = await LoginAPI.login(loginDetails)
                if(user){
                    commit('setProfile', user);
                }
                else{
                    commit("setError", "User was not found.")
                }
             }catch(e){
                commit("setError", e.message)
             }
         },
         registerUser({state, commit}){
             try{
                const registerDetails = JSON.stringify({
                    user: {
                        username: state.username,
                        password: state.password
                    }
                })
                const user = await LoginAPI.register(registerDetails);
                if(user){
                    commit('setProfile', user);
                }
                else{
                    commit('setError', "User could not be registered.");
                }
             }catch(e){
                commit('setError', e.message);
             }
         },
         async fetchMovies({commit, state}){
             try {
                 const movies = await MoviesAPI.fetchMovies();
                 commit('setMovies', movies);
             } catch (e) {
                 commit('setError', e.message);
             }
         },
         //async 
     }
})