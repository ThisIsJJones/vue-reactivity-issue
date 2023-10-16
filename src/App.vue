
<template>
  <TestComponent></TestComponent>
  <OtherComponent></OtherComponent>
</template>

<script lang="ts">
import { Component, Inject, Vue, toNative} from "vue-facing-decorator";
import { Container } from "inversify";
import TestComponent from "./components/TestComponent.vue";
import OtherComponent from "./components/OtherComponent.vue";

@Component({
    components: { TestComponent, OtherComponent },
})
class App extends Vue {
    @Inject({from: "container"}) readonly container!: Container;
    
}
export default toNative(App)
</script>
