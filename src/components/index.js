import Vue from "vue";
import Svga from "./Svga.vue";

const Components = {
    Svga
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;