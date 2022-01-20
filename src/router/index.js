import { processExpression } from '@vue/compiler-core';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: "Login",
        component: () => import(/* webpackChunkName: "login"*/ "../components/Login/Login.vue")
    },
    {
        path: '/movies',
        name: 'Movies',
        component: () => import(/* webpackChunkName: "movies" */ "../components/Movie/Movies.vue")
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile"*/ "../components/Login/Profile.vue")
    }

]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router;