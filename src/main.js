import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeLocalStorage } from './javascript/localStorage';
import initialData from './db/state.json';
import getCurrencyPrices from '../src/javascript/getCurrencyPrices.js'

(async () => {
  const cryptoSymbols = ['BTC', 'ETH', 'USDT', 'ADA', 'BNB', 'XRP', 'SOL', 'DOT', 'LTC', 'DOGE', 'MATIC', 'TRX', 'SHIB', 'LINK', 'BCH'];

  try {
    const result = await getCurrencyPrices(cryptoSymbols);
    const updatedState = {
      ...initialData,
      currencies: result.currencies,
    };
    
    initializeLocalStorage(updatedState);
  } catch (error) {
    console.error('Error:', error);
  }
})();

const app = createApp(App);
app.use(router);
app.mount('#app');
