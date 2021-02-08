import axios from "axios";
import React, { useState, useEffect } from "react";

function GetFight({ fightId }) {
	const [fight, setfight] = useState();

	const fightHandler = (fightId) => {
		console.log(fightId);
	};

	return (
		<>
			<div>{fightId}</div>
		</>
	);
}

export default GetFight;
