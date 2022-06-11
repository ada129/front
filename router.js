import {createRouter,createWebHashHistory} from "vue-router";
import DashBoard from "@/vies/DashBoard.vue";
import CaseH from "@/vies/CaseH.vue";
import EditC from "@/vies/EditC.vue";

export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/', component:DashBoard,
        children:[ {path:'/Case', component:CaseH},
                   {path:'/edit', component:EditC},]},
        ]})
