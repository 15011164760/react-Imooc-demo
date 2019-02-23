import React from 'react'
import {Button,Card ,notification} from 'antd'
import './index.less'
export default class Notice extends React.Component{
    openNotification=(type,placement)=>{
        if(placement){
            notification.config({
                placement:placement
            })
        }
        notification[type]({
            message:"发工资啦",
            description:'上个月考勤22天，迟到12天，实发工资250，请笑纳！'
        })
    }
     render(){
         return (
             <div>
                 <Card title="通知提醒框" className="card-wrap">
                     <Button type="primary" onClick={()=>this.openNotification('success')}>Success</Button>
                     <Button type="primary" onClick={()=>this.openNotification('info')}>Info</Button>
                     <Button type="primary" onClick={()=>this.openNotification('warning')}>Wraning</Button>
                     <Button type="primary" onClick={()=>this.openNotification('error')}>Error</Button>
                 </Card>
                  <Card title="通知提醒框" className="card-wrap">
                     <Button type="primary" onClick={()=>this.openNotification('success','topLeft')}>Success</Button>
                     <Button type="primary" onClick={()=>this.openNotification('info','topRight')}>Info</Button>
                     <Button type="primary" onClick={()=>this.openNotification('warning','bottomLeft')}>Wraning</Button>
                     <Button type="primary" onClick={()=>this.openNotification('error','bottomRight')}>Error</Button>
                 </Card>
             </div>
         )
     }
}