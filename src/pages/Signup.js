import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import axios from "axios";
import "../style/Signup.css";

function Signup({ history }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checkPass, setCheckPass] = useState("");
	const [nickname, setNickname] = useState("");
	const [errorMessage, setError] = useState("");
	//사용가능한 이메일
	const [checkEmail, setCheckEmail] = useState(false);
	//사용가능한 패스워드
	const [validPass, setValidPass] = useState(false);
	// 이메일중복확인
	const [reviewEmail, setReviewEmail] = useState(false);
	const [reviewEmailError, setReviewEmailError] = useState("");
	//닉네임중복확인
	const [reviewNickname, setReviewNickname] = useState(false);
	const [reviewNicknameError, setReviewNicknameError] = useState("");
	//패스워드 두개 맞는지 확인
	const [doubleCheckPass, setDoubleCheckPass] = useState(false);
	// (checkEmail&&validPass&&reviewEmail&&reviewNickname&&doubleCheckPass)
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
		passCheck(e.target.value, checkPass);
	};
	const onChangeCheckPass = (e) => {
		setCheckPass(e.target.value);
		console.log(e.target.value);
		passCheck(password, e.target.value);
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
	const passCheck = (password, checkPass) => {
		if (password === checkPass) {
			setDoubleCheckPass(true);
		} else {
			setDoubleCheckPass(false);
		}
	};

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
	const closeModal = () => {
		history.push("/");
	};

	//! 회원가입 버튼
	const handleSignup = () => {
		setError("");
		let url = "https://s.nugathesam.com/users/signup";
		if (
			email === "" ||
			nickname === "" ||
			password === "" ||
			checkPass === ""
		) {
			setError("모든항목을 입력하라능!!");
		} else if (
			checkEmail &&
			validPass &&
			reviewEmail &&
			reviewNickname &&
			doubleCheckPass
		) {
			axios
				.post(url, { email: email, password: password, nickname: nickname })
				.then(() => {
					if (errorMessage) {
						setError("");
						history.push("/login");
					} else {
						history.push("/login");
					}
				})
				.catch((err) => {
					console.log(err);
					setError("에러에러에러");
				});
		} else {
			if (!checkEmail) {
				setError("해당 이메일은 사용이 불가합니다");
			} else if (!reviewEmail) {
				setError("이메일 중복확인을 진행하십시오");
			} else if (!reviewNickname) {
				setError("닉네임 중복확인을 진행하십시오");
			} else if (!validPass) {
				setError("해당 비밀번호는 사용이 불가합니다.");
			} else if (!doubleCheckPass) {
				setError("비밀번호를 다시 확인하십시오");
			}
		}
	};
	return (
		<div className="whiteBackground">
			<div className="signUpModal">
				<div className="signUpHeader">어서오고</div>
				<form className="signUpContents" onSubmit={(e) => e.preventDefault()}>
					<div className="emailContainer">
						<span className="signupInput">이메일</span>
						<input
							className="signupInputValue"
							onChange={onChangeEmail}
							placeholder="이메일양식작성바람"
						/>
						{checkEmail ? <CheckCircleIcon /> : <CancelIcon />}
						<button onClick={serverCheckEmail}>중복확인</button>
						{reviewEmail && <span>가능</span>}
						{reviewEmailError && <span>중복</span>}
					</div>
					<div class="nicknameContainer">
						<span className="signupInput">별명</span>
						<input
							className="signupInputValue"
							onChange={onChangeNickname}
							placeholder="님별명무엇?"
						/>
						<button onClick={serverCheckNickname}>중복확인</button>
						{reviewNickname && <span>가능</span>}
						{reviewNicknameError && <span>중복</span>}
					</div>
					<div className="passwordContainer">
						<span className="signupInput">비밀번호</span>
						<input
							className="signupInputValue"
							type="password"
							onChange={onChangePass}
							placeholder="8자리이상 12자리 이하 숫자 영문 조합"
						/>
						{validPass ? <CheckCircleIcon /> : <CancelIcon />}
					</div>
					<div className="checkPassContainer">
						<span className="signupInput">비밀번호 확인</span>
						<input
							className="signupInputValue"
							type="password"
							onChange={onChangeCheckPass}
							placeholder="똑같이 입력하라능"
						/>
						{doubleCheckPass ? <CheckCircleIcon /> : <CancelIcon />}
					</div>
					<div className="goLoginBtn">
						<Link to="/login">이미 아이디가 있냐능?</Link>
					</div>
					<button className="signUpBtn" type="submit" onClick={handleSignup}>
						동료가 되자능
					</button>
					{errorMessage && <div>{errorMessage}</div>}
				</form>
				<button className="closeBtn" onClick={closeModal}>
					닫기
				</button>
			</div>
		</div>
	);
}
export default withRouter(Signup);
