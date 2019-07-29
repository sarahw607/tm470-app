import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RecipeDetails from '@/components/recipe/RecipeDetails'
import StoreCupboard from '@/components/store-cupboard/StoreCupboard'

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
    }
  ],
  linkExactActiveClass: 'active'
})
