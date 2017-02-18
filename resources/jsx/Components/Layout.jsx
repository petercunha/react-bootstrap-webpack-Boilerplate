import React from "react";

import Body from "./Body.jsx";
import Navbar from "./Navbar.jsx";

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Body />
				<Navbar />
			</div>
		);
	}
}
