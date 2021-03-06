import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fights from "./pages/fights.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Mypage from "./pages/mypage.js";
import Footer from "./pages/Footer.js";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import axios from "axios";
import GetFight from "./pages/GetFight.js";
// import Loading from "./components/Loading";

function App() {
	const [isLogin, setLogin] = useState(false);
	const [userInfo, setUserInfo] = useState(false);
	const [accessToken, setToken] = useState("");

	const loginHandler = () => {
		setLogin(true);
	};
	const logoutHandler = () => {
		setLogin(false);
		setToken("");
	};

	const issueAccessToken = (token) => {
		setToken(token);
		axios
			.get("https://s.nugathesam.com/users", {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setUserInfo(res.data);
			})
			.catch((err) => {});
	};

	return (
		<div id="Master body">
			<Router>
				<Header isLogin={isLogin} logoutHandler={logoutHandler} />
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return <Home accessToken={accessToken} />;
						}}
					/>
					<Route
						exact
						path="/login"
						render={() => {
							return (
								<Login
									loginHandler={loginHandler}
									issueAccessToken={issueAccessToken}
								/>
							);
						}}
					/>
					<Route
						exact
						path="/mypage"
						render={() => {
							return (
								<Mypage
									isLogin={isLogin}
									accessToken={accessToken}
									userInfo={userInfo}
									setUserInfo={setUserInfo}
								/>
							);
						}}
					/>

					<Route
						exact
						path="/signup"
						render={() => {
							return <Signup />;
						}}
					/>
					<Route
						exact
						path="/fights"
						render={() => {
							return <Fights accessToken={accessToken} />;
						}}
					/>
					<Route
						exact
						path="/getfight/:id"
						render={() => {
							return <GetFight accessToken={accessToken} userInfo={userInfo} />;
						}}
					/>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}
//userInfo
export default App;
