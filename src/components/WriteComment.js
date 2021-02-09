import axios from "axios";
import React, { useState } from "react";
import "../style/WriteComment.css";
function WirteComment({
	viewCommnetHandler,
	fightId,
	accessToken,
	fight,
	side,
}) {
	const [writeComment, setWriteComment] = useState("");

	const submitComment = () => {
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
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<div>
				<input
					type="textarea"
					placeholder="댓글을 입력해보세요"
					value={writeComment}
					onChange={(e) => {
						setWriteComment(e.target.value);
					}}
				></input>
				<button onClick={() => submitComment()}>작성</button>
			</div>
		</div>
	);
}

export default WirteComment;
