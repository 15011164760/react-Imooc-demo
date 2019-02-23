import React from 'react'
export default class Child extends React.Component{
    componentWillMount(){
        console.log('conponentWillMount');
    }
     componentDidMount(){
        console.log('conponentWillMount');
    }
    shouldComponentUpdate (){
        console.log('shouldComponentUpdate');
          return true
    }
    componentWillReceiveProps  (newprops){
        console.log(newprops.name);
        console.log('componentWillReceiveProps ');
    }
    render(){
        return (
            <div>
                <p>这个是子组件的内容</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}