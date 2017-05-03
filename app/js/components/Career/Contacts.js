'use strict';

import React from 'react';
import { Link } from 'react-router';

var data = require('../Home/data/career.json');

const Contacts = React.createClass ({

	render: function () {
		let contactData = data.references;
		return(
			<div className="sec-social">
				<h3>references</h3>
				{Object.keys(contactData).map(function(item, index){
					let contact = (contactData[item].phone) ? <p className="phone">{contactData[item].phone}</p> : null ;
          return (
          	<a key={index} href={contactData[item].link} target="_blank">
	          	<div className="contact-bar">
								<img src="assets/img/bnet-icon.jpg" />
								<p className="btag">{contactData[item].btag}</p>
								<p className="name">{contactData[item].name}</p>
								{contact}
							</div>
						</a>
          )
        })}
			</div>
		);
	}
});

export default Contacts;