import axios from "axios";
import React, { useState } from "react";

import { withRouter } from "react-router-dom";

function ModifyComment({ setisModify, fightId, commentId, accessToken }) {
	const [Comment, setComment] = useState("");

	const handleSetComment = (e) => {
		setComment(e.target.value);
	};
	const ModifyComment = () => {
		axios.put(
			`https://s.nugathesam.com/fights/${fightId}/comments/${commentId}/modify`,
			{
				text: Comment,
			},
			{ headers: { Authorization: `Bearer ${accessToken}` } },
		);
		setisModify(false);
	};

	return (
		<div clssName="ModifyComment-container">
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
