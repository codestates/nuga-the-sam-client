import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Loading from "../components/Loading";
import "../style/Login.css";
import googleLogin from "../img/googleLogin.png";
import nugatheSam from "../img/nugatheSam.png";
import LoadingPng from "../img/Loading.png";
function Login({ loginHandler, issueAccessToken, history }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setError] = useState("");
	const [isLoad, setIsLoad] = useState(false);
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
		console.log(e.target.value);
	};

	const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&
redirect_uri=http://localhost:3000/login&response_type=code&client_id=103482969021-9v5buae9qqmjb71n9geuprb73fe1c013.apps.googleusercontent.com`;

	const googleLoginHandler = () => {
		window.location.assign(GOOGLE_LOGIN_URL);
	};

	const getAccessToken = (authorizationCode) => {
		let url = "https://s.nugathesam.com/users/social";
		setIsLoad(true);
		axios.post(url, { authorizationCode }).then((res) => {
			// console.log(res.data);
			loginHandler(true);
			issueAccessToken(res.data.token);
			setIsLoad(false);
			history.push("/");
		});
	};

	useEffect(() => {
		const url = new URL(window.location.href);
		const authorizationCode = url.searchParams.get("code");
		// console.log(authorizationCode);
		if (authorizationCode) {
			getAccessToken(authorizationCode);
		}
	});

	const onChangePass = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
	};

	const handleKeyPress = (e) => {
		console.log(e.key);
		if (e.key === "Enter") {
			loginRequestHandler();
		}
	};

	const loginRequestHandler = () => {
		const url = "https://s.nugathesam.com/users/login";
		setIsLoad(true);
		axios
			.post(url, { email: email, password: password })
			.then((res) => {
				console.log(res);
				if (errorMessage) {
					setError("");
					loginHandler(true);
					issueAccessToken(res.data.token);
					setIsLoad(false);
					history.push("/");
				} else {
					loginHandler(true);
					issueAccessToken(res.data.token);
					setIsLoad(false);
					history.push("/");
				}
			})
			.catch((err) => {
				setError("이메일을 또는 비밀번호를 확인하세요");
				setIsLoad(false);
			});
	};
	const closeModal = () => {
		history.push("/");
	};

	return (
		<div className="greyBackground">
			{isLoad ? (
				<div className="LoadingBackground">
					<img src={LoadingPng} width="400px"></img>
				</div>
			) : (
				// <Loading isLoad={isLoad} />
				<div className="loginModal-container">
					<div className="loginModal">
						<div className="LoginLogoBox">
							<img className="LoginLogo" src={nugatheSam} width="200px"></img>
						</div>

						<div className="loginContent">
							<input
								className="logininput"
								type="text"
								value={email}
								onChange={onChangeEmail}
								placeholder="이메일"
							/>
							<br />
							<input
								className="logininput"
								type="password"
								value={password}
								onChange={onChangePass}
								placeholder="비밀번호"
								onKeyPress={handleKeyPress}
							/>
							<br />
							<button className="loginbutton" onClick={googleLoginHandler}>
								<img src={googleLogin} width="100px"></img>
							</button>
							<br />
							<button className="loginbutton" onClick={loginRequestHandler}>
								로그인
							</button>
							<br />
							{errorMessage && <div>{errorMessage}</div>}
							<Link to="signup" className="login-signup">
								회원가입
							</Link>
							<div className="loginclose" onClick={closeModal}>
								<button>닫기</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default withRouter(Login);
