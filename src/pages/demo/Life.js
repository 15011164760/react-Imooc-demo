import React from 'react';
import Child from './Child';
import  './index.less';
import {Button} from 'antd';
// import 'antd/dist/antd.css';
export default class Life extends React.Component{
    constructor(props){
       super(props);
       this.state={count:1}
    }
    handleClick(){
      this.setState({
          count:this.state.count+1
      })
    }
    handleClick2=()=>{
        this.setState({
          count:this.state.count+1
      })
    }
    render(){
        return (
            <div className="content">
                <p>点击的数字是：{this.state.count}</p>
                <Button type="primary">Button</Button>
                <Button onClick={this.handleClick.bind(this)}>点击按钮1</Button>
                <button onClick={this.handleClick.bind(this)}>点击按钮1</button>
                <button onClick={this.handleClick2}>点击按钮2</button>
                <Child name={this.state.count}></Child>
            </div>
        )
    }
}