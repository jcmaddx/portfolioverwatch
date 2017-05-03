'use strict';

import React from 'react';

const Triangles = React.createClass ({
	handleResize: function(){
		let canvas = document.querySelector('#triangles > canvas');
		canvas.style.width = window.innerWidth+"px";
		canvas.style.height = window.innerHeight+"px";
	},
	componentDidMount: function(){
		var pattern = Trianglify({
			width: window.innerWidth,
			height: window.innerHeight,
			x_colors: ["#38467e", "#5a679e", "#d9c4e3", "#f8ecf6", "#b9b0db", "#626d9a", "#38467e"],
			variance: 1,
			seed: "hanzo",
			cell_size: 120,
		});
		document.getElementById('triangles').appendChild(pattern.canvas());
		window.addEventListener('resize', this.handleResize);

		particlesJS.load('tri-top', 'dist/tri-particles-top.json');
		particlesJS.load('tri-bottom', 'dist/tri-particles-bottom.json');

	},
	render: function () {
		return(
			<div id="triangles">
				<div className="tri-effects">
					<img className="tri-glow" src="assets/img/triangle-glow.png" />
					<div id="tri-top" className="particles top"></div>
					<div id="tri-bottom" className="particles bottom"></div>
				</div>
			</div>
		);
	}
});

export default Triangles;