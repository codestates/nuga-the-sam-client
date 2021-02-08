import axios from "axios";
import React, { useState } from "react";

function WirteComment({
	viewCommnetHandler,
	setviewComment,
	fightId,
	accessToken,
}) {
	const [writeComment, setWriteComment] = useState("");

	const submitComment = () => {
		axios.post();
		viewCommnetHandler();
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
				<button onClick={() => submitComment()}> 작성</button>
			</div>
		</div>
	);
}

export default WirteComment;
