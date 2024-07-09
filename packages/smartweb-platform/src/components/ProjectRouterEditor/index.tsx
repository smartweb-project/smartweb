import {
  ArrowRightOutlined,
  EllipsisOutlined,
  FileOutlined, PlusOutlined, PlusSquareFilled,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Button, Input, Menu, MenuProps, Tree, type TreeDataNode, type TreeProps } from 'antd';
import React from 'react';

import TreeTest from '../../pages/index/projects/[id]/pages/helpers/TreeTest.tsx';
import { items2 } from './mockData.ts';
type MenuItem = Required<MenuProps>['items'][number];
interface TreeNode {
  title: string;
  key: string;
  id: string;
  nodeType: string;
  children?: TreeNode[];
}

// 下啦
const items: MenuProps['items'] = [
  {
    key: '0',
    label: '新增页面',
  },
  {
    key: '1',
    label: '编辑页面',
  },
  {
    key: '2',
    label: '重命名',
  },
  {
    key: '4',
    danger: true,
    label: '删除',
  },
];

const ProjectRouterEditor = ({ value = '[]', onChange = () => {} }) => {
  const [treeData, setTreeData] = useState<TreeNode[]>(JSON.parse(value));

  useEffect(() => {
    onChange(JSON.stringify(treeData));
  }, [treeData]);

  const onDrop: TreeProps['onDrop'] = (info) => {
    setTreeData((prev) => {
      const dropKey = info.node.key;
      const dragKey = info.dragNode.key;
      const dropPos = info.node.pos.split('-');
      const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

      const loop = (data, key, callback) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].key === key) {
            return callback(data[i], i, data);
          }
          if (data[i].children) {
            loop(data[i].children, key, callback);
          }
        }
      };
      const data = [...prev];

      // Find dragObject
      let dragObj;
      loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1);
        dragObj = item;
      });

      if (!info.dropToGap) {
        // Drop on the content
        loop(data, dropKey, (item) => {
          item.children = item.children || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.push(dragObj);
        });
      } else if (
        (info.node.children || []).length > 0 && // Has children
        info.node.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {
        loop(data, dropKey, (item) => {
          item.children = item.children || [];
          // where to insert 示例添加到头部，可以是随意位置
          item.children.unshift(dragObj);
        });
      } else {
        let ar;
        let i;
        loop(data, dropKey, (item, index, arr) => {
          ar = arr;
          i = index;
        });
        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj);
        } else {
          ar.splice(i + 1, 0, dragObj);
        }
      }

      return data;
    });
  };

  const [isrename, setIsrename] = useState('');

  const onClick = (e: any, treeNodeKey) => {
    // console.log(e, treeNodeKey);
    if (e.key === '2') {

      // console.log()
      setIsrename(treeNodeKey);
    } else if (e.key === '0') {
      setTreeData((prev) => {
        return prev.map((item) => {
          if (item.key === treeNodeKey) {
            return {
              ...item,
              children: item.children
                ? item.children.concat({
                    title: '新建页面',
                    key: Math.random().toString(),
                    id: Math.random().toString(),
                    nodeType: 'page',
                  })
                : [
                    {
                      title: '新建页面',
                      key: Math.random().toString(),
                      id: Math.random().toString(),
                      nodeType: 'page',
                    },
                  ],
            };
          }
          return item;
        });
      });
    }
    // window.location.href = '/projects/1/pages/1';
  };
  const XIala = ({ treeNodeKey }) => (
    <Dropdown
      trigger={['click']}
      menu={{
        items,
        onClick: (e) => {
          onClick(e, treeNodeKey);
        },
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <EllipsisOutlined style={{ fontSize: '18px' }} />
        </Space>
      </a>
    </Dropdown>
  );
  return (
    <div>
      <div className={'flex'}>
        <div className={'w-full p-5 bg-white'} style={{ border: '1px solid rgb(232, 232, 232)' }}>
          <div className={'mb-2'} style={{ fontWeight: 'bolder' }}>
            面包屑
          </div>
          <div className={'mb-3'}>景点搜索 / 测试页面 / 测试</div>

          <div className={'mb-2'} style={{ fontWeight: 'bolder' }}>
            路径
          </div>
          <div className={'mb-3'}>/sightseeing-search/test-page/test</div>

          <div className={'mb-2'} style={{ fontWeight: 'bolder' }}>
            编辑菜单
            <PlusOutlined
              onClick={() => {
                setTreeData(
                  treeData.concat({
                    title: '新建目录',
                    key: Math.random().toString(),
                    id: Math.random().toString(),
                    children: [],
                    nodeType: 'dir',
                  }),
                );
              }}
            >
              新建目录
            </PlusOutlined>
          </div>

          <Tree
            defaultExpandAll
            className={'w-full'}
            // defaultExpandedKeys={expandedKeys}
            draggable
            blockNode
            // onDragEnter={onDragEnter}
            // onDrop={onDrop}
            onDrop={onDrop}
            treeData={treeData}
            titleRender={(nodeData) => {
              return (
                <div className={'w-full flex justify-between'}>
                  <div className={'flex gap-2'}>
                    {nodeData.nodeType === 'page' ? <FileOutlined /> : <UnorderedListOutlined />}
                    {/*<UnorderedListOutlined />*/}
                    {/*<FileOutlined />*/}
                    {/*// @ts-ignore*/}
                    {/*{isrename}*/}
                    {isrename === nodeData.key ? (
                      <Input
                        defaultValue={nodeData.title}
                        autoFocus
                        onBlur={(v) => {
                          console.log(v.target.value);
                          setIsrename('');
                          setTreeData((prev) => {
                            return prev.map((item) => {
                              if (item.key === nodeData.key) {
                                return {
                                  ...item,
                                  title: v.target.value,
                                };
                              }
                              return item;
                            });
                          });
                        }}
                      />
                    ) : (
                      nodeData.title || '无名'
                    )}
                  </div>
                  <XIala treeNodeKey={nodeData.key} />
                </div>
              );
            }}
          />
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
            items={items2}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectRouterEditor;
