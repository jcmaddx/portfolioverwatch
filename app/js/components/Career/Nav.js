'use strict';

import React from 'react';
import { Link } from 'react-router';


var nav = require('../Home/data/nav.json');

const CareerNav = React.createClass ({

	render: function () {
		let careerNav = nav.career;
		let current = this.props.section;
		return(
			<div className="career-nav">
				<ul>
					{Object.keys(careerNav).map(function(item, index){
						let isActive = (current === careerNav[item].text.toLowerCase()) ? "active" : null ;
            return <li key={index} className={isActive}><Link to={careerNav[item].link}>{careerNav[item].text}</Link></li>
          })}					
				</ul>
			</div>
		);
	}
});

export default CareerNav;