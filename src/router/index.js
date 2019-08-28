import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RecipeDetails from '@/components/recipe/RecipeDetails'
import StoreCupboard from '@/components/store-cupboard/StoreCupboard'
import SafetyPage from '@/components/SafetyPage'
import LoginPage from '@/components/account/LoginPage'
import SignUpPage from '@/components/account/SignUpPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/details',
      name: 'RecipeDetails',
      component: RecipeDetails
    }, {
      path: '/cupboard',
      name: 'StoreCupboard',
      component: StoreCupboard
    }, {
      path: '/safety',
      name: 'SafetyPage',
      component: SafetyPage
    }, {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }, {
      path: '/signup',
      name: 'SignUpPage',
      component: SignUpPage
    }
  ],
  linkExactActiveClass: 'active'
})
