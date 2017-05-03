'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const Loading = React.createClass ({
	render: function () {
		return(
			<div id="loading-page" className="full-page loading-globe">
				<img className="logo-full" src="assets/img/logo-full.png" />
				<div className="logo-blizz">
					<p>An interactive resume for</p>
					<img src="assets/img/logo-blizz.png" />
				</div>
				<div className="enter-site">
					<p className="loading">Welcome</p>
					<Link to="/title" className="big button yellow">Enter Site</Link>
					<p className="fine">Overwatch is property of Blizzard Entertainment. Site presented for demonstration purposes only.</p>
				</div>
				<div className="exit-site">
					<a className="button blue" href="http://johncmaddox.com" target="_blank">Exit to Website</a>
				</div>
			</div>
		);
	}
});

export default Loading;
