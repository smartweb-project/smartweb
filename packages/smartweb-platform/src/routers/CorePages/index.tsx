import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {Button, Divider, Layout, Menu, theme} from 'antd';
import {mockData} from "./mockData.ts";

const { Header, Sider, Content } = Layout;

const CorePages: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} theme={'light'} width={260} style={{
        borderRight: '1px solid rgb(232, 232, 232)',
      }}>
        <div style={{fontSize:'18px',
          borderBottom: '1px solid rgb(232, 232, 232)',
        }} className={'p-5'} >
          <a href={'/'} style={{color:'unset',textDecoration:'unset'}}>小飞机</a>
          <Divider type="vertical" />
          国内经搜
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout style={{
        backgroundColor:'rgb(251, 252, 253)'
      }}>
        <Content
          style={{
            margin: '24px 16px',
            minHeight: 'calc(100vh - 50px)',
            // background: 'green',
            borderRadius: borderRadiusLG,
            overflow:'hidden'
          }}
        >
          <iframe
            srcDoc={mockData.data.retrieveProject.coverage}
            style={{border: "none", width: "100%", height: "100vh"}}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CorePages;
