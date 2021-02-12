import axios from "axios";
import React, { useState } from "react";

import { withRouter } from "react-router-dom";

function ModifyComment({
	setisModify,
	fightId,
	accessToken,
	setFight,
	fight,
	realCommentId,
}) {
	const [Comment, setComment] = useState("");

	const [commentId, setcommentId] = useState("");

	const handleSetComment = (e) => {
		setcommentId(fight);
		setComment(e.target.value);
		console.log(
			realCommentId,
			"코멘트 아이디",
			fightId,
			"파이트 아이디",
			accessToken,
			"에세스 토큰",
			commentId,
		);
	};
	const ModifyComment = () => {
		axios
			.put(
				`https://s.nugathesam.com/fights/${fightId}/comments/${realCommentId}/modify`,
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
			<input
				className="ModifyCommentBox"
				type="textarea"
				placeholder="수정할 댓글을 입력하세요."
				value={Comment}
				onChange={(e) => handleSetComment(e)}
			></input>

			<button className="modifyBtn" onClick={() => ModifyComment()}>
				{" "}
				확인
			</button>
		</div>
	);
}
export default withRouter(ModifyComment);
