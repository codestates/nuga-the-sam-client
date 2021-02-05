import React, { useState } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

function Login({ loginHandler, issueAccessToken, history }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setError] = useState("");

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
		console.log(e.target.value);
	};

	const onChangePass = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
	};

	const loginRequestHandler = () => {
		const url = "https://s.nugathesam.com/users/login";
		axios
			.post(url, { email: email, password: password })
			.then((res) => {
				console.log(res);
				if (errorMessage) {
					setError("");
					loginHandler(true);
					issueAccessToken(res.data.token);
					history.push("/");
				} else {
					loginHandler(true);
					issueAccessToken(res.data.token);
					history.push("/");
				}
			})
			.catch((err) => {
				setError("이메일을 또는 비밀번호를 확인하세요");
			});
	};

	return (
		<div>
			<div>
				<input
					type="text"
					value={email}
					onChange={onChangeEmail}
					placeholder="이메일"
				/>
				<br />
				<input
					type="password"
					value={password}
					onChange={onChangePass}
					placeholder="비밀번호"
				/>
				<br />
				<button onClick={loginRequestHandler}>로그인</button>
				<br />
				{errorMessage && <div>{errorMessage}</div>}
				<Link to="signup">회원가입</Link>
			</div>
		</div>
	);
}

export default withRouter(Login);
