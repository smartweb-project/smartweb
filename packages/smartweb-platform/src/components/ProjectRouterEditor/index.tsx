import { ArrowRightOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';

import TreeTest from '../../pages/index/projects/[id]/pages/helpers/TreeTest.tsx';
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
const ProjectRouterEditor = () => {
  return (
    <div>
      <div className={'flex'}>
        <div className={'w-full p-5 bg-white'} style={{ border: '1px solid rgb(232, 232, 232)' }}>
          <div className={'mb-2'} style={{ fontWeight: 'bolder' }}>
            面包屑
          </div>
          <div className={'mb-3'}>安徽省 / 合肥市 / 庐江县</div>

          <div className={'mb-2'} style={{ fontWeight: 'bolder' }}>
            路径
          </div>
          <div className={'mb-3'}>/anhuisheng/hefeishi/lujingaxian</div>

          <div className={'mb-2'} style={{ fontWeight: 'bolder' }}>
            编辑菜单
          </div>
          <TreeTest />
        </div>
        <div className={'w-[240px]  flex items-center justify-center'}>
          <ArrowRightOutlined style={{ fontSize: '24px' }} />
        </div>
        <div className={' px-10 py-5 bg-white'} style={{ border: '1px solid rgb(232, 232, 232)' }}>
          <div className={'mb-2'} style={{ fontWeight: 'bolder' }}>
            预览菜单
          </div>
          <Menu
            // onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4']}
            mode='inline'
            items={items}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectRouterEditor;
