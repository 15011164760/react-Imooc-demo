import React from 'react'
import {Button,Card ,message} from 'antd'
import './index.less'
export default class Buttons extends React.Component{
    showMessage=(type)=>{
      message[type]('恭喜你已经完成了React晋级课程！')
    }
    render(){
        return(
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.showMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.showMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage('error')}>Error</Button>
                </Card>
            </div>
        )
    }
}