import axios from "axios";
import React, { useState, useEffect } from "react";
import WriteComment from "./WriteComment.js";
function ViewComment({ accessToken, fightId }) {
	const [viewComment, setviewComment] = useState([]);

	const viewCommnetHandler = () => {
		axios.get();
	};
	return (
		<>
			<div>
				<div></div>

				<div></div>
			</div>
			<WriteComment
				viewCommnetHandler={viewCommnetHandler}
				setviewComment={setviewComment}
				accessToken={accessToken}
			/>
		</>
	);
}

export default ViewComment;
