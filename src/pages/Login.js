import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

function Login({ loginHandler, issueAccessToken, history }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setError] = useState("");
	const [isLoad, setIsLoad] = useState("false");
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
		console.log(e.target.value);
	};
	const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&
redirect_uri=http://localhost:3000/login&response_type=code&client_id=103482969021-9v5buae9qqmjb71n9geuprb73fe1c013.apps.googleusercontent.com`;

	const googleLoginHandler = () => {
		window.location.assign(GOOGLE_LOGIN_URL);
	};

	const getAccessToken = async (authorizationCode) => {
		// 받아온 authorization code로 다시 OAuth App에 요청해서 access token을 받을 수 있습니다.
		// access token은 보안 유지가 필요하기 때문에 클라이언트에서 직접 OAuth App에 요청을 하는 방법은 보안에 취약할 수 있습니다.
		// authorization code를 서버로 보내주고 서버에서 access token 요청을 하는 것이 적절합니다.
		// TODO: 서버의 /callback 엔드포인트로 authorization code를 보내주고 access token을 받아옵니다.
		// access token을 받아온 후
		//  - 로그인 상태를 true로 변경하고,
		//  - state에 access token을 저장하세요
		let url = "https://s.nugathesam.com/users/social";
		await axios.post(url, { authorizationCode }).then((res) => {
			loginHandler(true);
			issueAccessToken(res.data.token);
			history.push("/");
		});
	};
	useEffect(() => {
		const url = new URL(window.location.href);
		const authorizationCode = url.searchParams.get("code");
		console.log(authorizationCode);
		if (authorizationCode) {
			// getAccessToken(authorizationCode);
		}
	}, []);

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
				<button onClick={googleLoginHandler}>구글 로그인</button>
				<button onClick={loginRequestHandler}>로그인</button>
				<br />
				{errorMessage && <div>{errorMessage}</div>}
				<Link to="signup">회원가입</Link>
			</div>
		</div>
	);
}

export default withRouter(Login);
