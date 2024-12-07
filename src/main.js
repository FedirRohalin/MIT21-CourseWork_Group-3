import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeLocalStorage } from './javascript/localStorage';
import initialData from './db/state.json';
import fetchShopifyData from './API/recieveData.js'

fetchShopifyData();
initializeLocalStorage('state', initialData);

const app = createApp(App);
app.use(router);
app.mount('#app');