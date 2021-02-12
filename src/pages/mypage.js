import React, { useEffect, useState } from "react";
import ChangeNickNmaeModal from "./ChangeNickNameModal.js";
import { Link, withRouter } from "react-router-dom";
import "../style/Mypage.css";
import axios from "axios";
import mypage from "../img/mypage.png";
import myprofile from "../img/myprofile.png";
import myfight from "../img/myfight.png";
import mycomments from "../img/mycomments.png";

function MyPage({ userInfo, accessToken, setUserInfo, history }) {
	//* 닉네임 변경하는 모달창 상태
	const [ischangeNick, setisChangeNick] = useState(false);

	//* 닉네임 변경 클릭시 ischangeNick가 True로 되면서 닉네임 변경할 모달창이 나옴
	const changeButtonHandler = () => {
		setisChangeNick(true);
	};

	const GoLogin = () => {
		history.push("/login");
	};

	useEffect(() => {
		axios
			.get("https://s.nugathesam.com/users", {
				headers: { Authorization: `Bearer ${accessToken}` },
			})
			.then((res) => {
				setUserInfo(res.data);
			})

			.catch((err) => {});
	}, [accessToken, setUserInfo]);
	return (
		<div>
			{!userInfo ? (
				GoLogin()
			) : (
				<>
					<div className="mypage-userInfo-container">
						<div className="mypage-userInfo-body">
							<img
								className="mypage"
								src={mypage}
								alt="mypage"
								width="200px"
							></img>

							<div>
								<img src={myprofile} alt="myprofile" width="150px"></img>
							</div>

							<div className="nickname-body">
								<span className="nickname">
									별명 : <strong>{userInfo.nickname}</strong>{" "}
								</span>
								{/* <div className="mypage-userInfo-text">{userInfo.nickname}</div> */}
								<button
									className="mypage-userInfo-changeButton"
									onClick={() => {
										changeButtonHandler(true);
									}}
								>
									별명 변경
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
							</div>
							<span className="createdAt">
								가입일 : <strong> {userInfo.createdAt.slice(0, 10)}</strong>
								<span>&nbsp;&nbsp;</span>
								<strong> {userInfo.createdAt.slice(11, 19)} </strong>
							</span>

							<span className="mypage-userInfo-text"></span>
						</div>
					</div>
					<div className="mypage-userInfo-body2">
						<div>
							<img
								src={myfight}
								classNmae="myfight-title"
								alt="myfight"
								width="150px"
							></img>
						</div>
						<div className="mypage-myfights-body">
							{!userInfo.fights.length ? (
								<div>신청한 싸움이 없네요</div>
							) : (
								userInfo.fights.map((fights) => (
									<Link to={`/getfight/${fights.id}`}>
										<button className="newFight-name2" key={fights.id}>
											<span className="fight-left-title2">{fights.left}</span>
											<span className="newFight-vs2"> vs </span>
											<span className="fight-right-title2">{fights.right}</span>
											<div></div>
											<span className="fight-left-votes2">
												{fights.left_vote_count}
											</span>
											<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
											<span className="fight-right-votes2">
												{fights.right_vote_count}
											</span>
										</button>
									</Link>
								))
							)}
						</div>
					</div>
					<div className="mypage-userInfo-body">
						<div>
							<img
								className="mycomments-title"
								src={mycomments}
								alt="mycomments"
								width="150px"
							></img>
						</div>
						{!userInfo.comments.length ? (
							<div>작성한 댓글이 없네요</div>
						) : (
							userInfo.comments.map((comments) => (
								<Link to={`/getfight/${comments.fight_id}`}>
									<div className="mypage-comments-name" key={comments.fight_id}>
										<span className="mypage-comments-title">
											{comments.text}
										</span>
									</div>
								</Link>
							))
						)}
					</div>
				</>
			)}
		</div>
	);
}

export default withRouter(MyPage);
