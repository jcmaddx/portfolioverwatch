'use strict';

import React from 'react';
import { Link } from 'react-router';

import Skills from './Skills.js';
import Education from './Education.js';

var data = require('../Home/data/career.json');

const Training = React.createClass ({

	render: function () {
		return(
			<div className="sec-profile">
				<Skills />
				<Education />
			</div>
		);
	}
});

export default Training;