import React from "react";

export default class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top">
					<div className="container">
						<div className="navbar-header">
							<button aria-controls="navbar" aria-expanded="false" className="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button">
								<span className="sr-only">Toggle navigation</span> 
								<span className="icon-bar"></span> 
								<span className="icon-bar"></span> 
								<span className="icon-bar"></span>
							</button> 
							<a className="navbar-brand" href="#">Project name</a>
						</div>
						<div className="collapse navbar-collapse" id="navbar">
							<ul className="nav navbar-nav">
								<li className="active">
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#about">About</a>
								</li>
								<li>
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}