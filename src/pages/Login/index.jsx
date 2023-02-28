import React from 'react';
import { Button,Form, Input, message } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "./index.less"
import { LoginApi,GetCodeApi } from '../../request/api';

export default function Login() {
  //获取验证码
  const getCode=()=> {
    GetCodeApi({
    }).then(res=>{
      console.log(res);
      return res.code
    })
  }
  getCode();
  const navigate=useNavigate();
  const onFinish = (values) => {
    console.log(values);
    LoginApi({
      username: values.username,
      password:values.password,
      code: values.yzm
    }).then(res=>{
      console.log(res);
      message.success('登陆成功,正在跳往首页');
      localStorage.setItem('userJwt',res.userJwt);
      setTimeout(()=>{
        navigate('/push');
        console.log(localStorage.getItem('userJwt'));
      },1500)
    })
  };

  return (
    <div className='login'>
      <div className='login_box'>
        <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        >
          <Form.Item
            className='username'
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input size='large' placeholder="请输入用户名" prefix={<UserOutlined />}/>
          </Form.Item>

          <Form.Item
            className='password'
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password size='large' placeholder="请输入密码" prefix={<LockOutlined />}/>
          </Form.Item>

          <Form.Item 
            className="yzm"
            name='yzm'
            rules={[{ required: true, message: '请输入验证码！' }]}>
            <Input size='large' placeholder="请输入验证码" />
          </Form.Item>

          <Form.Item>
            <Button className='login_button' size="large" type="primary" htmlType="submit" block >登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
