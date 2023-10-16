import { injectable } from "inversify";
import { Module } from "vuex-class-modules";
import BasicStoreModule from "./BasicStoreModule";


interface FilterItems {
    filteredItems: any;
}

@injectable()
@Module({generateMutationSetters: true})
export class TestStore extends BasicStoreModule implements FilterItems {

    get filteredItems() {

        console.log(this.items)

        if (!this.items) {
            console.log("RETURNED NOTHING")
            return []
        }

        return this.items.filter(item => item%2 === 0)
    }

    protected async fetch(): Promise<any> {
        return new Promise((res) => {
            setTimeout(() => res([1,2,3,4,5]), 5000); // simulate network request
        })
    }
}
