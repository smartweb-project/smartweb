import React from 'react';
import {UploadOutlined, UserOutlined, VideoCameraOutlined,} from '@ant-design/icons';
import {Divider, Layout, Menu, theme} from 'antd';
import {Outlet} from "react-router-dom";
// import {mockData} from "./mockData.ts";

const { Header, Sider, Content } = Layout;

const IndexPage: React.FC = () => {
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
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default IndexPage;
