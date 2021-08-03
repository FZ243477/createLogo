import Vue from 'vue'
import Router from 'vue-router'
import Cookie from 'js-cookie'


Vue.use(Router)

//使用路由懒加载
const scrollBehavior = (to, from, savedPosition) => {
    return { x: 0, y: 0 }
}

export default new Router({
    scrollBehavior,
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: resolve => require(['@/view/index'], resolve),
            redirect: '/home',
            alias: '/home',
            children: [
                {
                    path: 'home',
                    component: resolve => require(['@/view/home/home'], resolve), //首页
                    meta: { title: '首页' }
                }
            ]
        },
        {
            path: '/two',
            component: resolve => require(['@/view/home/two'], resolve),
        },
        {
            path: '/three',
            component: resolve => require(['@/view/home/three'], resolve),
        },
        {
            path: '/four',
            component: resolve => require(['@/view/home/four'], resolve),
        },
        {
            path: '/case',
            component: resolve => require(['@/view/home/case'], resolve),
        },
        {
            path: '/imgPreview',
            component: resolve => require(['@/view/home/imgPreview'], resolve),
        },
        {
            path: '/user',
            component: resolve => require(['@/view/home/user'], resolve),
        },
        {
            path: '/about',
            component: resolve => require(['@/view/home/about'], resolve),
        },
        {
            path: '/my',
            component: resolve => require(['@/view/home/my'], resolve),
        },
        {
            path: '/stars',
            component: resolve => require(['@/view/home/stars'], resolve),
        },
        {
            path: '/typing',
            component: resolve => require(['@/view/home/typing'], resolve),
        }
    ]
})
