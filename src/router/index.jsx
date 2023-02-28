/**
 * @file: router.tsx 路由配置组件
 * @author: huxiaoshuai
*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoutesWithMiddleware } from 'react-router-middleware-plus';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AuthAdmin from '../pages/Admin/authAdmin';


export default function Router() {
    const routes = [
        {
            path: '/',
            key: 'index',
            element: <App></App>,
            children: [
                {
                    path: '/home',
                    index: true,
                    key: 'home',
                    element: <Home />
                },
                {
                    path: '/admin',
                    key: 'admin',
                    // middleware中callback从左到右依次执行
                    middleware: [AuthAdmin],
                }
            ]
        },
        {
            path: '/login',
            key: 'login',
            element: <Login></Login>
        },
    ];

    // 生成路由配置由两种方式：Component  或者是使用Hook useMiddlewareRoutes

    // 1. Component 渲染
    // return <ReactRouterMiddleware routes={routes}></ReactRouterMiddleware>;

    // 2. Hook渲染
    return useRoutesWithMiddleware(routes);
}