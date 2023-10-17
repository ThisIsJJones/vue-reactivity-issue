import { Module, VuexModule } from "vuex-class-modules";
import { TestModule } from "./TestModule";

@Module({generateMutationSetters: true})
export class OtherModule extends VuexModule {

    constructor(
        private testModule: TestModule,
        options: any
    ) {
        super(options);
    }

    get items() {
        // should be getting updated when testModules
        return (this.testModule.filteredItems || []).filter(a => a%2 === 0).slice()
    }
}
