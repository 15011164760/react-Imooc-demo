import React from 'react'
import {HashRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Home from './Home'
import Main from './Main'
import Info from './Info'
import NoMatch from './NoMatch'
import About from './../router1/About'
import Topic from './../router1/Topic'
export default class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Home>
                    <Switch>
                        <Route  path="/main" render={()=>
                          <Main>
                              <Route path="/main/:value" component={Info}></Route>
                          </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home> 
            </Router>      
           
             
        )
    }
}