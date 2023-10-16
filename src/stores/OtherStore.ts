import { injectable } from "inversify";
import { Module } from "vuex-class-modules";
import BasicStoreModule from "./BasicStoreModule";


interface FilterItems {
    filteredItems: any;
}

@injectable()
@Module({generateMutationSetters: true})
export class OtherStore extends BasicStoreModule implements FilterItems {


    get different() {
        
        if (!this.items) {
            return []
        }

        return this.items.filter(item => item%2 === 0)
    }

    get filteredItems() {

        console.log(this.items)

        if (!this.items) {
            return []
        }

        return this.items.filter(item => item%2 === 0)
    }

    protected async fetch(): Promise<any> {
        return new Promise((res) => {
            setTimeout(() => res([9,8,7,6]), 5000); // simulate network request
        })
    }
}
