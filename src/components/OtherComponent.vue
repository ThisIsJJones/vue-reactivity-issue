<template>
    <div>
        OTHER
        {{ otherStore.items }}
        {{ otherStore.filteredItems }}
        {{ otherStore.different }}
    </div>
</template>

<script lang="ts">
import { Component, Inject, Vue, toNative, Watch} from "vue-facing-decorator";
import { Container } from "inversify";
import {OtherStore} from "../stores/OtherStore";

@Component({})
class OtherComponent extends Vue {
    @Inject({from: "container"}) readonly container!: Container;


    get otherStore() { return this.container.get(OtherStore); }

    created() {
        // this.otherStore.load().catch(() => console.log("HERERERER"));

    }

    mounted() {
        this.otherStore.load()

        // this.renderMarkers()
    }

    @Watch("otherStore.filteredItems")
    renderMarkers() {

        console.log("WATCHER")

        for (const marker of this.markers) {
            console.log(marker)
        }

    }

    get markers() {
       
        return this.otherStore.filteredItems

    }

}
export default toNative(OtherComponent)
</script>