import { Action, Mutation, VuexModule } from "vuex-class-modules";

export default abstract class BasicStoreModule extends VuexModule {

    items: number[] | null = null;


    @Mutation
    setData(data: any) {
        console.log("SETTING DATA")
        this.items = data;
    }

    @Action
    async load() {
        const response = await this.fetch()
        this.setData(response)
    }

    protected abstract fetch(): Promise<any>;

}