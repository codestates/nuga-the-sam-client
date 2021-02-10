import React from "react";
import "../style/Loading.css";
import LoadingPng from "../img/Loading.png";
function Loading() {
	return (
		<div id="whiteBackground">
			<img className="Loadingimg" src={LoadingPng} width="300px"></img>
		</div>
	);
}

export default Loading;
