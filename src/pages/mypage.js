import React from "react";

function MyPage({ userInfo, myFights, myComments }) {
	return (
		<div>
			<div id="mypage-userInfo-container">
				<div id="mypage-userInfo-body">
					<div id="mypage-userInfo-title">My Profile</div>

					<div className="mypage-userInfo">rnrel11@naver.com</div>
					<div className="mypage-userInfo">코공코공</div>
					<div className="mypage-userInfo">2021년 2월 4일 </div>
				</div>
			</div>

			<div id="mypage-myFights-container">
				<div id="mypage-myFights-body">
					<div id="mypage-myFights-title">My Fights</div>
					<div className="mypage-userInfo">손오공 vs 천진반</div>
					<div className="mypage-userInfo">뭉치 vs 똘똘이</div>
					<div className="mypage-userInfo">사자 vs 호랑이 </div>
				</div>
			</div>

			<div id="mypage-myComments-container">
				<div id="mypage-myComments-body">
					<div id="mypage-myComments-title">My Comments</div>
					<div className="mypage-userInfo">인간이 치타 3초컷 한다</div>
					<div className="mypage-userInfo">
						천진반 빡빡이 이미 죽어서 결투장에 나오지도 못함
					</div>
					<div className="mypage-userInfo">이딴 거 누가 생각했냐? </div>
				</div>
			</div>
		</div>
	);
}

export default MyPage;
