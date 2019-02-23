import React from 'react'
import {HashRouter as Router,Link,Route} from 'react-router-dom'
import Home from './Home'
import Main from './Main'
import About from './../router1/About'
import Topic from './../router1/Topic'
export default class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Home>
                    <div>
                        <Route  path="/main" render={()=>
                          <Main>
                              <Route path="/main/a" component={About}></Route>
                          </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                    </div>
                </Home> 
            </Router>      
           
             
        )
    }
}