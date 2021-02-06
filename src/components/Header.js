import React from "react";
import { Link } from "react-router-dom";

function Header({ isLogin }) {

	return (
		<div id="header-body">
			<Link to="/" id="title">
				누가 더 쎔?
			</Link>
			{isLogin ? (
				<div>
					<Link to="/mypage">마이페이지</Link>
					<button>로그아웃</button>
				</div>
			) : (
				<Link to="/login">로그인</Link>
			)}
		</div>
	);
}

export default Header;
