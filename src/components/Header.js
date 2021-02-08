import React from "react";
import "../style/Header.css";
import { Link, withRouter } from "react-router-dom";

function Header({ isLogin, logoutHandler, history }) {
	// console.log(isLogin);

	const handleClickLogout = () => {
		logoutHandler();
		history.push("/");
	};

	return (
		<div id="header-container">
			<div id="header-body">
				<Link to="/" id="nugathesam-title">
					누가 더 쎔?
				</Link>
				{isLogin ? (
					<div>
						<Link to="/mypage" id="mypage-title">
							마이페이지
						</Link>
						<button onClick={handleClickLogout} id="logout-button">
							로그아웃
						</button>
					</div>
				) : (
					<Link to="/login" id="login-button">
						로그인
					</Link>
				)}
			</div>
		</div>
	);
}

export default withRouter(Header);
