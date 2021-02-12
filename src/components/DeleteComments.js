import axios from "axios";
// import React, { useEffect, useState } from "react";

function DeleteComments({
	commentId,
	fightId,
	accessToken,
	setFight,
	setLoad,
}) {
	const deleteCommentButton = () => {
		if (window.confirm("정말 삭제하시겠습니까??") === true) {
			console.log(fightId, commentId, accessToken);
			axios
				.put(
					`https://s.nugathesam.com/fights/${fightId}/comments/${commentId}/delete`,
					null,
					{ headers: { Authorization: `bearer ${accessToken}` } },
				)
				.then(() => {
					const url = `https://s.nugathesam.com/fights/${fightId}`;
					axios
						.get(url, {
							headers: { Authorization: `bearer ${accessToken}` },
						})
						.then((res) => {
							setFight(res.data);
							setLoad(false);
						});
				});
		} else {
			return;
		}
	};
	return (
		<button
			onClick={() => {
				deleteCommentButton();
			}}
			className="deleteBtn"
		>
			삭제
		</button>
	);
}

export default DeleteComments;
