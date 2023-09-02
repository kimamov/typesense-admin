import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';




const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes
});


const app=createApp(App);

app.use(router);

app.mount('#app');
