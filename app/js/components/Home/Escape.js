'use strict';

import React from 'react';
import { Router, Route, browserHistory, Link, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const Escape = React.createClass ({
	componentDidMount: function(){
		window.onkeydown = function(e) {
			if(e.keyCode == 27){
				appHistory.push('/title');
			}
		}
	},
	render: function () {
		return(
			<div id="back-btn">
				<Link className="escape" to="/title"><span className="bnb">Escape</span>Back</Link>
			</div>
		);
	}
});

export default Escape;
