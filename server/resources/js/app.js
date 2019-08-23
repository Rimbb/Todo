require("./bootstrap");

import Vue from 'vue'

import 'es6-promise/auto';

import VueRouter from "vue-router";

// Set Vue router
Vue.use(VueRouter)

import VueAuth from '@websanova/vue-auth';

import auth from './auth';


// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `http://localhost:8000`
Vue.use(VueAuth, auth)


window.Vue = require("vue");

// // Set Vue globally
window.Vue = Vue

import Index from './Index'

// // Load Index
Vue.component('index', Index)

import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

import axios from "axios";

import App from "./App.vue";

import WelcomeComponent from "./components/WelcomeComponent.vue";

import CreateComponent from "./components/CreateComponent.vue";

import IndexComponent from "./components/IndexComponent.vue";

import EditComponent from "./components/EditComponent.vue";

import Home from './components/HomeComponent.vue';
import Register from './components/RegisterComponent.vue';
import Login from './components/LoginComponent.vue';
import Dashboard from './components/user/DashboardComponent.vue';
import AdminDashboard from './components/admin/DashboardComponent.vue';

const routes = [
    {
        name: "welcome",

        path: "/welcome",

        component: WelcomeComponent
    },

    {
        name: "create",

        path: "/create",

        component: CreateComponent
    },

    {
        name: "posts",

        path: "/posts",

        component: IndexComponent
    },

    {
        name: "edit",

        path: "/edit/:id",

        component: EditComponent
    },

    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
          auth: undefined
        }
    },

    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
          auth: false
        }
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          auth: false
        }
      },
      // USER ROUTES
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          auth: true
        }
      },
      // ADMIN ROUTES
      {
        path: '/admin',
        name: 'admin.dashboard',
        component: AdminDashboard,
        meta: {
          auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
        }
      },
];

const router = new VueRouter({ mode: "history", routes: routes });

const app = new Vue(Vue.util.extend({ router }, App)).$mount("#app");

