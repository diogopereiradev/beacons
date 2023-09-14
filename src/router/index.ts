import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
});

router.beforeEach((to, from, next) => {
  const routeExists = router.options.routes.some(route => route.path === to.path);
  
  if(!routeExists) {
    next({ name: 'home' });
    return;
  }
  next();
});

export default router;