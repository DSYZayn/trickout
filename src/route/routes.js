import {createRouter, createWebHashHistory} from "vue-router";
import axios from "axios";
import {provide} from "vue";
//动态导入组件--路由懒加载
//固定的组件

const header = () => import("@/components/YiYan.vue")//固定的头部信息
//主视图组件

const home = () => import("@/page/home.vue")
const projects = () => import("@/page/projects.vue")
const labs = () => import("@/page/lab.vue")
const about = () => import("@/page/about.vue")
const more = () => import("@/page/more.vue")
//特殊视图
const map = () => import("@/view/MyMap.vue")
//创建路由模式
const history = createWebHashHistory()
//创建路由配置
const router = createRouter({
    history,//路由模式
    routes: [
        {
            //页面逻辑
            path: '/',
            name: 'home',
            components: {
                default: home,
                HeaderView: header
            }
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/projects',
            name: 'projects',
            components: {
                default: projects,
                HeaderView: header,
            }
        },
        {
            path: '/lab',
            name: 'lab',
            components: {
                default: labs,
                HeaderView: header,
            }
        },
        {
            path: '/about',
            name: 'about',
            components: {
                default: about,
                HeaderView: header,
            }
        },
        {
            path: '/more',
            name: 'more',
            components: {
                default: more,
                HeaderView: header,
            }
        },
        {
            path:'/map',
            name:'map',
            components:{
                default:map,
                HeaderView:header
            }
        }
    ]
})

export default router