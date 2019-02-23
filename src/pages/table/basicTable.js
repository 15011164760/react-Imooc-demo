import React from 'react';
import { Card, Table } from 'antd';
import axios from './../../axios/index';
export default class Tables extends React.Component {
    state = {};
    params={
        page:1
    }
    componentDidMount() {
        const data = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
            interest:1,
            sex:1
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
            interest:3,
            sex:0
        }];
        this.setState({
            dataSource:data
        })
        this.request();
    }
    request=()=>{
       let _this = this;
        axios.ajax({
            url:'/table/list',
            data:{
                params:{page:this.params.page}
            }
        }).then((res)=>{
           if(res.code==0){
               this.setState({
                dataSource2:res.result
               }) 
           }
        })
    }
    render() {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            render(data){
                let config={
                    '0':'女',
                    '1':'男'
                }
                return config[data]
            }
        },
        {
            title: '兴趣',
            dataIndex: 'interest',
            key: 'interest',
            render(data){
                let config={
                    '0':'唱歌',
                    '1':'跳舞',
                    '2':'写字',
                    '3':'弹琴',
                    '4':'下棋',
                    '5':'打篮球',
                    '6':'跑步',
                    '7':'武术',
                }
                return config[data]
            }
        }
        ];
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource}
                        columns={columns} />
                </Card>
                 <Card title="动态渲染数据表格">
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns} />
                </Card>
            </div>
        )
    }
}