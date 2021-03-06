import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
// import Loading from "../components/Loading";
import "../style/Login.css";
import googleLogin from "../img/RealgoogleLogin.png";
import nugatheSam from "../img/nugatheSam.png";
import LoadingPng from "../img/Loading.png";
import LoginPng from "../img/Login.png";
import xPng from "../img/x.png";
import SignUp from "../img/SignUp.png";

function Login({ loginHandler, issueAccessToken, history }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setError] = useState("");
	const [isLoad, setIsLoad] = useState(false);
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&
redirect_uri=https://www.nugathesam.com/login&response_type=code&client_id=103482969021-9v5buae9qqmjb71n9geuprb73fe1c013.apps.googleusercontent.com`;

	const googleLoginHandler = () => {
		window.location.assign(GOOGLE_LOGIN_URL);
	};

	const getAccessToken = (authorizationCode) => {
		let url = "https://s.nugathesam.com/users/social";
		setIsLoad(true);
		axios.post(url, { authorizationCode }).then((res) => {
			loginHandler(true);
			issueAccessToken(res.data.token);
			setIsLoad(false);
			history.push("/");
		});
	};

	useEffect(() => {
		const url = new URL(window.location.href);
		const authorizationCode = url.searchParams.get("code");

		if (authorizationCode) {
			getAccessToken(authorizationCode);
		}
	});

	const onChangePass = (e) => {
		setPassword(e.target.value);
	};

	const handleKeyPress = (e) => {
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
				alert("이메일을 또는 비밀번호를 확인하세요");
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
					<img src={LoadingPng} alt="LoadingPng" width="400px"></img>
				</div>
			) : (
				// <Loading isLoad={isLoad} />
				<div className="loginModal-container">
					<div className="loginModal">
						<div className="LoginLogoBox">
							<img
								className="LoginLogo"
								src={nugatheSam}
								alt="nugatheSam"
								width="200px"
							></img>
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
							<div className="loginbutton">
								<img
									src={LoginPng}
									alt="LoginPng"
									onClick={loginRequestHandler}
									width="150px"
									// height="37px"
								></img>
							</div>
							<button className="loginbutton" onClick={googleLoginHandler}>
								<img
									src={googleLogin}
									alt="googleLogin"
									width="200px"
									// height="45px"
								></img>
							</button>
							<br />

							<br />
							{/* {errorMessage && <div>{errorMessage}</div>} */}
							<Link to="signup">
								<img
									className="login-signup"
									src={SignUp}
									alt="SignUp"
									width="155px"
								></img>
							</Link>

							<div className="loginclose" onClick={closeModal}>
								<img src={xPng} alt={xPng} width="35px"></img>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default withRouter(Login);
