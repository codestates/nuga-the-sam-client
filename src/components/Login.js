import axios from "axios";
import React, { Component } from "react";
/*
app.js에서 loginHandler 만들어서 넘겨줘야함
loginHandler 는 토큰을 받아서 state를 
초기 App:
state = { isLogin: false, accessToken: "" }
로그인 요청 후 App:
state = { isLogin: true, accessToken: 서버에_요청하여_받은_access_token }
바꿔줘야함

*/
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: "",
			password: "",
		};
		this.inputHandler = this.inputHandler.bind(this);
		this.loginRequestHandler = this.loginRequestHandler.bind(this);
	}
	inputHandler(e) {
		console.log(e.target.value);
		this.setState({ [e.target.name]: e.target.value });
	}
	loginRequestHandler() {
		const url = "http://3.17.16.115:4000/login";
		console.log(url);
		// axios
		// 	.post(url, { user_id: this.state.user_id, password: this.state.password })
		// 	.thennsole.log(res);
		// 		this.props.loginHandler(res);((res) => {
		// 		co
		// 	});
	}

	render() {
		return (
			<div className="loginContainer">
				<div className="inputField">
					<div>아이디</div>
					<input
						name="user_id"
						onChange={(e) => this.inputHandler(e)}
						value={this.state.user_id}
						type="text"
					/>
				</div>
				<div className="inputField">
					<div>패스워드</div>
					<input
						name="password"
						onChange={(e) => this.inputHandler(e)}
						value={this.state.password}
						type="password"
					/>
				</div>
				<div className="loginBtnContainer">
					<button onClick={this.loginRequestHandler} className="loginBtn">
						로그인
					</button>
				</div>
			</div>
		);
	}
}

export default Login;
