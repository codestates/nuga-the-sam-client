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

function App() {
	const [isLogin, setLogin] = useState(false);
	const [userInfo, setUserInfo] = useState({});
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
							return <Home />;
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
							return <Mypage isLogin={isLogin} />;
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
				</Switch>
			</Router>
		</>
	);
}

export default App;
