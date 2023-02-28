import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css'
import Router from './router/index'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);
