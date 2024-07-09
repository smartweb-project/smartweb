import { useMutation, useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import {
  CreateProjectDocument,
  ListProjectDocument,
} from '../../../helpers/backend/gen/graphql.ts';

const ProjectsPage = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
    {
      title: '页面数量',
      dataIndex: 'pageCount',
    },
    {
      title: '创建人',
      dataIndex: 'creator',
    },
    {
      title: '最近更新时间',
      dataIndex: 'updatedAt',
    },
    {
      title: '操作',
      render: (text: any, record: any) => {
        return (
          <div>
            <a href={`/projects/${record.id}`}>查看</a>
          </div>
        );
      },
    },
  ];
  const { data: listProjectDocumentData } = useQuery(ListProjectDocument);
  const [createProject] = useMutation(CreateProjectDocument);
  const nav = useNavigate();
  return (
    <div>
      <h1>Projects</h1>
      <Button
        type={'primary'}
        onClick={() => {
          createProject().then((res) => {
            console.log(res?.data?.createProject);
            nav(`/projects/${res?.data?.createProject}`);
          });
        }}
      >
        创建
      </Button>
      <Table columns={columns} dataSource={listProjectDocumentData?.listProject} />
    </div>
  );
};

export default ProjectsPage;
