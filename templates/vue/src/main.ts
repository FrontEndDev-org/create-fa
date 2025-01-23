import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import './main.scss';
import '@unocss/reset/tailwind-compat.css';
import 'virtual:svg-sprite-register';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
