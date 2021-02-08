import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Mypage({ isLogin }) {
	const [userInfo, setUserInfo] = useState([]);
	const [myFights, setMyfights] = useState([]);
	const [myComments, setMyComments] = useState([]);

	return (
		<div>
			<Link
				to="/mypage"
				userInfo={userInfo}
				myFights={myFights}
				myComments={myComments}
			>
				Mypage<span></span>
			</Link>
		</div>
	);
}
