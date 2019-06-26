import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import Content from "@/components/Content";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: Home,
        component: Home
    },
    {
        path: "/:name",
        name: Content,
        component: Content
    }
    
];


let router = new Router({
    mode: "history",
    routes: routes
});

export default router;
