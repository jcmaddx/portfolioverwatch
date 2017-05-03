'use strict';

import React from 'react';
import { Link } from 'react-router';

const Static = React.createClass ({

	render: function () {
		return(
			<div className="static-stats">
				<div className="stat first">
					<h4>Sites</h4>
					<p>248</p>
				</div>
				<div className="stat">
					<h4>Preference (fe-be)</h4>
					<p>70-30</p>
				</div>
				<div className="stat last">
					<h4>Time Worked</h4>
					<p>5 Years</p>
				</div>
			</div>
		);
	}
});

export default Static;
