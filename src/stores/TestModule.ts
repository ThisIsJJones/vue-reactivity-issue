import { Action, Module, Mutation, VuexModule } from "vuex-class-modules";


@Module({generateMutationSetters: false, })
export class TestModule extends VuexModule {

    items: number[] | null = null;
    
    get filteredItems() {
        console.log("filtedItems", this.items)
        return (this.items || []).filter(a => a%2 === 0).slice()
    }

    @Mutation
    setData(data: any) {
        console.log("setting", data)
        this.items = data
    }

    @Action
    async load() {
        console.log("loading data")
        // this.setData([1,3,4])
        const data = await this.fetch()
        this.setData(data)
        console.log('fetched')
    }


    private async fetch() {
        return [1,2,3]
    }

}
