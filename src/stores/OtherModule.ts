import { Module, VuexModule } from "vuex-class-modules";

@Module({generateMutationSetters: true})
export class OtherModule extends VuexModule {
}
