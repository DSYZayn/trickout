import {createApp} from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import router from "@/route";

//创建app
const app = createApp(App);

//注入路由
app.use(router)

//挂载实例
app.mount('#app')
