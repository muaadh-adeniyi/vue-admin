import { createRouter, createWebHistory } from 'vue-router'
import firstView from '@/views/firstView.vue';
import secondView from '@/views/secondView.vue';
import thirdView from '@/views/thirdView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FirstView', 
      component: firstView ,
    },

    {
      path: '/second',
      name:'secondview',
      component: secondView
    },
    
    {
      path:'/third',
      name:'thirdView',
      component: thirdView
    }
  ],
})

export default router
