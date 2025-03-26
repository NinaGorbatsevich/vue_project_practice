import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '../views/AuthPage'
import MainPage from '../views/MainPage'
import BasketPage from '../views/BasketPage'
import CardPage from '../views/CardPage'

const routes = [
  {
    path: '/authorization',
    name: 'authorization',
    component: AuthPage
  },
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketPage
  },
  {
    path: '/card/:id',
    name: 'card',
    component: CardPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
