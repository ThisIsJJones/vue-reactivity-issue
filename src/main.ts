import "reflect-metadata";

import { createApp } from 'vue'
import App from './App.vue'
import { TestModule } from "./stores/TestModule";
import { OtherModule } from "./stores/OtherModule";
import { createStore } from 'vuex'

const store = createStore({});


const testModule = new TestModule({store, name: "testStore"});
new OtherModule({store, name: "otherStore"});

testModule.load();

const app = createApp(App)

app.provide("TestModule", testModule);
app.use(store);

app.mount('#app')
