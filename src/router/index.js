import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import UsuariosView from '../views/UsuariosView.vue'
import ImagenesViewVue from '@/views/ImagenesView.vue'
import ClientesViewVue from '@/views/ClientesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: UsuariosView
  },
  {
    path: '/imagenes',
    name: 'imagenes',
    component: ImagenesViewVue
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: ClientesViewVue
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
