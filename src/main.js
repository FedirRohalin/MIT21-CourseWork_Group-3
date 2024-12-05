import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeLocalStorage } from './javascript/localStorage';
import initialData from './db/state.json';

initializeLocalStorage('state', initialData);

const app = createApp(App);
app.use(router);
app.mount('#app');