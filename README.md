I'm in the process of upgrading a vue2 project to vue3 which comes with the fun of upgrading most of the dependencies. I'm nearly done with the upgrade, but I am getting some weird bugs with state and vue reactivity. 

We initialize 2 modules, "TestModule" and "OtherModule". OtherModule takes in as parameter a reference to the TestModule. The OtherModule has a 'get' function which references a property on the TestModule. We are not getting the up to date values from the TestModule when the property we reference changes.

Here is the repository for what I believe to be the most basic requirements to reproduce the issue: https://github.com/ThisIsJJones/vue-reactivity-issue
