import React from 'react'
import {Card ,Spin,Icon,Alert} from 'antd'
import './index.less'
export default class Loadings extends React.Component{
   render(){
    const icon=<Icon type="loading"></Icon>     
      return (
          <div>
              <Card title="Spin的用法" className="card-wrap">
                  <Spin size="small"></Spin>
                  <Spin style={{margin:'0 10px'}}></Spin>
                  <Spin size="large"></Spin>
                  <Spin indicator={icon} style={{marginLeft:10}} spinning={true}></Spin>
              </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert message="React" description="欢迎来到React高级实战课程" type="warning"></Alert>
                 <Spin>
                   <Alert message="React" description="欢迎来到React高级实战课程" type="info"></Alert>
                 </Spin>
                  <Spin tip="加载中" indicator={icon}>
                   <Alert message="React" description="欢迎来到React高级实战课程" type="info"></Alert>
                 </Spin>
              </Card>
          </div>
      )
   }
}