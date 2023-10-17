I'm in the process of upgrading a vue2 project to vue3 which comes with the fun of upgrading most of the dependencies. I'm nearly done with the upgrade, but I am getting some weird bugs with state and vue reactivity. 

The issue put simply is that components are not getting updated when computed properties change. If you have 1 store, 1 component, then all works. If you have 2 components, 2 stores, then only 1 component will receive computed property updates the other will not. Each component only needs to interact with its own store.

Each store has properties "items" and "filteredItems". "items" gets set as if it were a response to a network request and "filteredItems" should ideally recompute and notify components when it has changed. The components always get notified when "items" change, but depending on which component is rendered first or second will determine if they get notified on the computed "filteredItems".
 
Here is the repository for what I believe to be the most basic requirements to reproduce the issue: https://github.com/ThisIsJJones/vue-reactivity-issue
