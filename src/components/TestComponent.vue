<template>
    <div>
        TEST
        <br/>
        items {{ this.$store.state.TestModule.items }}
        filtered Items {{ filteredItems }}
        <br/>
        <br/>
        Other
        <br/>
        items {{ items }}
    </div>
</template>

<script lang="ts">
import { Component, Vue, toNative} from "vue-facing-decorator";
import { Getter } from "vuex-facing-decorator";

@Component({})
class TestComponent extends Vue {
    @Getter('filteredItems', { namespace: 'TestModule' }) filteredItems!: number[];
    @Getter('items', { namespace: 'OtherModule' }) items!: number[];

    mounted() {
        this.$store.dispatch("TestModule/load")
    }

}
export default toNative(TestComponent)
</script>