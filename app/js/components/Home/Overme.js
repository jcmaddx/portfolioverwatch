'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import Loading from './Loading.js';
import Title from './Title.js';

import Career from '../Career/Career.js';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

function checkIE(){
	var ua = window.navigator.userAgent;
	var oldIE = ua.indexOf("MSIE");
	var newIE = ua.indexOf("Edge");
	if(oldIE > 0 || newIE > 0) {
		document.body.className = "IE";
	}
};

checkIE();
ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/">
    	<IndexRoute component={Loading}/>
    	<Route path="/title" component={Title} />
    	<Route path="/career/:section" component={Career} />
    </Route>
  </Router>
), document.getElementById('app'))
