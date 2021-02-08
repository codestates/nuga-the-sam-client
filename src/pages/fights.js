// import React from "react";
import React, { useState } from "react";
import axios from "axios";
import ModalFight from "./ModalFight.js";

function Fights({ accessToken }) {
	const [leftFights, setLeftFights] = useState(" ");
	const [rightFights, setRightFights] = useState(" ");
	const [checkedCategory, setCheckedCategory] = useState("");
	const [fightErrorMessage, setfightErrorMessage] = useState("");
	const [checkSend, setcheckSend] = useState(false);

	const handleFightsCategoty = (e) => {
		setCheckedCategory(e.target.value);
		console.log(e.target.value);
	};
	const handleLeftFights = (e) => {
		setLeftFights(e.target.value);
		console.log(leftFights);
	};
	const handleRightFights = (e) => {
		setRightFights(e.target.value);
		console.log(rightFights);
	};

	const submitButton = () => {
		if (leftFights === "" || rightFights === "" || checkedCategory === "") {
			setfightErrorMessage("모든 항목을 입력하세요!");
		} else {
			axios
				.post(
					`https://s.nugathesam.com/fights`,
					{
						// accessToken: accessToken,
						left: leftFights,
						right: rightFights,
						category: checkedCategory,
					},
					{ headers: { Authorization: `Bearer ${accessToken}` } },
				)
				.then((res) => {
					setcheckSend(true);
					console.log(res);
					if (fightErrorMessage) {
						setfightErrorMessage("");
						// history.push("/");
					} else {
						// history.push("/");
					}
				})
				.catch((err) => {
					setfightErrorMessage("무엇가 잘못됐다.");
				});
			console.log(checkedCategory, leftFights, rightFights);
		}
	};

	return (
		<div>
			<div id="fights-post-container">
				<div id="fights-post-body">
					<div id="fights-post-title">새로운 결투</div>
					<input
						className="leftFights"
						maxLength="50"
						type="text"
						placeholder="그 상대는??"
						value={leftFights}
						onChange={(e) => {
							handleLeftFights(e);
						}}
					></input>
					<div className="vs-title">vs</div>
					<input
						className="rightFights"
						maxLength="50"
						type="text"
						placeholder="그 상대는??"
						value={rightFights}
						onChange={(e) => {
							handleRightFights(e);
						}}
					></input>
					<div id="fights-post-category-container">
						<div id="fights-post-category-title">카테고리 선택</div>
						<input
							type="radio"
							value="애니메이션"
							name="category"
							className="post-category"
							onClick={(e) => {
								handleFightsCategoty(e);
							}}
						/>{" "}
						애니메이션
						<input
							type="radio"
							value="음식"
							name="category"
							className="post-category"
							onClick={(e) => {
								handleFightsCategoty(e);
							}}
						/>{" "}
						음식
						<input
							type="radio"
							value="일상"
							name="category"
							className="post-category"
							onClick={(e) => {
								handleFightsCategoty(e);
							}}
						/>{" "}
						일상
						<input
							type="radio"
							value="게임"
							name="category"
							className="post-category"
							onClick={(e) => {
								handleFightsCategoty(e);
							}}
						/>{" "}
						게임
						<input
							type="radio"
							value="소설"
							name="category"
							className="post-category"
							onClick={(e) => {
								handleFightsCategoty(e);
							}}
						/>{" "}
						소설
						<input
							type="radio"
							value="스포츠"
							name="category"
							className="post-category"
							onClick={(e) => {
								handleFightsCategoty(e);
							}}
						/>{" "}
						스포츠
						<input
							type="radio"
							value="철학"
							name="category"
							className="post-category"
							onClick={(e) => {
								handleFightsCategoty(e);
							}}
						/>{" "}
						철학
					</div>
					<br></br>
				</div>
			</div>

			<div className="fightErrorMessage">{fightErrorMessage}</div>
			<br></br>
			<button
				className="submitButton"
				onClick={(e) => {
					submitButton(e);
				}}
			>
				등록
			</button>
			{checkSend ? (
				<ModalFight
					setcheckSend={setcheckSend}
					leftFights={leftFights}
					rightFights={rightFights}
				></ModalFight>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default Fights;
