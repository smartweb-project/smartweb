import { OpenAIOutlined, ProjectOutlined } from '@ant-design/icons';
import { useMutation, useQuery } from '@apollo/client';
import { Editor } from '@monaco-editor/react';
import { Allotment } from 'allotment';
import { Button } from 'antd';

import {
  RetrievePageDocument,
  UpdatePageDocument,
} from '../../../../../../helpers/backend/gen/graphql.ts';
// import CorePages from "../../../../../../routers/CorePages";
// import {mockData} from "../../../../../../routers/CorePages/mockData.ts";
// import React from "react";

const PageID = () => {
  const { data } = useQuery(RetrievePageDocument, {
    variables: {
      pageID: '1',
    },
  });
  const [updatePage] = useMutation(UpdatePageDocument);
  const [code, setCode] = useState('');
  useEffect(() => {
    setCode(data?.retrievePage.content || '');
  }, [data]);
  return (
    <div className={'p-1'}>
      <div className={'mb-2 flex justify-between'}>
        <div style={{ fontSize: '16px' }}>
          <ProjectOutlined />
          IBU国际机票 / <ProjectOutlined />
          安徽省-马鞍山市 / <ProjectOutlined />
          广告位配置
        </div>
        {/*<div className={'flex flex-col gap-2'} style={{fontSize:'16px'}}>*/}
        {/*  <span>项目: IBU国际机票</span>*/}
        {/*  <span>路由: 安徽省 / 马鞍山市</span>*/}
        {/*  <span>页面: 广告位配置</span>*/}
        {/*</div>*/}
        <Button
          type={'primary'}
          onClick={() => {
            updatePage({
              variables: {
                pageID: '1',
                projectID: '1',
                content: code,
              },
            }).then(() => {
              message.success('保存成功');
            });
          }}
        >
          保存
        </Button>
      </div>
      <div style={{ border: '1px solid rgb(232, 232, 232)', height: 'calc(100vh - 120px)' }}>
        <Allotment>
          <div className={'w-full p-5'}>
            <div className={'flex justify-between'}>
              <h3>编辑器</h3>
              <OpenAIOutlined style={{ fontSize: '18px' }} className={'mb-2 cursor-pointer'} />
            </div>
            <Editor
              value={data?.retrievePage.content || ''}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                fontFamily: 'IBMPlexMono',
                // lineNumbers: 'off',
                // readOnly: true,
                folding: false,
                // minimap: { enabled: false },
                scrollBeyondLastLine: false,
                showUnused: false,
                // fontFamily: 'IBMPlexMono',
              }}
              language={'html'}
              height={'100vh'}
              onChange={(v) => {
                setCode(v);
              }}
            />
          </div>
          <div className={'w-full p-5'}>
            <h3>预览</h3>
            <iframe srcDoc={code} style={{ border: 'none', width: '100%', height: '100vh' }} />
          </div>
        </Allotment>
      </div>
    </div>
  );
};

export default PageID;
