import React from 'react';
import {Button,Form,Input,Icon,Card,message,Checkbox} from 'antd'; 
const FormItem=Form.Item;
class FormLogin extends React.Component{
    handleSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
           if(!err){
               message.success(`${userInfo.userName} 恭喜您通过本次验证，密码是${userInfo.userPwd}`)
           }
        })
    }
    render(){
        const {getFieldDecorator}=this.props.form;
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                         <FormItem>
                           <Input placeholder="请输入用户名"/>
                        </FormItem> 
                        <FormItem>
                           <Input placeholder="请输入密码"/>
                        </FormItem> 
                         <FormItem>
                           <Button type="primary">登录</Button>
                        </FormItem> 
                    </Form>
                </Card>
                <Card title="登录水平表单"  style={{marginTop:10}}>
                    <Form layout="horizontal" style={{width:300}}>
                       
                         <FormItem>
                           {getFieldDecorator('userName',
                             {
                                 initialValue:'',
                                 rules:[
                                     { required: true, message: '请输入用户名' },
                                     {min:5,max:10,message:'长度不在范围内'},
                                     {
                                         pattern:new RegExp('^\\w+$','g'),
                                         message:'用户名必须是字母或者数字'
                                     }
                                     ]
                             }
                           )(<Input prefix={<Icon type="user"></Icon>} placeholder="请输入用户名"/>)}
                        </FormItem> 
                        <FormItem>
                             {getFieldDecorator('userPwd',
                             {
                                 initialValue:'',
                                 rules:[{ required: true, message: '请输入密码' }]
                             }
                           )( <Input type="password" prefix={<Icon type="lock"></Icon>} placeholder="请输入密码"/>)}
                        </FormItem> 
                         <FormItem>
                             {getFieldDecorator('remember',
                             {
                                 valuePropName :'checked',
                                 initialValue:true,
                             }
                           )( <Checkbox>记住密码</Checkbox>)}
                           <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>     
                         <FormItem>
                           <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem> 
                    </Form>
                </Card>
            </div>
        )
    }
}
export default  Form.create()(FormLogin)  
