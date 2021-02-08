import React, { useState } from "react";
import ChangeNickNmaeModal from "./ChangeNickNameModal.js";
import "../style/Mypage.css";

function MyPage({ userInfo, myFights, myComments, accessToken, setUserInfo }) {
	//* 닉네임 변경하는 모달창 상태
	const [ischangeNick, setisChangeNick] = useState(false);

	//* 닉네임 변경 클릭시 ischangeNick가 True로 되면서 닉네임 변경할 모달창이 나옴
	const changeButtonHandler = () => {
		setisChangeNick(true);
	};

	return (
		<div>
			<div className="mypage-userInfo-container">
				<div className="mypage-userInfo-body">
					<div className="mypage-userInfo-title">My Profile</div>
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
					<div className="mypage-userInfo-text">{userInfo.createdAt}</div>
				</div>
			</div>

			<div className="mypage-userInfo-container">
				<div className="mypage-userInfo-body">
					<div className="mypage-userInfo-title">My Fights</div>
					<div className="mypage-userInfo-text">손오공 vs 천진반</div>
					<div className="mypage-userInfo-text">뭉치 vs 똘똘이</div>
					<div className="mypage-userInfo-text">사자 vs 호랑이 </div>
				</div>
			</div>

			<div className="mypage-userInfo-container">
				<div className="mypage-userInfo-body">
					<div className="mypage-userInfo-title">My Comments</div>
					<div className="mypage-userInfo-text">인간이 치타 3초컷 한다</div>
					<div className="mypage-userInfo-text">
						천진반 빡빡이 이미 죽어서 결투장에 나오지도 못함
					</div>
					<div className="mypage-userInfo-text">이딴 거 누가 생각했냐? </div>
				</div>
			</div>
		</div>
	);
}

export default MyPage;
