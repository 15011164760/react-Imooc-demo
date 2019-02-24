import React from 'react';
import {Card, Table } from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils/utils';
export default class Tables extends React.Component {
    state = {};
    params = {
        page: 1
    }
    componentDidMount() {
        this.request();
    }
    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/list',
            data: {
                params: { 
                    page: this.params.page
                 }
            }
        }).then((res) => {
            if (res.code == 0) {
                this.setState({
                    dataSource2: res.result.list,
                })
            }
        })
    }
    render() {
        const columns = [
            {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width:80
        }, 
            {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
             width:80
        }, 
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
             width:80
        }, 
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
             width:80
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
             width:80,
            render(data) {
                let config = {
                    '0': '女',
                    '1': '男'
                }
                return config[data]
            }
        },
        {
            title: '兴趣',
            dataIndex: 'interest',
            key: 'interest',
             width:80,
            render(data) {
                let config = {
                    '0': '唱歌',
                    '1': '跳舞',
                    '2': '写字',
                    '3': '弹琴',
                    '4': '下棋',
                    '5': '打篮球',
                    '6': '跑步',
                    '7': '武术',
                }
                return config[data]
            }
        }
        ];
        const columns2 = [
            {
            title: 'id',
            dataIndex: 'id',
            width:80,
            key: 'id',
            fixed:'left'
        }, 
            {
            title: '姓名',
            dataIndex: 'name',
            width:80,
            key: 'name',
            fixed:'left'
        }, 
        {
            title: '年龄',
            dataIndex: 'age',
             width:80,
            key: 'age',
        },
          {
            title: '状态',
             width:80,
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: '生日',
             width:80,
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: '日期',
             width:80,
            dataIndex: 'time',
            key: 'time',
        }, 
        {
            title: '住址',
             width:80,
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '住址',
             width:80,
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '住址',
             width:80,
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '住址',
             width:80,
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '住址',
             width:80,
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '住址',
             width:80,
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '性别',
             width:80,
            dataIndex: 'sex',
            key: 'sex',
            render(data) {
                let config = {
                    '0': '女',
                    '1': '男'
                }
                return config[data]
            }
        },
        {
            title: '兴趣',
            dataIndex: 'interest',
             width:80,
             fixed:'right',
            key: 'interest',
            render(data) {
                let config = {
                    '0': '唱歌',
                    '1': '跳舞',
                    '2': '写字',
                    '3': '弹琴',
                    '4': '下棋',
                    '5': '打篮球',
                    '6': '跑步',
                    '7': '武术',
                }
                return config[data]
            }
        }
        ];
        return (
            <div>
                <Card title="Mock-表头固定" style={{marginBOttom:10}}>
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns} 
                        scroll={{y:240}}
                        />
                </Card>
                <Card title="Mock-左侧固定" style={{marginBOttom:10}}>
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns2} 
                        scroll={{x:1132}}
                        />
                </Card>
            </div>
        )
    }
}