```js
// key 是路径，title 是页面名称 id 是页面id（唯一）
const treeData: TreeDataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    id: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        id: '0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            id: '0-0',
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
            id: '0-0',
          },
        ],
      }
    ],
  },
];

```
