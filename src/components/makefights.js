// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function MakeFights({ category }) {
	const [isFight, setIsFight] = useState(true);

	const handleisFight = () => {
		setIsFight(true);
	};

	return (
		<div id="makefights-body">
			<span id="makefights-title"></span>
			{isFight ? (
				<Link to="/fights" onClick={() => handleisFight(false)}>
					새로운 결투 신청<span id="makefights-fights"></span>
				</Link>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default MakeFights;
