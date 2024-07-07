import {Editor} from "@monaco-editor/react";
import {Button} from "antd";
// import CorePages from "../../../../../../routers/CorePages";
// import {mockData} from "../../../../../../routers/CorePages/mockData.ts";
// import React from "react";

const PageID = ()=>{
  const [code,setCode] = useState('')
  return <div className={'p-1'}>
    <div className={'mb-2'}>
      <Button type={'primary'}>保存</Button>
    </div>
    <div className={'flex'}>
      <Editor value={code} options={{
        minimap: {enabled: false},
      }} language={'html'} height={'700px'} onChange={(v) => {
        setCode(v)
      }}/>
      <iframe
        srcDoc={code}
        style={{border: "none", width: "100%", height: "200vh"}}
      />
    </div>
  </div>
}

export default PageID
