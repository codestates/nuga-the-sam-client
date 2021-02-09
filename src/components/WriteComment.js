import axios from "axios";
import React, { useState } from "react";
import "../style/WriteComment.css";
function WirteComment({
	viewCommnetHandler,
	fightId,
	accessToken,
	fight,
	setLoad,
}) {
	const [writeComment, setWriteComment] = useState("");

	const submitComment = () => {
		console.log(fightId, "파이트 아이디");
		console.log(writeComment, "댓글 내용");
		console.log(accessToken, "토큰");
		// setLoad(true);
		axios
			.post(
				`https://s.nugathesam.com/fights/${fightId}/comments`,
				{
					text: writeComment,
					side: `left`,
				},
				{ headers: { Authorization: `Bearer ${accessToken}` } },
			)
			.then((res) => {
				// console.log(res.data, "너 누구야??????");

				viewCommnetHandler();
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(fightId);
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
