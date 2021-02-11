import axios from "axios";
import React, { useEffect, useState } from "react";
import WriteComment from "./WriteComment.js";
import "../style/ViewComment.css";
import ModifyComment from "../pages/ModifyComment.js";
import DeleteComments from "./DeleteComments.js";
import RecomandComment from "./RecomandComment.js";

function ViewComment({
	accessToken,
	fightId,
	fight,
	setLoad,
	setFight,
	userInfo,
}) {
	const [isModify, setisModify] = useState(false);

	const [realCommentId, setRealCommentId] = useState("");
	const viewCommnetHandler = () => {
		const url = `https://s.nugathesam.com/fights/${fightId}`;
		axios
			.get(url, { headers: { Authorization: `bearer ${accessToken}` } })
			.then((res) => {
				setFight(res.data);
				setLoad(false);
			});
	};
	useEffect(() => {
		const url = `https://s.nugathesam.com/fights/${fightId}`;
		axios
			.get(url, { headers: { Authorization: `bearer ${accessToken}` } })
			.then((res) => {
				setFight(res.data);
				setLoad(false);
			});
	}, [accessToken, fightId, setFight, setLoad]);

	const modifyCommentButton = (fights) => {
		setRealCommentId(fights);
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
											{fights.createdAt.slice(0, 10)}
											<span>&nbsp;&nbsp;</span>
											{fights.createdAt.slice(11, 19)}
										</span>
										<div className="comment-text-left">{fights.text}</div>
										<div className="comment-like-left ">
											{fights.like_count}
										</div>
										<>
											<RecomandComment
												setisModify={setisModify}
												fightId={fightId}
												commentId={fights.id}
												accessToken={accessToken}
												setFight={setFight}
											></RecomandComment>
										</>

										<button
											className="comment-modify-left"
											onClick={(e) => modifyCommentButton(fights.id)}
										>
											수정
										</button>

										<DeleteComments
											commentId={fights.id}
											fightId={fightId}
											accessToken={accessToken}
											setFight={setFight}
											setLoad={setLoad}
										></DeleteComments>
									</div>
								);
							} else {
								return (
									<div className="comment-name-left" key={fights.id}>
										<div className="comment-nickname-left ">
											{fights.user.nickname}
										</div>
										<span className="comment-time-left">
											{fights.createdAt.slice(0, 10)}
											<span>&nbsp;&nbsp;</span>
											{fights.createdAt.slice(11, 19)}
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
											{fights.createdAt.slice(0, 10)}
											<span>&nbsp;&nbsp;</span>
											{fights.createdAt.slice(11, 19)}
										</span>
										<div className="comment-text-right">{fights.text}</div>
										<div className="comment-like-right">
											{fights.like_count}
										</div>
										<>
											<RecomandComment
												setisModify={setisModify}
												fightId={fightId}
												commentId={fights.id}
												accessToken={accessToken}
												setFight={setFight}
											></RecomandComment>
										</>
										<button
											className="comment-modify-right"
											onClick={(e) => modifyCommentButton(fights.id)}
										>
											수정
										</button>
										{/* {!isModify ? (
											<div></div>
										) : (
											<div>
												<ModifyComment
													setisModify={setisModify}
													fightId={fightId}
													commentId={fights.id}
													accessToken={accessToken}
													setFight={setFight}
												></ModifyComment>
											</div>
										)} */}
										<DeleteComments
											commentId={fights.id}
											fightId={fightId}
											accessToken={accessToken}
											setFight={setFight}
											setLoad={setLoad}
										></DeleteComments>
									</div>
								);
							} else {
								return (
									<div className="comment-name-right" key={fights.id}>
										<div className="comment-nickname-right ">
											{fights.user.nickname}
										</div>
										<span className="comment-time-right">
											{fights.createdAt.slice(0, 10)}
											<span>&nbsp;&nbsp;</span>
											{fights.createdAt.slice(11, 19)}
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
			{!isModify ? (
				<div></div>
			) : (
				<>
					<ModifyComment
						fight={fight}
						setisModify={setisModify}
						fightId={fightId}
						accessToken={accessToken}
						setFight={setFight}
						realCommentId={realCommentId}
					></ModifyComment>
				</>
			)}
			<WriteComment
				fightId={fightId}
				accessToken={accessToken}
				viewCommnetHandler={viewCommnetHandler}
				setLoad={setLoad}
				fight={fight}
				side={fight.vote_where}
			></WriteComment>
		</div>
	);
}

export default ViewComment;
