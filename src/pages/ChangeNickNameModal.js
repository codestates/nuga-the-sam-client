import axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function ChangeNickNameModal({
	setisChangeNick,
	accessToken,
	setUserInfo,
	history,
}) {
	//* 새로운 닉네임
	const [newNickNmae, setnewNickNmae] = useState("");
	//* 닉네임 변경 클릭시 닉네임 변경 모달창 띄우기
	const [isLodingnewNickNmae, setisLodingnewNickNmae] = useState(false);
	//* 에러 메시지
	const [nickNameError, setnickNameError] = useState("닉네임 변경 중");

	//* 인풋 박스에 타이핑 하는 내용을 newNickNmae로 보냄
	const handleNewNickNmae = (e) => {
		setnewNickNmae(e.target.value);
	};

	//* 닉네임을 적고 확인 버튼 클릭시 실행되는 함수
	const changeNickName = () => {
		//* 먼저 로딩 모달창을 띄운다.
		setisLodingnewNickNmae(true);

		//* 중복되는 닉네임 먼저 확인
		axios
			.post(`https://s.nugathesam.com/users/signup/checknick`, {
				nickname: newNickNmae,
			})

			//* 중복되는 닉네임이 없을 경우 서버에 변경 요청을 PUT을 보냄.
			.then(() => {
				axios
					.put(
						`https://s.nugathesam.com/users/modify`,
						{
							nickname: newNickNmae,
						},
						{ headers: { Authorization: `Bearer ${accessToken}` } },
					)

					//* 성공적으로 변경시 로딩 모달창을 닫음
					.then((res) => {
						console.log(res);
						setisLodingnewNickNmae(false);
						setisChangeNick(false);
						axios
							.get("https://s.nugathesam.com/users", {
								headers: { Authorization: `Bearer ${accessToken}` },
							})
							.then((res) => {
								setUserInfo(res.data);
							});
						//* mypage를 리다이렉트
						history.push("/mypage");
					})

					//! 서버 문제 에러 메시지
					.catch((err) => {
						setnickNameError("서버가 맛이 갔다");
					});
			})
			//! 중복 닉네임 에러 메시지
			.catch((err) => {
				setnickNameError("이미 존재하는 닉네임입니다.");
			});
	};

	return (
		<div className="ChangeNickNameModal">
			{!isLodingnewNickNmae ? (
				<div>
					<input
						type="text"
						placeholder="새로운 닉네임을 정해보자"
						value={newNickNmae}
						onChange={(e) => handleNewNickNmae(e)}
					></input>
					<button onClick={() => changeNickName()}> 확인</button>
				</div>
			) : (
				<>
					<div>{nickNameError}</div>
					<button
						onClick={() => {
							setisLodingnewNickNmae(false);
							setisChangeNick(false);
						}}
					>
						확인
					</button>
				</>
			)}
		</div>
	);
}

export default withRouter(ChangeNickNameModal);
