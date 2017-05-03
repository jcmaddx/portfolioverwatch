'use strict';

import React from 'react';
import { Link } from 'react-router';

var data = require('../Home/data/career.json');

const Education = React.createClass ({

	render: function () {
		let eduData = data.education;
		return(
			<div className="half">
				<h3>Training History</h3>
				{Object.keys(eduData).map(function(item, index){
					let widthClass = "blue-time " + eduData[item].class;
          return (
          	<a key={index} href={eduData[item].link} target="_blank">
	          	<div className="job-bar">
								<img src={eduData[item].icon} />
								<div className="time-bar">
									<p className="company">{eduData[item].title}</p>
									<p className="company-time">{eduData[item].time}</p>
									<div className={widthClass}></div>
								</div>
							</div>
						</a>
          )
        })}
			</div>
		);
	}
});

export default Education;