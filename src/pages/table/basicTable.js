import React from 'react';
import { Modal,Card, Table ,Button,Message} from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils/utils';
export default class Tables extends React.Component {
    state = {};
    params = {
        page: 1
    }
    componentDidMount() {
        const data = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
            interest: 1,
            sex: 1
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
            interest: 3,
            sex: 0
        }];
        this.setState({
            dataSource: data
        })
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
            res.result.list.map((item, index) => {
                item.key = index;
            })
            if (res.code == 0) {
                this.setState({
                    dataSource2: res.result.list,
                    selectedcheckRows:[],
                    selectedcheckRowKeys:null,
                    pagination:Utils.pagination(res,(current)=>{
                         _this.params.page=current;
                         this.request();
                    })
                })
            }
        })
    }
    onRowClick=(recode,index)=>{
        let selectKey=[index];
        this.setState(
               {
                   selectedRowKeys:selectKey,
                   selectedItem:recode
                }
            )
    }
    handleDelete=()=>{
        var rows=this.state.selectedcheckRows;
        let ids=[];
        rows.map((item)=>{
            ids.push(item.id);
        })
        Modal.confirm({
            title:'删除提示',
            content:`确定要删除这些数据吗？${ids.join(',')}`,
            onOk:()=>{
                Message.success('删除成功');
                this.request();
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
        const selectedRowKeys=this.state.selectedRowKeys;
        const selectedcheckRowKeys=this.state.selectedcheckRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys:this.state.selectedRowKeys,
            onChange:(selectedRowKeys,selectedItem)=>{
                this.setState({
                    selectedRowKeys,
                    selectedItem
                })
                console.log(selectedRowKeys);
            }
        }
        const rowcheckedSelection = {
            type: 'checkbox',
            selectedRowKeys:selectedcheckRowKeys,
            onChange:(selectedcheckRowKeys,selectedcheckRows)=>{
                this.setState({
                    selectedcheckRowKeys,
                    selectedcheckRows
                })
            }
        }

        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource}
                        columns={columns} />
                </Card>
                <Card title="动态渲染数据表格" style={{marginTop:10}}>
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns} />
                </Card>
                <Card title="Mock-表格单选" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        onRow={(record,index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record,index);
                                 },// 点击行
                            }
                        }}
                        rowSelection={rowSelection}
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns} />
                </Card>
                <Card title="Mock-表格多选">
                    <Button type="primary" onClick={this.handleDelete} style={{marginBottom:10}}>删除</Button>
                    <Table
                        bordered
                        rowSelection={rowcheckedSelection}
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns} />
                </Card>
                <Card title="Mock-表格分页" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        pagination={this.state.pagination}
                        dataSource={this.state.dataSource2}
                        columns={columns} />
                </Card>
            </div>
        )
    }
}