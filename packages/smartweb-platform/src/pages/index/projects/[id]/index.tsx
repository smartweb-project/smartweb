import { ArrowRightOutlined } from '@ant-design/icons';
import { useMutation, useQuery } from '@apollo/client';
import { Editor } from '@monaco-editor/react';
import { Button, Input, Menu, MenuProps, Tree } from 'antd';

import {
  RetrieveProjectDocument,
  UpdateProjectDocument,
} from '../../../../helpers/backend/gen/graphql.ts';
import TreeTest from './pages/helpers/TreeTest.tsx';
import ProjectRouterEditor from "../../../../components/ProjectRouterEditor";
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    // icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      {
        key: 'g2',
        label: 'Item 2',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    // icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    // icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
];
const PageDetail = () => {
  const prm = useParams();
  const { data: retrieveProjectDocumentData } = useQuery(RetrieveProjectDocument, {
    variables: {
      projectID: prm.id as string,
    },
  });
  const [updateProject] = useMutation(UpdateProjectDocument);
  const onFinish = (values) => {
    updateProject({
      variables: {
        projectID: prm.id as string,
        name: values.username,
      },
    }).then(() => {
      message.success('保存成功');
    });
  };
  const { useForm } = Form;
  const [form] = useForm();
  return (
    <div className={'p-2 w-[1200px] m-auto'}>
      <h2 className={'mb-10 flex justify-between'}>
        项目配置
        <Button
          type={'primary'}
          onClick={() => {
            form.submit();
          }}
        >
          保存
        </Button>
      </h2>
      {retrieveProjectDocumentData && (
        <Form
          layout={'vertical'}
          name='basic'
          form={form}
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          // style={{ maxWidth: 600 }}
          initialValues={{ username: retrieveProjectDocumentData?.retrieveProject?.name }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='项目名称'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label='描述' name='description'>
            <Input.TextArea />
          </Form.Item>

          <Form.Item label={'菜单'}>
            <ProjectRouterEditor></ProjectRouterEditor>

          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default PageDetail;
