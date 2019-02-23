import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Admin from './admin';
import Home from './pages/router_demo/router1/Home';
import Routes from './pages/router_demo/router2/router';
import Router from './pages/router_demo/router3/router';
import IRouters from './router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<IRouters/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
