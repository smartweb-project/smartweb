import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { Button, Divider, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';

import {RetrievePageDocument, RetrieveProjectDocument} from '../../helpers/backend/gen/graphql.ts';
import { mockData } from './mockData.ts';

const { Header, Sider, Content } = Layout;

const CorePages: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { data } = useQuery(RetrieveProjectDocument, {
    variables: {
      projectID: 'clydtvckt000313hkn4qougbw',
    },
  });
  const {data:retrievePageDocumentData} = useQuery(RetrievePageDocument,{
    variables:{
      pageID:'1'
    }
  })
  console.log(data?.retrieveProject.router, 'data');

  const router = useMemo(() => {
    return (() => {
      try {
        const r = JSON.parse(data?.retrieveProject.router || '[]')
        return r.map((item: any) => {
          return {
            key: item.id,
            label: item.title,
            icon: item.icon,
            children: item.children?.map((child: any) => {
              return {
                key: child.id,
                label: child.title,
                icon: child.icon,
              };
            }),
          };
        });
      } catch (e) {
        return [];
      }
    })();
  }, [data]);

  return (
    <Layout>
      <Sider
        trigger={null}
        theme={'light'}
        width={260}
        style={{
          borderRight: '1px solid rgb(232, 232, 232)',
        }}
      >
        <div
          style={{fontSize: '18px', borderBottom: '1px solid rgb(232, 232, 232)'}}
          className={'p-5'}
        >
          <img src='/logo.svg' alt='' className={'w-[24px] mr-2'}/>
          <a href={'/'} style={{color: 'unset', textDecoration: 'unset'}}>
            小飞机
          </a>
          <Divider type='vertical'/>
          景点搜索
        </div>
        <Menu
          mode='inline'
          defaultSelectedKeys={['1']}
          items={router}
        />
      </Sider>
      <Layout
        style={{
          backgroundColor: 'rgb(251, 252, 253)',
        }}
      >
        <Content
          style={{
            margin: '24px 16px',
            minHeight: 'calc(100vh - 50px)',
            // background: 'green',
            borderRadius: borderRadiusLG,
            overflow: 'hidden',
          }}
        >
          <iframe
            srcDoc={retrievePageDocumentData?.retrievePage.content}
            style={{ border: 'none', width: '100%', height: '100vh' }}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CorePages;
