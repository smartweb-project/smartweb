import { useMutation, useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import {
  CreateProjectDocument,
  ListProjectDocument,
} from '../../../helpers/backend/gen/graphql.ts';

const ProjectsPage = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: '页面数量',
      dataIndex: 'pageCount',
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
    },
    {
      title: '最近更新时间',
      dataIndex: 'updatedAt',
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
            nav(`/projects/${res?.data?.createProject}`)
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
