//导入需要的模块
import {createApp} from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import "element-plus/dist/index.css"
import router from "@/route";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

//创建app
const app = createApp(App);



//注入路由
app.use(router)
//全局注册element-plus图标
for(const [key, component] of Object.entries(ElementPlusIconsVue)){
    app.component(key, component)
}

//挂载实例
app.mount('#app')
