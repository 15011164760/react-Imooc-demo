import React from 'react';
import {Message,Form,Input,Card,Radio,InputNumber,Select ,Switch,DatePicker,TimePicker,Upload,Icon,Checkbox,Button} from 'antd'; 
import { LocaleProvider } from 'antd';
// 设置日期插件的中文
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const FormItem=Form.Item;
const RadioGroup=Radio.Group;
const Option=Select.Option;
const TextArea=Input.TextArea;
const rowObject={ minRows: 2, maxRows: 6 };
class FormRegister extends React.Component{
    state={};
       getBase64 = (img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
   handleSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));
        Message.success(userInfo.userName+"，恭喜你完成了注册，密码是："+userInfo.userPwd)
   }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg:imageUrl,
                loading: false,
            }));
        }
    }
    render(){
        const {getFieldDecorator}=this.props.form;
          const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };
        const offsetLayout={
             wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 ,offset:4},
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                         <FormItem label="用户名" {...formItemLayout}>
                           {getFieldDecorator('userName',
                             {
                                 initialValue:'',
                                 rules:[
                                     {required: true}
                                     ]
                             }
                           )(<Input placeholder="请输入用户名"/>)}
                        </FormItem> 
                         <FormItem label="密码" {...formItemLayout}>
                           {getFieldDecorator('userPwd',
                             {
                                 initialValue:'',
                                 rules:[
                                     ]
                             }
                           )(<Input placeholder="请输入密码"/>)}
                        </FormItem> 
                         <FormItem label="性别" {...formItemLayout}>
                           {getFieldDecorator('sex',
                             {
                                 initialValue:'2',
                             }
                           )(<RadioGroup>
                                  <Radio value="1">男</Radio>
                                  <Radio value="2">女</Radio>
                               </RadioGroup>)}
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                           {getFieldDecorator('age',
                             {
                                 initialValue:'18',
                             }
                           )(<InputNumber />)}
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                           {getFieldDecorator('state',
                             {
                                 initialValue:'2',
                             }
                           )(<Select >
                               <Option value="1">风华正茂</Option>
                               <Option value="2">北大才子</Option>
                               <Option value="3">浪子吴迪</Option>
                               <Option value="4">男森生</Option>
                               </Select>)}
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                           {getFieldDecorator('interest',
                             {
                                 initialValue:['1','2','3'],
                             }
                           )(<Select  mode="multiple">
                               <Option value="1">唱歌</Option>
                               <Option value="2">跳舞</Option>
                               <Option value="3">打篮球</Option>
                               <Option value="4">跑步</Option>
                               <Option value="5">下棋</Option>
                               <Option value="6">开车</Option>
                               </Select>)}
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                           {getFieldDecorator('isMarryed',
                             {
                                 valuePropName:'checked',
                                 initialValue:true,
                             }
                           )(<Switch/>)}
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                           {getFieldDecorator('birthday',
                             {
                                 initialValue:moment('2018-08-08'),
                             }
                           )(<LocaleProvider locale={zh_CN}><DatePicker 
                               showTime
                               format="YYYY-MM-DD HH:mm:ss"/></LocaleProvider>)}
                        </FormItem>
                         <FormItem label="联系地址" {...formItemLayout}>
                           {getFieldDecorator('address',
                             {
                                 initialValue:'北京市海淀区奥林匹克公园',
                             }
                           )(<TextArea autosize={rowObject}/>)}
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                           {getFieldDecorator('time')(
                               <LocaleProvider locale={zh_CN}><TimePicker 
                               /></LocaleProvider>)}
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                    {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            {
                                getFieldDecorator('agreen', {
                                 valuePropName :'checked',
                                 initialValue:true,
                             })(
                                   <Checkbox>我已阅读<a href="#">慕课协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            {
                                getFieldDecorator('FormRegister')(
                                   <Button onClick={this.handleSubmit}>注册</Button>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>

            </div>
        )
    }
}
export default  Form.create()(FormRegister)  
