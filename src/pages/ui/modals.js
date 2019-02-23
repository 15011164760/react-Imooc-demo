import React from 'react'
import {Button,Card ,Modal} from 'antd'
import './index.less'
export default class Buttons extends React.Component{
    state={
        showModals1:false,
        showModals2:false,
        showModals3:false,
        showModals4:false,
    }
    handleClick=(type)=>{
       this.setState({
           [type]:true
       })
    }
    handleCancel=(type)=>{
      this.setState({
           [type]:false
       })
    }
    handleConfirm=(type)=>{
        Modal[type]({
            title:'确认？',
            content:'你确认学会react了吗',
            onOk(){
               console.log('ok');
            },
            onCancel(){
               console.log('cancel');
            }
        })
    }
    render(){
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                  <Button type='primary' onClick={()=>this.handleClick('showModals1')}>open</Button>
                  <Button type='primary' onClick={()=>this.handleClick('showModals2')}>自定义页脚</Button>
                  <Button type='primary' onClick={()=>this.handleClick('showModals3')}>顶部20px弹窗</Button>
                  <Button type='primary' onClick={()=>this.handleClick('showModals4')}>水平垂直居中</Button>
                </Card>
                 <Card title="信息确认框" className="card-wrap">
                  <Button type='primary' onClick={()=>this.handleConfirm('info')}>Info</Button>
                  <Button type='primary' onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
                  <Button type='primary' onClick={()=>this.handleConfirm('success')}>Success</Button>
                  <Button type='primary' onClick={()=>this.handleConfirm('warning')}>Warning</Button>
                </Card>
                <Modal 
                   title="React" 
                   visible={this.state.showModals1}
                   onCancel={()=> {
                       this.setState({
                           showModals1:false
                       })
                   }}
                   >
                   <p>欢迎学习慕课网推出的React高级课程</p>
                </Modal>
                 <Modal 
                   title="React" 
                   visible={this.state.showModals2}
                   okText="好的"
                   cancelText="算了"
                   onCancel={()=> {
                       this.setState({
                           showModals2:false
                       })
                   }}
                   >
                   <p>欢迎学习慕课网推出的React高级课程</p>
                </Modal>
                <Modal 
                   title="React" 
                   visible={this.state.showModals3}
                   style={{top:20}}
                   onCancel={()=> {
                       this.setState({
                           showModals3:false
                       })
                   }}
                   >
                   <p>欢迎学习慕课网推出的React高级课程</p>
                </Modal>
                 <Modal 
                   title="React" 
                   wrapClassName="vertical-center-modal"
                   visible={this.state.showModals4}
                   onCancel={()=> {
                       this.setState({
                           showModals4:false
                       })
                   }}
                   >
                   <p>欢迎学习慕课网推出的React高级课程</p>
                </Modal>
            </div>
        )
    }
}