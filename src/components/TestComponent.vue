<template>
    <div>
        TEST
        {{ testStore.items }}
        {{ testStore.filteredItems }}
    </div>
</template>

<script lang="ts">
import { Component, Inject, Vue, toNative, Watch} from "vue-facing-decorator";
import { Container } from "inversify";
import {TestStore} from "../stores/TestStore";

@Component({})
class TestComponent extends Vue {
    @Inject({from: "container"}) readonly container!: Container;


    get testStore() { return this.container.get(TestStore); }

    mounted() {
        this.testStore.load()
        // this.renderMarkers()
    }

    @Watch("testStore.filteredItems")
    renderMarkers() {

        console.log("WATCHER")

        for (const marker of this.markers) {
            console.log(marker)
        }

    }

    get markers() {
       
        return this.testStore.filteredItems

    }

}
export default toNative(TestComponent)
</script>