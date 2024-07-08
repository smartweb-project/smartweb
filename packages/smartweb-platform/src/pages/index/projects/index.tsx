import {Button, Table} from "antd";

const ProjectsPage = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
    },
    {
      key: '2',
      name: 'John',
      age: 42,
    }
  ]
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
  ]
  return <div>
    <h1>Projects</h1>
    <Button type={'primary'}>创建</Button>
    <Table columns={columns} dataSource={dataSource}/>
  </div>
}

export default ProjectsPage
