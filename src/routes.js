import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import MainPage from './pages/MainPage.vue'
import DetailPage from './pages/DetailPage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import CreatePage from './pages/CreatePage.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/places/:id',
      name: 'DetailPage',
      component: DetailPage,
      // beforeEnter: AuthGuard 
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/add-place',
      component: CreatePage,
    },
  ]
})

export default router;