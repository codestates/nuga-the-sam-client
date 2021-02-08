// import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Mypage({ isLogin }) {
	return (
		<div>
			<Link to="/mypage">
				Mypage<span></span>
			</Link>
		</div>
	);
}
