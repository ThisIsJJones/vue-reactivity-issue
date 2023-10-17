<template>
    <div>
        TEST
        {{ testModule.items }}
        {{ testModule.filteredItems }}
    </div>
</template>

<script lang="ts">
import { inject } from "vue";
import { Component, Vue, toNative} from "vue-facing-decorator";
import {TestModule} from "../modules/TestModule";

@Component({})
class TestComponent extends Vue {
    readonly testModule: TestModule = inject("TestModule")!;
}
export default toNative(TestComponent)
</script>