import axios from "axios";
import React, { useState } from "react";
import "../style/WriteComment.css";
function WriteComment({
	viewCommnetHandler,
	fightId,
	accessToken,
	fight,
	side,
}) {
	const [writeComment, setWriteComment] = useState("");

	const submitComment = () => {
		if (side) {
			axios
				.post(
					`https://s.nugathesam.com/fights/${fightId}/comments`,
					{
						text: writeComment,
						side: side,
					},
					{ headers: { Authorization: `Bearer ${accessToken}` } },
				)
				.then((res) => {
					viewCommnetHandler();
					setWriteComment("");
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			alert("투표 먼저 하세요!");
		}
	};

	return (
		<div className="WriteContainer">
			<input
				placeholder="댓글을 입력해보세요."
				value={writeComment}
				onChange={(e) => {
					setWriteComment(e.target.value);
				}}
				className="writeTextarea"
			></input>
			<button className="writeSubmit" onClick={() => submitComment()}>
				작성
			</button>
		</div>
	);
}

export default WriteComment;
