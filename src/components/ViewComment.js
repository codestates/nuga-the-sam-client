import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import WriteComment from "./WriteComment.js";
import "../style/ViewComment.css";
import ModifyComment from "../pages/ModifyComment.js";

function ViewComment({
	accessToken,
	fightId,
	fight,
	history,
	setLoad,
	setFight,
	userInfo,
}) {
	const [isModify, setisModify] = useState(false);

	const viewCommnetHandler = () => {
		const url = `https://s.nugathesam.com/fights/${fightId}`;
		axios.get(url).then((res) => {
			setFight(res.data);
			setLoad(false);
		});
	};
	useEffect(() => {
		const url = `https://s.nugathesam.com/fights/${fightId}`;
		axios.get(url).then((res) => {
			setFight(res.data);
			setLoad(false);
		});
	}, []);

	const modifyCommentButton = (e) => {
		setisModify(true);
	};

	return (
		<div>
			<div className="comment-container">
				{!fight.comments ? (
					<div>로딩중....</div>
				) : (
					fight.comments.map((fights) => {
						if (fights.side === "left") {
							if (fights.user.nickname === userInfo.nickname) {
								return (
									<div className="comment-name-left" key={fights.id}>
										<div className="comment-nickname-left ">
											{fights.user.nickname}
										</div>
										<span className="comment-time-left">
											{fights.createdAt}
										</span>
										<div className="comment-text-left">{fights.text}</div>
										<div className="comment-like-left ">
											{fights.like_count}
										</div>
										<button className="comment-votes-left">추천</button>

										<button
											className="comment-modify-left"
											onClick={(e) => modifyCommentButton(e)}
										>
											수정
										</button>
										{!isModify ? (
											<div></div>
										) : (
											<ModifyComment
												setisModify={setisModify}
												fightId={fightId}
												commentId={fights.id}
												accessToken={accessToken}
											></ModifyComment>
										)}
										<button className="comment-delete-left">삭제</button>
									</div>
								);
							} else {
								return (
									<div className="comment-name-left" key={fights.id}>
										<div className="comment-nickname-left ">
											{fights.user.nickname}
										</div>
										<span className="comment-time-left">
											{fights.createdAt}
										</span>
										<div className="comment-text-left">{fights.text}</div>
										<div className="comment-like-left ">
											{fights.like_count}
										</div>
										<button className="comment-votes-left">추천</button>
									</div>
								);
							}
						} else if (fights.side === "right") {
							if (fights.user.nickname === userInfo.nickname) {
								return (
									<div className="comment-name-right" key={fights.id}>
										<div className="comment-nickname-right ">
											{fights.user.nickname}
										</div>
										<span className="comment-time-right">
											{fights.createdAt}
										</span>
										<div className="comment-text-right">{fights.text}</div>
										<div className="comment-like-right">
											{fights.like_count}
										</div>
										<button className="comment-votes-right ">추천</button>
										<button className="comment-modify-right">수정</button>
										<button className="comment-delete-right">삭제</button>
									</div>
								);
							} else {
								return (
									<div className="comment-name-right" key={fights.id}>
										<div className="comment-nickname-right ">
											{fights.user.nickname}
										</div>
										<span className="comment-time-right">
											{fights.createdAt}
										</span>
										<div className="comment-text-right">{fights.text}</div>
										<div className="comment-like-right">
											{fights.like_count}
										</div>
										<button className="comment-votes-right ">추천</button>
									</div>
								);
							}
						}
					})
				)}
			</div>

			<WriteComment
				fightId={fightId}
				accessToken={accessToken}
				viewCommnetHandler={viewCommnetHandler}
				setLoad={setLoad}
			></WriteComment>
		</div>
	);
}

export default withRouter(ViewComment);
