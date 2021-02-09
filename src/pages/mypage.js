import React, { useEffect, useState } from "react";
import ChangeNickNmaeModal from "./ChangeNickNameModal.js";
import { Link } from "react-router-dom";
import "../style/Mypage.css";
import axios from "axios";
const moment = require("moment");
function MyPage({ userInfo, accessToken, setUserInfo }) {
	//* 닉네임 변경하는 모달창 상태
	const [ischangeNick, setisChangeNick] = useState(false);

	//* 닉네임 변경 클릭시 ischangeNick가 True로 되면서 닉네임 변경할 모달창이 나옴
	const changeButtonHandler = () => {
		setisChangeNick(true);
	};

	useEffect(() => {
		axios
			.get("https://s.nugathesam.com/users", {
				headers: { Authorization: `Bearer ${accessToken}` },
			})
			.then((res) => {
				setUserInfo(res.data);
				// console.log(res.data);
			})

			.catch((err) => {
				console.log("무언가 잘못됐다.");
			});
	}, []);
	return (
		<div>
			{!userInfo ? (
				<div className="Loding">로딩중....</div>
			) : (
				<div>
					{" "}
					<div className="mypage-userInfo-container">
						<div className="mypage-userInfo-body">
							<div className="mypage-userInfo-title">My Profile</div>
							<div>키미노 나마에와</div>
							<div className="mypage-userInfo-text">{userInfo.nickname}</div>
							<button
								className="mypage-userInfo-changeButton"
								onClick={() => {
									changeButtonHandler(true);
								}}
							>
								닉네임 변경
							</button>
							{ischangeNick ? (
								<ChangeNickNmaeModal
									setisChangeNick={setisChangeNick}
									accessToken={accessToken}
									setUserInfo={setUserInfo}
								></ChangeNickNmaeModal>
							) : (
								<div></div>
							)}
							<div>가입일</div>

							<div className="mypage-userInfo-text">
								{userInfo.createdAt.slice(0, 10)}
								<span>&nbsp;&nbsp;</span>
								{userInfo.createdAt.slice(11, 19)}
							</div>
						</div>
					</div>
					<div className="mypage-userInfo-container">
						<div className="mypage-userInfo-body">
							<div className="mypage-userInfo-title">My Fights</div>
							{!userInfo.fights.length ? (
									<div>쫄보세요? 신청한 싸움이 없네요</div>
							) : (
								userInfo.fights.map((fights) => (
									<Link to={`/getfight/${fights.id}`}>
										<button className="newFight-name" key={fights.id}>
											<span className="fight-title">{fights.left}</span>
											<span className="newFight-vs"> vs </span>
											<span className="fight-title">{fights.right}</span>
											<div></div>
											<span className="fight-votes">
												{fights.left_vote_count}
											</span>
											<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
											<span className="fight-votes">
												{fights.right_vote_count}
											</span>
										</button>
									</Link>
								))
							)}
						</div>
					</div>
					<div className="mypage-userInfo-container">
						<div className="mypage-userInfo-body">
							<div className="mypage-userInfo-title">My Comments</div>
							{!userInfo.comments.length ? (
								<div>쫄보세요? 작성한 댓글이 없네요</div>
							) : (
								userInfo.comments.map((comments) => (
									<Link to={`/getfight/${comments.fight_id}`}>
										<div
											className="mypage-comments-name"
											key={comments.fight_id}
										>
											<span className="mypage-comments-title">
												{comments.text}
											</span>
										</div>
									</Link>
								))
							)}
						</div>
					</div>{" "}
				</div>
			)}
		</div>
	);
}

export default MyPage;
