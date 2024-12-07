import { createApp } from 'vue';
import getCurrencyPrices from '../src/javascript/getCurrencyPrices.js';
import App from './App.vue';
import router from './router';
import { initializeLocalStorage } from './javascript/localStorage';
import initialData from './db/state.json';
import fetchShopifyData from './API/receiveData.js';

(async () => {
  const cryptoSymbols = ['BTC', 'ETH', 'USDT', 'ADA', 'BNB', 'XRP', 'SOL', 'DOT', 'LTC', 'DOGE', 'MATIC', 'TRX', 'SHIB', 'LINK', 'BCH'];
  
  try {
    const { currencies } = await getCurrencyPrices(cryptoSymbols);
    const products = await fetchShopifyData();
    
    const updatedState = {
      ...initialData,
      currencies,
      products,
    };

    initializeLocalStorage(updatedState);
  } catch (error) {
    console.error('Error during initialization:', error);
  }

  const app = createApp(App);
  app.use(router);
  app.mount('#app');
})();
