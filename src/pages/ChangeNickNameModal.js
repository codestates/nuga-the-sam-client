import axios from "axios";
import React, { useState } from "react";

function ChangeNickNameModal({ setisChangeNick, accessToken }) {
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
			.post(
				"",
				{
					NickName: newNickNmae,
				},
				{ headers: { Authorization: `Bearer ${accessToken}` } },
			)
			.then((res) => {
				setisLodingnewNickNmae(false);
				setisChangeNick(false);
			})
			.catch((err) => {
				setnickNameError("서버가 이상하다");
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
				</>
			)}
		</div>
	);
}

export default ChangeNickNameModal;
