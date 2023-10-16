declare module "vue" {
    import { CompatVue } from "@vue/runtime-dom";
    const Vue: CompatVue;
    export default Vue;
    export * from "@vue/runtime-dom";
    const { configureCompat } = Vue;
    export { configureCompat };
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
