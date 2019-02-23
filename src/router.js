import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Message from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Nomatch from './pages/Nomatch'
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import Register from './pages/form/register'
import basicTable from './pages/table/basicTable'
import Admin from './admin'
export default class IRoutes extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                
                           <Route path="/login" component={Login}></Route>
                            <Route path="/" render={()=>
                            <Admin>
                             <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                <Route path="/admin/ui/notification" component={Notice}></Route>
                                <Route path="/admin/ui/messages" component={Message}></Route>
                                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route path="/admin/ui/carousel" component={Carousel}></Route>
                                <Route path="/admin/form/login" component={FormLogin}></Route>
                                <Route path="/admin/form/reg" component={Register}></Route>
                                <Route path="/admin/table/basic" component={basicTable}></Route>
                                <Route component={Nomatch}></Route>
                             </Switch>
                            </Admin>
                            }></Route>
                            <Route path="/order/details" component={Login}></Route>
                   
                       
                        
                </App> 
            </HashRouter>      
           
             
        )
    }
}