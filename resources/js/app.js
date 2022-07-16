import './bootstrap';
import '../css/app.css';

import {createApp , h} from 'vue';
import App from './App.vue';
import Route from './route/index';
import Footer from './components/Footer.vue'

const app = createApp({
    render: () => h(App),
});

app.use(Route);
app.component('Footer',Footer);

app.mount("#app");

