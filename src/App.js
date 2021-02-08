import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fights from "./pages/fights.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Mypage from "./pages/mypage.js";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import axios from "axios";
import GetFight from "./pages/GetFight.js";

function App() {
	const [isLogin, setLogin] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	const [accessToken, setToken] = useState("");
	const [fightId, setFightId] = useState("");

	const loginHandler = () => {
		setLogin(true);
	};
	const logoutHandler = () => {
		setLogin(false);
		setToken("");
	};

	const handleNewFightClick = (fightId) => {
		setFightId(fightId);
	};
	const issueAccessToken = (token) => {
		setToken(token);

		axios
			.get("https://s.nugathesam.com/users", {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setUserInfo(res.data);
				console.log(res.data);
			})

			.catch((err) => {
				console.log("무언가 잘못됐다.");
			});
	};

	return (
		<>
			<Router>
				<Header isLogin={isLogin} logoutHandler={logoutHandler} />
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return (
								<Home
									accessToken={accessToken}
									handleNewFightClick={handleNewFightClick}
								/>
							);
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
						path="/GetFight"
						render={() => {
							return <GetFight accessToken={accessToken} fightId={fightId} />;
						}}
					/>
				</Switch>
			</Router>
		</>
	);
}
//userInfo
export default App;
