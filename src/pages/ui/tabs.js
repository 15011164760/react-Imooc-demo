import React from 'react'
import {Button,Card ,message,Tabs,Icon} from 'antd'
import './index.less'
const TabPane = Tabs.TabPane;
const panes = [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
export default class Buttons extends React.Component{
    newTabIndex =0;
    handlecallback=(key)=>{
        message.info('嗨，您选择的页签是'+key);
    }
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }
     onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
       
 
    state = {
      activeKey: panes[0].key,
      panes,
    }
    add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: activeKey, key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
            lastIndex = i - 1;
        }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
        } else {
            activeKey = panes[0].key;
        }
        }
        this.setState({ panes, activeKey });
    }
    render(){
        return(
              <div>
                    <Card title="Tab页签" className="card-wrap">
                        <Tabs defaultActiveKey="1" onChange={this.handlecallback}>
                            <TabPane tab="Tab 1" key="1">欢迎学习React课程</TabPane>
                            <TabPane tab="Tab 2" key="2" disabled>欢迎学习React课程</TabPane>
                            <TabPane tab="Tab 3" key="3">React是一门非常受欢迎的mv*框架</TabPane>
                        </Tabs>
                    </Card>
                     <Card title="Tab页签" className="card-wrap">
                        <Tabs defaultActiveKey="1" onChange={this.handlecallback}>
                            <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">欢迎学习React课程</TabPane>
                            <TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2">欢迎学习React课程</TabPane>
                            <TabPane tab={<span><Icon type="delete"/>Tab 3</span>} key="3">React是一门非常受欢迎的mv*框架</TabPane>
                        </Tabs>
                    </Card>
                     <Card title="Tab页签" className="card-wrap">
                         <Tabs
                            onChange={this.onChange}
                            activeKey={this.state.activeKey}
                            type="editable-card"
                            onEdit={this.onEdit}
                            >
                            {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                            </Tabs>
                    </Card>
                </div>
        )
    }
}