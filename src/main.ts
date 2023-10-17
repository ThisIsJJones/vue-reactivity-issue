import "reflect-metadata";

import { createApp } from 'vue'
import App from './App.vue'
import {TestModule} from "./stores/TestModule";
import {OtherModule} from "./stores/OtherModule";
import { createStore } from 'vuex'

const store = createStore({});

const test = new TestModule({store, name: "TestModule"})
new OtherModule(test, {store, name: "OtherModule"})


const app = createApp(App)

app.use(store);

app.mount('#app')
