import { Container } from "inversify";
import { Store } from "vuex";
import { OtherStore } from "./stores/OtherStore";
import { TestStore } from "./stores/TestStore";



export const createContainer = (store: Store<any>): Container => {

    const container = new Container({
        autoBindInjectable: true,
        skipBaseClassChecks: true,
    });
    
    container
        .bind(TestStore)
        .toDynamicValue(
            () => new TestStore({store, name: "testStore"})
        )
        .inSingletonScope();

    container
        .bind(OtherStore)
        .toDynamicValue(
            () => new OtherStore({store, name: "otherStore"})
        )
        .inSingletonScope();
    
    container.bind(Container).toConstantValue(container);
    

    return container;
    
}
