import React from "react";
import { Link } from "react-router-dom";

function Header({ isLogin }) {
	console.log(isLogin);

	return (
		<div id="header-body">
			<span id="title">누가 더 쎔?</span>
			{isLogin ? (
				<Link to="/mypage">마이페이지</Link>
			) : (
				<Link to="/login">로그인</Link>
			)}
		</div>
	);
}

export default Header;
