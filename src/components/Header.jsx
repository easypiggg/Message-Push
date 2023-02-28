import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space} from 'antd';

export default function Header() {
  const navigate=useNavigate();
  localStorage.clear();//清除token
  const onClick = ({ key }) => {
    message.success(`退出成功，正在返回登录页`);
    setTimeout(()=> {
      navigate('/login')
    },1500)
  };
  const items = [
    {
      label: '退出登录',
      key: '1',
    }
  ];
  return (
    <header>
        <div className='title'>
          <h1>公众号消息推送</h1>
        </div>
        <div className="sign_out">
            <Dropdown menu={{ items,onClick}}>
                <Space>
                    <div className="username">某某某</div>
                    <DownOutlined/>
                </Space>
            </Dropdown>
        </div>
      </header>
  )
}
