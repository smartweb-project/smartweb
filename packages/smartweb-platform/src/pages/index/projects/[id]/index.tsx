import { ArrowRightOutlined } from '@ant-design/icons';
import { useMutation, useQuery } from '@apollo/client';
import { Editor } from '@monaco-editor/react';
import { Button, Input, Menu, MenuProps, Tree } from 'antd';

import ProjectRouterEditor from '../../../../components/ProjectRouterEditor';
import {
  RetrieveProjectDocument,
  UpdateProjectDocument,
} from '../../../../helpers/backend/gen/graphql.ts';
import TreeTest from './pages/helpers/TreeTest.tsx';
type MenuItem = Required<MenuProps>['items'][number];

const PageDetail = () => {
  const prm = useParams();
  const { data: retrieveProjectDocumentData } = useQuery(RetrieveProjectDocument, {
    variables: {
      projectID: prm.id as string,
    },
  });
  const [updateProject] = useMutation(UpdateProjectDocument);
  const onFinish = (values) => {
    console.log(values, 'values');
    updateProject({
      variables: {
        projectID: prm.id as string,
        name: values.username,
        router: values.router,
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
          initialValues={{
            username: retrieveProjectDocumentData?.retrieveProject?.name,
            router: retrieveProjectDocumentData?.retrieveProject?.router,
          }}
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

          <Form.Item label={'菜单'} name='router'>
            <ProjectRouterEditor />
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default PageDetail;
