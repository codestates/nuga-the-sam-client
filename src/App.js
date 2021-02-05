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
		</Router>
	);
}

export default App;
