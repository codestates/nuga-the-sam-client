import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setError] = useState("");

	const onChangeId = (e) => {
		setUserId(e.target.value);
		console.log(e.target.value);
	};

	const onChangePass = (e) => {
		console.log(password);
		setPassword(e.target.value);
	};

	const handleClick = (e) => {
		console.log(`id :${userId} password :${password} `);
	};

	return (
		<div>
			<div>
				<input
					type="test"
					value={userId}
					onChange={onChangeId}
					placeholder="아이디"
				/>
				<br />
				<input
					type="password"
					value={password}
					onChange={onChangePass}
					placeholder="비밀번호"
				/>
				<br />
				<button onClick={handleClick}>로그인</button>
				<br />
				<Link to="signup">회원가입</Link>
			</div>
		</div>
	);
}

export default Login;
