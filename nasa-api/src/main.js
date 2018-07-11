import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://images-api.nasa.gov/';

new Vue({
	render: h => h(App)
}).$mount('#app');
