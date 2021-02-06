import React from "react";
import { Link, withRouter } from "react-router-dom";

function Header({ isLogin, logoutHandler, history }) {
	console.log(isLogin);

	const handleClickLogout = () => {
		logoutHandler();
		history.push("/");
	};

	return (
		<div id="header-body">
			<Link to="/" id="title">
				누가 더 쎔?
			</Link>
			{isLogin ? (
				<div>
					<Link to="/mypage">마이페이지</Link>
					<button onClick={handleClickLogout}>로그아웃</button>
				</div>
			) : (
				<Link to="/login">로그인</Link>
			)}
		</div>
	);
}

export default withRouter(Header);
