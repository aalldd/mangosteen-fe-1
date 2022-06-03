import { Bar } from './views/Bar';
import { Foo } from './views/Foo';
import { App} from './App';
import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'

const routes=[
    {path:'/',component:Foo},
    {path:'/abount',component:Bar}
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

const app=createApp(App)
app.use(router)
app.mount('#app')
