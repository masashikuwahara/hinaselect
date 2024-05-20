import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Select from '../views/Select.vue';
import Result from '../views/Result.vue';

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
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
