import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fights from "./pages/fights.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Mypage from "./pages/mypage.js";
import Home from "./pages/Home.js";
import Header from "./components/Header.js";

function App() {
	return (
		<Router>
			<Route exact component={Header} />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/mypage" component={Mypage} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/fights" component={Fights} />
			</Switch>
		</Router>
	);
}

export default App;
