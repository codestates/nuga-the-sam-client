import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import Login from "./Login";
// import Mypage from "./Mypage";
export default function Header() {
	const [isLogin, setLogin] = useState(false);
	const [accessToken, setToken] = useState("");

	const loginHandler = (token) => {
		// setLogin(true);
		// setToken(token);
		console.log("login!!");
	};

	const logoutHandler = (token) => {
		// let logoutUrl = "";
		// axios.post(logoutUrl, token).then(() => {
		// 	setLogin(false);
		// 	setToken("");
		// });
		console.log("logout!!");
	};

	const handleWriteClick = () => {
		//해당 버튼 클릭시 글쓰기 페이지 이동!
		console.log("글쓰기!!");
	};
	const issueAccessToken = (token) => {
		setLogin(true);
		setToken(token);
	};

	return (
		<div>
			{/* <div className="headerTitle">누가 더 쎔?</div>
			{isLogin ? (
				<div>
					<div onClick={handleWriteClick}>New Fights</div>
					<Mypage
						accessToken={accessToken}
						issueAccessToken={issueAccessToken}
						logoutHandler={logoutHandler}
					/>
				</div>
			) : (
				<Login loginHandler={loginHandler} />
				)} */}
			<Switch>
				<Route exact path="/">
					<login />
				</Route>
			</Switch>
		</div>
	);
}
