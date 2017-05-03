'use strict';

import React from 'react';
import { Link } from 'react-router';

import Skills from './Skills.js';
import Jobs from './Jobs.js';

var data = require('../Home/data/career.json');

const Profile = React.createClass ({

	render: function () {
		let skillData = data.skills;
		let jobData = data.work;
		return(
			<div className="sec-profile">
				<Skills />
				<Jobs />
			</div>
		);
	}
});

export default Profile;
