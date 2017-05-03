'use strict';

import React from 'react';
import { Link } from 'react-router';

var data = require('../Home/data/career.json');

const Skills = React.createClass ({

	render: function () {
		let skillData = data.skills;
		return(
			<div className="half">
				<h3>General Skills</h3>
				{Object.keys(skillData).map(function(item, index){
          return (
          	<div key={index} className="box">
							<h5 className="title">{skillData[item].text}</h5>
							<p className="value">{skillData[item].value}</p>
							<p className="prof">Proficiency: {skillData[item].prof} / 10</p>
						</div>
          )
        })}
			</div>
		);
	}
});

export default Skills;
