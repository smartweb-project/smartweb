import {Editor} from "@monaco-editor/react";
import {Button, Input, Menu, MenuProps, Tree} from "antd";
import TreeTest from "./pages/helpers/TreeTest.tsx";
import {ArrowRightOutlined} from "@ant-design/icons";
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
  }
];
const PageDetail = ()=>{
  const nav = useNavigate()
  const [value, setValue] = useState(JSON.stringify({
    name: '小飞机',
    age: 18
  }))
  return <div className={'p-2 w-[1200px] m-auto'}>
    <h2 className={'mb-10 flex justify-between'}>
      项目配置
      <Button type={'primary'}>保存</Button>
    </h2>
    <Form
      layout={'vertical'}
      name="basic"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      // style={{ maxWidth: 600 }}
      initialValues={{ username: 'IBU国际机票' }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="项目名称"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="描述"
        name="description"
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item label={'菜单'}>
        <div className={'flex'}>

          <div className={'w-full p-5 bg-white'} style={{border: '1px solid rgb(232, 232, 232)'}}>
            <div className={'mb-2'} style={{fontWeight: 'bolder'}}>面包屑</div>
            <div className={'mb-3'}>安徽省 / 合肥市 / 庐江县</div>

            <div className={'mb-2'} style={{fontWeight: 'bolder'}}>路径</div>
            <div className={'mb-3'}>/anhuisheng/hefeishi/lujingaxian</div>

            <div className={'mb-2'} style={{fontWeight: 'bolder'}}>编辑菜单</div>
            <TreeTest/>
          </div>
          <div className={'w-[240px]  flex items-center justify-center'}>
            <ArrowRightOutlined style={{fontSize: '24px'}}/>
          </div>
          <div className={' px-10 py-5 bg-white'} style={{border: '1px solid rgb(232, 232, 232)'}}>
            <div className={'mb-2'} style={{fontWeight: 'bolder'}}>预览菜单</div>
            <Menu
              // onClick={onClick}
              style={{width: 256}}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1','sub2','sub3','sub4']}
              mode="inline"
              items={items}
            />
          </div>
        </div>
      </Form.Item>
    </Form>

  </div>
}

export default PageDetail
