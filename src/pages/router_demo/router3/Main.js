import React from 'react'
import {Link} from 'react-router-dom'
export default class Main extends React.Component{
    render(){
        return(
           <div>
               <div>this is Main pages</div> 
                <Link to="/main/123">嵌套路由1</Link> 
               <br/>
               <Link to="/main/yang">嵌套路由2</Link> 
               <hr/>  
               <hr/>  
                {this.props.children}
          </div>
            
        )
    }
}