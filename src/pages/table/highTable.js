import React from 'react';
import { Card, Table, Badge, Button, Modal, message } from 'antd';
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
                    dataSource3: res.result.list,
                })
            }
        })
    }
    handleChange = (pagination, filters, sorter) => {
        debugger;
        this.setState({
            sortOrder: sorter.order
        })
    }
    //删除操作
    handleDelete = (item) => {
        console.log(item);
        Modal.confirm({
            title: '提示',
            content: `是否要删除id是:${item.id}的数据？`,
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    }
    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                width: 80
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width: 80
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width: 80
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                width: 80,
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
                width: 80,
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
                width: 80,
                key: 'id',
                fixed: 'left'
            },
            {
                title: '姓名',
                dataIndex: 'name',
                width: 80,
                key: 'name',
                fixed: 'left'
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width: 80,
                key: 'age',
            },
            {
                title: '状态',
                width: 80,
                dataIndex: 'state',
                key: 'state',
            },
            {
                title: '生日',
                width: 80,
                dataIndex: 'birthday',
                key: 'birthday',
            },
            {
                title: '日期',
                width: 80,
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: '住址',
                width: 80,
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '住址',
                width: 80,
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '住址',
                width: 80,
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '住址',
                width: 80,
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '住址',
                width: 80,
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '住址',
                width: 80,
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '性别',
                width: 80,
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
                width: 80,
                fixed: 'right',
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
        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                key: 'id',
            },
            {
                title: '姓名',
                dataIndex: 'name',
                width: 80,
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width: 80,
                key: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: this.state.sortOrder
            },
            {
                title: '状态',
                width: 80,
                dataIndex: 'state',
                key: 'state',
            },
            {
                title: '生日',
                width: 80,
                dataIndex: 'birthday',
                key: 'birthday',
            },
            {
                title: '日期',
                width: 80,
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: '住址',
                width: 80,
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '性别',
                width: 80,
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
                width: 80,
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
        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '兴趣',
                dataIndex: 'interest',
                key: 'interest',
                render(data) {
                    let config = {
                        '0': <Badge status="success" text="成功" />,
                        '1': <Badge status="error" text="错误" />,
                        '2': <Badge status="default" text="正常" />,
                        '3': <Badge status="processing" text="进行中" />,
                        '4': <Badge status="warning" text="警告" />,
                        '5': <Badge status="warning" text="警告" />,
                        '6': <Badge status="warning" text="警告" />,
                        '7': <Badge status="warning" text="警告" />,
                    }
                    return config[data]
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                key: 'state',
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                key: 'birthday',
            },
            {
                title: '日期',
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '性别',
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
                title: '操作',
                render: (text, item) => {
                    console.log(item);
                    return <Button size="small" onClick={this.handleDelete.bind(this,item)}>删除</Button>
                }
            }
        ];
        return (
            <div>
                <Card title="Mock-表头固定" style={{ marginBOttom: 10 }}>
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns}
                        scroll={{ y: 240 }}
                    />
                </Card>
                <Card title="Mock-左侧固定" style={{ marginBOttom: 10 }}>
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns2}
                        scroll={{ x: 1132 }}
                    />
                </Card>
                <Card title="Mock-表格排序" style={{ marginBOttom: 10 }}>
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns3}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="Mock-操作按钮" style={{ marginBOttom: 10 }}>
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns4}
                    />
                </Card>
            </div>
        )
    }
}