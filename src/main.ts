import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;

import { translation as messages  } from '@/i18n/translation.ts';
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'pl',
  fallbackLocale: 'pl',
  messages,
});


new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
