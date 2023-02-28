import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GetUsersApi } from '../request/api';

function getItem(label, key, icon, type) {
  return {
    key,
    icon,
    label,
    type,
  };
}
const items = [
  getItem('消息推送', '1'),
  getItem('查看用户', '2')
];

export default function Aside() {
  const navigate=useNavigate();
  const onClick = (e) => {
    if(e.key==='1') {
      navigate('/home');
    }else {
      navigate('/admin'); 
      GetUsersApi({
        userJwt:localStorage.getItem('userJwt')
      }).then(res=>{
        console.log(res);
      })

    }
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 150,
      }}
      defaultSelectedKeys={['1']}
      mode="inline"
      theme="dark"
      items={items}
      className='aside'
    />
  );
};