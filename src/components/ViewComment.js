import axios from "axios";
import React, { useState, useEffect } from "react";
import WriteComment from "./WriteComment.js";
import { withRouter } from "react-router-dom";
import "../style/ViewComment.css";
import Fights from "../pages/fights.js";

function ViewComment({ accessToken, fightId, fight, setFight, history }) {
	console.log(fight, "뷰 코멘트");

	return (
		<div>
			{/* {fight.comments.map((fight) => {
				return <div>{fight.text}</div>;
			})} */}
			{/* <div>{fight.comments[0].text}</div> */}

			{/* {fight.comments.map((fight) => {})} */}
			{/* {!fight.comments ? (
					<div className="Loding">로딩중....</div>
				) : (
					fights.comments.map((fights) => (
				
							<button className="newFight-name" key={fights.id}>
								<span className="fight-title">{fights.left}</span>
								<span className="newFight-vs"> vs </span>
								<span className="fight-title">{fights.right}</span>
								<div></div>
								<span className="fight-votes">{fights.left_vote_count}</span>
								<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="fight-votes"> {fights.right_vote_count}</span>
							</button>
			
					))
				)} */}
			{/* {!fights ? (
					<div className="Loding">로딩중....</div>
				) : (
					fights.map((fights) => (
						<button className="newFight-name" key={fights.id}>
							<span className="fight-title">{fights.left}</span>
							<span className="newFight-vs"> vs </span>
							<span className="fight-title">{fights.right}</span>
							<div></div>
							<span className="fight-votes">{fights.left_vote_count}</span>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="fight-votes"> {fights.right_vote_count}</span>
						</button>
					))
				)} */}
			{/* <div>{Fights.comments[0].text}</div> */}
			{/* {fight.comments.map((fight) => {
					{
						fight.side === "left" ? (
							<div>
								<div className="comment-name-left" key={fightId}>
									<span className="comment-user-left">{fight.nickname}</span>
									<span className="comment-text-left">{fight.text}</span>
									<button
										className="comment-votes-left"
										onClick={() => thumbUp()}
									>
										추천수 {}
									</button>
								</div>
							</div>
						) : (
							<div className="comment-name-right" key={fightId}>
								<span className="comment-user-right">{fight.nickname}</span>
								<span className="comment-text-right">{fight.text}</span>
								<button
									className="comment-votes-right"
									onClick={() => thumbUp()}
								>
									추천수 {}
								</button>
							</div>
						);
					}
				})} */}

			{/* <WriteComment
				fight={fight}
				// viewCommnetHandler={viewCommnetHandler}
				accessToken={accessToken}
				fightId={fightId}
			/> */}
		</div>
	);
}

export default withRouter(ViewComment);
