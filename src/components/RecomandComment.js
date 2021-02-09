import axios from "axios";
import React, { useEffect, useState } from "react";

function RecomandComments({
	commentId,
	fightId,
	accessToken,
	setFight,
	setLoad,
}) {
	const recomandeCommentButton = () => {
		console.log(fightId, commentId, accessToken, "추천sss");
		axios
			.put(
				`https://s.nugathesam.com/fights/${fightId}/comments/${commentId}/like`,
				null,
				{ headers: { Authorization: `bearer ${accessToken}` } },
			)
			.then(() => {
				const url = `https://s.nugathesam.com/fights/${fightId}`;
				axios
					.get(url, { headers: { Authorization: `bearer ${accessToken}` } })
					.then((res) => {
						setFight(res.data);
						// setLoad(false);
					});
			});
	};

	return (
		<button
			onClick={() => {
				recomandeCommentButton();
			}}
		>
			추천
		</button>
	);
}

export default RecomandComments;
