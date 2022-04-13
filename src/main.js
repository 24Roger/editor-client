import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as Icons from '@element-plus/icons';
import store from './store';
import router from './router';

import App from './App.vue'

createApp(App)
  .use(ElementPlus)
  .use(Icons)
  .use(store)
  .use(router)
  .mount('#app')