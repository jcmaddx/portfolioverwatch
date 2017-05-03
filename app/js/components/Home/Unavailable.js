'use strict';

import React from 'react';

const Unavailable = React.createClass ({
	render: function () {
		return(
			<div id="nope-overlay">
				<div className="nope-center">
					<div className="nope-text">This Feature is not available in this demo.</div>
					<div className="nope-button"><a className="big button yellow" onClick={this.props.handler}>OK</a></div>
				</div>
			</div>
		);
	}
});

export default Unavailable;
