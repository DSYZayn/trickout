//导入需要的模块
import {createApp} from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import "element-plus/dist/index.css"
import router from "@/route";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import {VueMasonryPlugin} from "vue-masonry";
import hljsVuePlugin from '@highlightjs/vue-plugin';
import 'highlight.js/styles/stackoverflow-light.css'

//创建app
const app = createApp(App);



//注入路由
app.use(router)
//全局注册element-plus图标
for(const [key, component] of Object.entries(ElementPlusIconsVue)){
    app.component(key, component)
}
//注册瀑布流插件
app.use(VueMasonryPlugin)

//注册代码高亮插件
app.use(hljsVuePlugin)
//挂载实例
app.mount('#app')
