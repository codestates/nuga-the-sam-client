import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
function Signup({ history }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checkPass, setCheckPass] = useState("");
	const [nickname, setNickname] = useState("");
	const [errorMessage, setError] = useState("");
	const [checkEmail, setCheckEmail] = useState(false);
	const [validPass, setValidPass] = useState(false);
	const [reviewEmail, setReviewEmail] = useState(false);
	const [reviewEmailError, setReviewEmailError] = useState("");
	const [reviewNickname, setReviewNickname] = useState(false);
	const [reviewNicknameError, setReviewNicknameError] = useState("");

	//!onChange
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
		console.log(e.target.value);
		setCheckEmail(validEmailCheck(e.target.value));
	};
	const onChangeNickname = (e) => {
		setNickname(e.target.value);
		console.log(e.target.value);
	};
	const onChangePass = (e) => {
		setPassword(e.target.value);
		console.log(e.target.value);
		setValidPass(validPassCheck(e.target.value));
	};
	const onChangeCheckPass = (e) => {
		setCheckPass(e.target.value);
		console.log(e.target.value);
	};

	//!validate
	const validEmailCheck = (email) => {
		let regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
		return regExp.test(email);
	};

	const validPassCheck = (pass) => {
		let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/;
		return regExp.test(pass);
	};
	const passCheck = (password, checkPass) => {};

	// 	https://s.nugathesam.com/users/signup/checkemail
	// https://s.nugathesam.com/users/signup/checknick

	//! 중복확인
	const serverCheckEmail = () => {
		setReviewEmailError("");
		setReviewEmail(false);
		let url = "https://s.nugathesam.com/users/signup/checkemail";
		let checkEmail = email;
		axios
			.post(url, { email: checkEmail })
			.then((res) => {
				setReviewEmail(true);
			})
			.catch((err) => {
				setReviewEmailError("중복된 이메일 입니다.");
			});
	};

	const serverCheckNickname = () => {
		setReviewNickname(false);
		setReviewNicknameError("");
		let url = "https://s.nugathesam.com/users/signup/checknick";
		let checkNick = nickname;
		axios
			.post(url, { nickname: checkNick })
			.then((res) => {
				setReviewNickname(true);
			})
			.catch((err) => {
				setReviewNicknameError("중복된 닉네임입니다.");
			});
	};

	//! 회원가입 버튼
	const handleSignup = () => {
		let url = "https://s.nugathesam.com/users/signup";
		if (
			email === "" ||
			nickname === "" ||
			password === "" ||
			checkPass === ""
		) {
			setError("모든항목을 입력하라능!!");
		} else {
			axios
				.post(
					url,
					{ email: email, password: password, nickname: nickname },
					{ "Content-Type": "application/json", withCredentials: true },
				)
				.then(() => {
					if (errorMessage) {
						setError("");
						history.push("/");
					} else {
						history.push("/");
					}
				})
				.catch((err) => {
					if (err.response.status === 409) {
						setError("중복확인을 하시오!!");
					}
				});
		}
	};
	return (
		<div>
			<h1>회원가입</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<div>
					<span>이메일</span>
					<input onChange={onChangeEmail} placeholder="이메일양식작성바람" />
					{checkEmail ? (
						<span>사용가능한 이메일입니다.</span>
					) : (
						<span>사용불가능한 이메일입니다.</span>
					)}
					<button onClick={serverCheckEmail}>중복확인</button>
					{reviewEmail && <span>참</span>}
					{reviewEmailError && <span>거짓</span>}
				</div>
				<div>
					<span>별명</span>
					<input onChange={onChangeNickname} placeholder="님별명무엇?" />
					<button onClick={serverCheckNickname}>중복확인</button>
					{reviewNickname && <span>참</span>}
					{reviewNicknameError && <span>거짓</span>}
				</div>
				<div>
					<span>비밀번호</span>
					<input
						type="password"
						onChange={onChangePass}
						placeholder="8자리이상 12자리 이하 숫자 영문 조합"
					/>
					{validPass ? (
						<span>유효한 비밀번호입니다.</span>
					) : (
						<span>유효하지 않은 비밀번호입니다.</span>
					)}
				</div>
				<div>
					<span>비밀번호 확인</span>
					<input onChange={onChangeCheckPass} placeholder="똑같이 입력하라능" />
				</div>
				<div>
					<Link to="/login">이미 아이디가 있냐능?</Link>
				</div>
				<button type="submit">동료가 되자능</button>
				{errorMessage && <div>errorMessage</div>}
			</form>
		</div>
	);
}
export default withRouter(Signup);
