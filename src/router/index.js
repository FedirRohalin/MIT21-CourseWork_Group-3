import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/IndexPage.vue';
import SettingView from '../views/SettingsPage.vue';
import FormulaView from '../views/FormulasPage.vue';
import CurrencyPriceView from '../views/CurrencyPricePage.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/settings/:settingId',
        name: 'Setting',
        component: SettingView,
        props: true,
    },
    {
        path: '/formula/:settingId/:formulaId',
        name: 'Formula',
        component: FormulaView,
        props: true,
    },
    {
        path: '/currency-price',
        name: 'Currency Price',
        component: CurrencyPriceView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;