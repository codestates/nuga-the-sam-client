import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fights from "./pages/fights.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Mypage from "./pages/mypage.js";
import Header from "./components/Header";
import Home from "./pages/Home.js";
function App() {
	const [isLogin, setLogin] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	const [accessToken, setToken] = useState("");
	return (
		<>
			<Router>
				<Header />
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
							return <Login />;
						}}
					/>
					<Route
						exact
						path="/mypage"
						render={() => {
							return <Mypage />;
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
							return <Fights />;
						}}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
