// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function MakeFights({ category }) {
	return (
		<div id="makefights-body">
			<span id="makefights-title"></span>

			<Link to="/fights">
				새로운 결투 신청<span id="makefights-fights"></span>
			</Link>
		</div>
	);
}

export default MakeFights;
