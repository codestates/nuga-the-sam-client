import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import Loading from "../components/Loading";
import axios from "axios";
import "../style/Signup.css";
import SignUp from "../img/SignUp.png";
import xPng from "../img/x.png";
import submit from "../img/submit.png";
import check from "../img/check.png";

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
	//사용가능한 별명
	const [validNick, setValidNick] = useState(false);
	// 이메일중복확인
	const [reviewEmail, setReviewEmail] = useState(false);
	//닉네임중복확인
	const [reviewNickname, setReviewNickname] = useState(false);
	//패스워드 두개 맞는지 확인
	const [doubleCheckPass, setDoubleCheckPass] = useState(false);
	const [isLoad, setLoad] = useState(false);
	//!onChange
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
		setReviewEmail(false);
		setCheckEmail(validEmailCheck(e.target.value));
	};
	const onChangeNickname = (e) => {
		setNickname(e.target.value);
		setValidNick(validNickCheck(e.target.value));
		setReviewNickname(false);
	};
	const onChangePass = (e) => {
		setPassword(e.target.value);
		setValidPass(validPassCheck(e.target.value));
		passCheck(e.target.value, checkPass);
	};
	const onChangeCheckPass = (e) => {
		setCheckPass(e.target.value);
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
	const validNickCheck = (nickname) => {
		if (2 <= nickname.length && nickname.length <= 8) {
			return true;
		} else {
			return false;
		}
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
		setReviewEmail(false);
		let url = "https://s.nugathesam.com/users/signup/checkemail";
		let checkEmail = email;
		axios
			.post(url, { email: checkEmail })
			.then((res) => {
				setReviewEmail(true);
				alert("가능한 이메일입니다.");
			})
			.catch((err) => {
				alert("중복된 이메일 입니다.");
			});
	};

	const serverCheckNickname = () => {
		setReviewNickname(false);

		let url = "https://s.nugathesam.com/users/signup/checknick";
		let checkNick = nickname;
		axios
			.post(url, { nickname: checkNick })
			.then((res) => {
				setReviewNickname(true);
				alert("가능한 별명입니다.");
			})
			.catch((err) => {
				alert("중복된 별명입니다..");
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
			setLoad(true);
			axios
				.post(url, { email: email, password: password, nickname: nickname })
				.then(() => {
					if (errorMessage) {
						setError("");
						setLoad(false);
						history.push("/login");
					} else {
						setLoad(false);
						history.push("/login");
					}
				})
				.catch((err) => {
					setError("에러에러에러");
					setLoad(false);
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
		<>
			<div className="whiteBackground-Signup"></div>
			{isLoad ? (
				<Loading />
			) : (
				<div className="greyBackground-Signup">
					<div className="signUpModalContainer">
						<div className="signUpModal">
							<img
								className="signup-logo"
								src={SignUp}
								alt="SignUp"
								width="270px"
							></img>
							<form
								className="signUpContents"
								onSubmit={(e) => e.preventDefault()}
							>
								<div className="emailContainer">
									<input
										className="signupInputValue"
										onChange={onChangeEmail}
										placeholder="이메일"
									/>
									{checkEmail ? (
										<CheckCircleIcon className="checkIcon" />
									) : (
										<CancelIcon className="closeIcon" />
									)}
									<button className="checkButton" onClick={serverCheckEmail}>
										중복확인
									</button>
								</div>
								<div className="nicknameContainer">
									<input
										className="signupInputValue"
										onChange={onChangeNickname}
										placeholder="별명은 2 ~ 8자리"
									/>
									{validNick ? (
										<CheckCircleIcon className="checkIcon" />
									) : (
										<CancelIcon className="closeIcon" />
									)}
									<button className="checkButton" onClick={serverCheckNickname}>
										중복확인
									</button>
								</div>
								<div className="passwordContainer">
									<input
										className="signupInputValue"
										type="password"
										onChange={onChangePass}
										placeholder="8~12자리 숫자 영문 조합"
									/>
									{validPass ? (
										<CheckCircleIcon className="checkIcon" />
									) : (
										<CancelIcon className="closeIcon" />
									)}
								</div>
								<div className="checkPassContainer">
									<input
										className="signupInputValue"
										type="password"
										onChange={onChangeCheckPass}
										placeholder="비밀번호 확인"
									/>
									{doubleCheckPass ? (
										<CheckCircleIcon className="checkIcon" />
									) : (
										<CancelIcon className="closeIcon" />
									)}
								</div>
								{/* <div className="goLoginBtn">
									<Link to="/login">이미 아이디가 있냐능?</Link>
								</div> */}

								<div className="signUpBtn" onClick={handleSignup}>
									<img src={submit} alt={xPng} width="100px"></img>
								</div>
								{errorMessage && <div>{errorMessage}</div>}
							</form>

							<div className="closeBtn" onClick={closeModal}>
								<img src={xPng} alt={xPng} width="35px"></img>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
export default withRouter(Signup);
