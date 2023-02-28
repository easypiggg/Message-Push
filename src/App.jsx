import React from 'react'
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Aside from './components/Aside';
import Header from './components/Header';
import "./assets/app.less"
const {  Content } = Layout;

export default function App() {
  return (
    <div>
      <Layout id='app'>
        <Header/>
        <div className='container'>
          <Aside />
          <Content className='content'><Outlet /></Content>
        </div>
    </Layout>
    </div>
  )
}
