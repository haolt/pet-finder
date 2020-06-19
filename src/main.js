import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vSelect from 'vue-select';
import VModal from "vue-js-modal";

Vue.config.productionTip = false;

Vue.component('v-select', vSelect);
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
