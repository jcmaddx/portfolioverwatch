'use strict';

import React from 'react';
import { Link } from 'react-router';

import Triangles from '../Home/Triangles.js';
import Player from '../Home/Player.js';
import Escape from '../Home/Escape.js';

import CareerNav from './Nav.js';
import Static from './Static.js';
import Profile from './Profile.js';
import Training from './Training.js';
import Social from './Social.js';

var nav = require('../Home/data/nav.json');

const Career = React.createClass ({

	render: function () {
		let sec;
		switch(this.props.params.section) {
			case "profile":
				sec = <Profile />;
				break;
			case "training":
				sec = <Training />
				break;
			case "social":
				sec = <Social />
				break;
			default :
				sec = <Profile />
				break;
		}
		return(
			<div className="full-page">
				<Triangles />
				<Player />
				<CareerNav section={this.props.params.section} />
				<div className="general-stats">
					<h1 className="career-title fade-text">{nav.career[this.props.params.section].text}</h1>
					<h2>Maygus <span className="level">31</span></h2>
					<Static />
				</div>
				{sec}
				<p className="welcome">Welcome to the Overwatch Interactive Resume</p>
				<Escape />
			</div>
		);
	}
});

export default Career;
