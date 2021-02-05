import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Mypage({ props }) {
	const [userInfo, setUserInfo] = useState([]);
	const [myFights, setMyfights] = useState([]);
	const [myComments, setMyComments] = useState([]);

	const GetDataUserInfo = () => {
		axios.get(`https://s.nugathesam.com/users/`);

		setUserInfo();
	};
	const GetDataMyFights = () => {
		axios.get(`https://s.nugathesam.com/users/`);

		setMyfights();
	};
	const GetDataMyComments = () => {
		axios.get(`https://s.nugathesam.com/users/`);

		setMyComments();
	};

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
