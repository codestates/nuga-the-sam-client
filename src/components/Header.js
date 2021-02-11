import React from "react";
import "../style/Header.css";
import { Link, withRouter } from "react-router-dom";
import nugatheSam from "../img/nugatheSam.png";
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
					<img src={nugatheSam} alt="nugatheSam" width="200px"></img>
				</Link>
				<div id="makefights-container">
					<div id="makefights-body">
						<Link to="/fights" id="makefights-title">
							새로운 결투 신청
						</Link>
					</div>
				</div>
				{isLogin ? (
					<div>
						<Link to="/mypage" id="mypage-title">
							마이페이지
						</Link>
						<Link to="/" onClick={handleClickLogout} id="logout-button">
							로그아웃
						</Link>
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
