'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Player from './Player.js';
import Unavailable from './Unavailable.js';

var nav = require('./data/nav.json');

const handleMouseOver = function (e){
	let effects = document.getElementById('hover-effect');
	let top = Math.floor(ReactDOM.findDOMNode(this).getBoundingClientRect().top) + 20;
	effects.style.cssText = "top: "+top+"px; visibility: visible;";
}

const handleMouseOut = function (e){
	let effects = document.getElementById('hover-effect');
	effects.style.cssText = "visibility: hidden;";
}

const toggleNope = function(){
	let overlay = document.getElementById('nope-overlay');
	let classes = overlay.className;
	if(overlay){
		if(classes.indexOf('show') >= 0){
			overlay.className = "";
		} else {
			overlay.className = "show";
		}
	}
}

const NavLink = React.createClass({
	render: function(){
		let linkText = (this.props.text) ? this.props.text : null ;
		let mouseOver = (this.props.type === 'main') ? handleMouseOver.bind(this) : null ;
		let mouseOut = (this.props.type === 'main') ? handleMouseOut.bind(this) : null ;
		let innerText = (this.props.link) ? <Link to={this.props.link}>{linkText}</Link> : <a onClick={toggleNope}>{linkText}</a>;
		return (
			<li onMouseOver={mouseOver} onMouseOut={mouseOut}>{innerText}</li>
		);
	}
});

const Landing = React.createClass ({
	componentDidMount: function() {
		particlesJS.load('hover-particles', 'dist/hover-particles.json');
	},
	render: function () {
		let mainNav = nav.main;
		let subNav = nav.sub;
		return(
			<div className="full-page">
				<Unavailable handler={toggleNope}/>
				<div className="content-wrap">
					<Player />
					<img className="landing-logo" src="assets/img/logo-name.png" />
					<div className="unlocks">
						<h3 className="fade-text">Hanzo</h3>
						<p><span className="unlocked">9</span>/48 unlocks</p>
					</div>
					<div id="hover-effect">
						<div className="glows">
							<div className="linear"></div>
						</div>
						<div className="glimmer"></div>
						<div id="hover-particles"></div>
					</div>
					<div className="navs">
						<ul className="main-nav">
					    {Object.keys(mainNav).map(function(item, index){
	              return <NavLink type="main" key={index} text={mainNav[item].text} link={mainNav[item].link} />;
	            })}
						</ul>
						<ul className="sub-nav">
							{Object.keys(subNav).map(function(item, index){
	              return <NavLink type="sub" key={index} text={subNav[item].text} link={subNav[item].link} />;
	            })}
						</ul>
					</div>
					<p className="welcome">Welcome to the Overwatch Interactive Resume</p>
				</div>
				<video autoPlay loop className="full-vid">
					<source src="assets/video/loop.mp4" type="video/mp4"/>
					<source src="assets/video/loop.ogv" type="video/ogg"/>
					<source src="assets/video/loop.webm" type="video/webm"/>
				</video>
			</div>
		);
	}
});

export default Landing;
