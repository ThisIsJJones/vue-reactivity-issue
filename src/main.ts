import "reflect-metadata";

import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from "./vuex.config"
import { createContainer } from "./inversify.config";

const store = createStore();
const container = createContainer(store);

const app = createApp(App)

app.use(store);
app.provide("container", container);

app.mount('#app')
