import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Select from '../views/Select.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/select',
    name: 'Select',
    component: Select
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
