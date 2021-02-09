import axios from "axios";
import React, { useState } from "react";

import { withRouter } from "react-router-dom";

function ModifyComment({
	setisModify,
	fightId,
	commentId,
	accessToken,
	setFight,
}) {
	const [Comment, setComment] = useState("");

	const handleSetComment = (e) => {
		setComment(e.target.value);
		console.log(
			commentId,
			"코멘트 아이디",
			fightId,
			"파이트 아이디",
			accessToken,
			"에세스 토큰",
		);
	};
	const ModifyComment = () => {
		axios
			.put(
				`https://s.nugathesam.com/fights/${fightId}/comments/${commentId}/modify`,
				{
					text: Comment,
				},
				{ headers: { Authorization: `Bearer ${accessToken}` } },
			)
			.then(() => {
				setisModify(false);
				const url = `https://s.nugathesam.com/fights/${fightId}`;
				axios.get(url).then((res) => {
					setFight(res.data);
				});
			});
	};

	return (
		<div className="ModifyComment-container">
			<div className="ModifyComment-body">
				<div>
					<input
						className="ModifyCommentBox"
						type="text"
						placeholder="댓글 수정!"
						value={Comment}
						onChange={(e) => handleSetComment(e)}
					></input>
					<button onClick={() => ModifyComment()}> 확인</button>
				</div>
			</div>
		</div>
	);
}
export default withRouter(ModifyComment);
