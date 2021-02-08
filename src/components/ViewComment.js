import axios from "axios";
import React, { useState } from "react";
// import WriteComment from "./WriteComment.js";
function ViewComment({ accessToken, fightId, fight }) {
	console.log(fight);
	// const viewCommnetHandler = () => {
	// 	axios.get(``).then((res) => {
	// 		setviewComment(res.data);
	// 	});
	// };

	// const thumbUp = () => {
	// 	axios.put(``).then(() => {
	// 		axios.get(``).then((res) => {
	// 			setviewComment(res.data);
	// 		});
	// 	});
	// };
	console.log(fight.comments, "12312312321312312312");
	return (
		// <>
		// 	<div>
		// 		<div></div>
		// 		{!viewComment ? (
		// 			<div className="Loding">로딩중....</div>
		// 		) : (
		// 			viewComment.map((viewComment) => (
		// 				<div className="comment-name" key={fightId}>
		// 					<span className="comment-user">{viewComment}</span>
		// 					<span className="comment-text">{viewComment}</span>
		// 					<button className="comment-votes" onClick={() => thumbUp()}>
		// 						추천
		// 					</button>
		// 				</div>
		// 			))
		// 		)}
		// 		<div></div>
		// 	</div>
		// <WriteComment
		// 	viewCommnetHandler={viewCommnetHandler}
		// 	accessToken={accessToken}
		// 	fightId={fightId}
		// />
		// </>

		<div>
			{fight.comments.map((fight) => {
				return <div>{fight.text}</div>;
			})}
		</div>
	);
}

export default ViewComment;
