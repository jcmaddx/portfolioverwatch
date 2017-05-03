'use strict';

import React from 'react';

const Player = React.createClass ({
	render: function () {
		return(
			<a href="http://johncmaddox.com" target="_blank">
				<div id="player-bar">
					<img className="player-icon" src="assets/img/icon-hanzo.jpg" />
					<p>Maygus <span className="player-level">31</span></p>
				</div>
			</a>
		);
	}
});

export default Player;