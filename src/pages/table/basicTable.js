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
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
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
        }];
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