// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav({ category }) {
	const [isFight, setIsFight] = useState(true);

	const handleisFight = () => {
		setIsFight(true);
	};
	return (
		<div id="nav-body">
			<span id="nav-title"></span>
			{isFight ? (
				<Link to="/fights" onClick={() => handleisFight(false)}>
					새로운 결투 신청<span id="nav-fights"></span>
				</Link>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default Nav;
