import { Action, Module, Mutation, VuexModule } from "vuex-class-modules";


@Module({generateMutationSetters: true})
export class TestModule extends VuexModule {

    items: number[] | null = null;
    
    get filteredItems() {
        console.log("filtedItems", this.items)
        return (this.items || []).filter(a => a%3 === 0).slice()
    }

    @Mutation
    setData(data: any) {
        console.log("setting", data)
        this.items = data
    }

    @Action
    async load() {
        console.log("loading data")
        const data = await this.fetch()
        console.log('fetched')
        this.setData(data)
    }


    private async fetch() {
        return [1,2,3,4,5,6,7,8,9]
    }

}
