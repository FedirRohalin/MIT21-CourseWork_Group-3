import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { fetchAndStoreData, getState } from './javascript/localStorage';
import initialData from './db/state.json';
import fetchShopifyData from './API/receiveData.js';
import {combine, extractProductDetails }from './javascript/retrieveDataFromAPI.js';



fetchAndStoreData('products', fetchShopifyData());
fetchAndStoreData('state', combine(initialData, extractProductDetails( getState('products'))));

const app = createApp(App);
app.use(router);
app.mount('#app');