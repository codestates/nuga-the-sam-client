import axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function ChangeNickNameModal({
	setisChangeNick,
	accessToken,
	setUserInfo,
	history,
}) {
	const [newNickNmae, setnewNickNmae] = useState("");
	const [isLodingnewNickNmae, setisLodingnewNickNmae] = useState(false);
	const [nickNameError, setnickNameError] = useState("닉네임 변경 중");

	const handleNewNickNmae = (e) => {
		setnewNickNmae(e.target.value);
		console.log(e.target.value);
	};

	const isLodingHandler = () => {
		setisLodingnewNickNmae(true);
		axios
			.post(`https://s.nugathesam.com/users/signup/checknick`, {
				nickname: newNickNmae,
			})
			.then(() => {
				axios
					.put(
						`https://s.nugathesam.com/users/modify`,
						{
							nickname: newNickNmae,
						},
						{ headers: { Authorization: `Bearer ${accessToken}` } },
					)
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
						history.push("/mypage");
					})
					.catch((err) => {
						setnickNameError("서버가 맛이 갔다");
					});
			})
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
					<button onClick={() => isLodingHandler()}> 확인</button>
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
