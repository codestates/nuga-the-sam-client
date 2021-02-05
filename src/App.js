<<<<<<< HEAD
import React, { useState } from "react";
import NewFights from "./components/NewFights.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HotTopic from "./components/HotTopic.js";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
function App() {
	return (
		<Router>
			<switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/mypage" component={Mypage} />
				<Route exact path="/signup" component={Signup} />
			</switch>
=======
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fights from "./pages/fights.js";
import Home from "./pages/Home.js";

function App() {
	return (
		<Router>
			<Switch>
				<Home exact path="/" component={Home} />

				<Fights exact path="/fights" component={Fights} />
			</Switch>
>>>>>>> dafd05b4db61cad2b5d425c6e78f480b1b98d9f7
		</Router>
	);
}

export default App;
