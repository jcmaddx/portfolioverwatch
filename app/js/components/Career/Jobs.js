'use strict';

import React from 'react';
import { Link } from 'react-router';

var data = require('../Home/data/career.json');

const Jobs = React.createClass ({

	render: function () {
		let jobData = data.work;
		return(
			<div className="half">
				<h3>Work History</h3>
				{Object.keys(jobData).map(function(item, index){
					let widthClass = "blue-time " + jobData[item].class;
          return (
          	<a key={index} href={jobData[item].link} target="_blank">
	          	<div className="job-bar">
								<img src={jobData[item].icon} />
								<div className="time-bar">
									<p className="company">{jobData[item].title}</p>
									<p className="company-time">{jobData[item].time}</p>
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

export default Jobs;