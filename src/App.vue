
<template>

  <TestComponent></TestComponent>

</template>

<script lang="ts">
import { Component, Vue, toNative} from "vue-facing-decorator";
import TestComponent from "./components/TestComponent.vue";

@Component({
    components: { TestComponent },
})
class App extends Vue {
    
}
export default toNative(App)
</script>
