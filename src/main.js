import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createGtm } from '@gtm-support/vue-gtm';

const app = createApp(App);

app.use(
  createGtm({
    id: 'G-XXXXXXXXXX', // Ваш ідентифікатор GA4
    vueRouter: router,
    enabled: true, // Вимикайте у dev-режимі
    debug: true, // Виводить події у консоль
  })
);

app.use(router);
app.mount('#app');
