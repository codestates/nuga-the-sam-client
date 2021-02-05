import axios from "axios";
import React, { useState } from "react";

export default function Mypage({ props }) {
	const [userId, setUserId] = useState("");
	const [myFights, setMyfights] = useState([]);
	const [myComments, setMyComments] = useState([]);

	const handleFightClick = () => {
		//해당 파이트 클릭시 그 페이지로 화면이동
	};
	const handleCommentClick = () => {
		//해당 코멘트 클릭시 그 페이지로 화면이동
	};
	const handleLogoutClick = () => {
		//해당 버튼 클릭시 로그아웃 기능
		// props.logoutHandler;
	};

	const accessTokenRequest = () => {
		const url = "";
		let token = props.accessToken;
		// console.log(token);
		// axios.get(url, { headers: { Authorization: token } }).then((res) => {
		// 	console.log(res.data);
		// 	//setUserId()
		// 	//setMyfights()
		// 	//setMyComments()
		// });
	};

	return (
		<div className="mypageContainer">
			<div className="mypageTitle">마이 페이지</div>
			<hr />
			<br />
			<div className="userIdContainer">
				<div className="userId">나의 애칭: {userId}</div>
			</div>
			<div className="myFightsContainer">
				//여기서 myFights들을 맵핑하여 렌더링
				{/* {myFights.map((fight) => {
					return (
						<div className="myFights" key={fight.id}>{fight.}</div>
					)
				})} */}
				마이파이트 렌더링 될곳
			</div>
			<div className="myCommentsContainer">
				{/* 
					{myComments.map((comment) => {
						return(
							<div className="myComments" key={comment.id}>{comments.}</div>
						)
					})
					
					}
				*/}
				마이코멘트 렌더링 될곳
			</div>
			<div className="logoutContainer">
				<button onClick={handleLogoutClick}>로그아웃</button>
			</div>
		</div>
	);
}
