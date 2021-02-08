import axios from "axios";
import React, { useState, useEffect } from "react";
import ViewComment from "../components/ViewComment";

function GetFight({ accessToken, fightId }) {
	const [fight, setfight] = useState();

	const fightHandler = (fightId) => {
		console.log(fightId);
	};

	return (
		<>
			<div>{fightId}</div>
			<ViewComment accessToken={accessToken} fightId={fightId} />
		</>
	);
}

export default GetFight;
