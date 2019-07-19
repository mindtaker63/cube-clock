import Vue from 'vue';
import Router from 'vue-router';

import ClockView from './views/ClockView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'clock-view',
      component: ClockView,
    },
  ],
});
