import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import LaravelVuePagination from 'laravel-vue-pagination';

 const getToken = localStorage.getItem('token');
    if(getToken){
        axios.defaults.headers.common['Authorization'] = `Bearer ${getToken}`;
    }



createApp(App).use(router,axios,LaravelVuePagination).mount('#app')


