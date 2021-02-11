// import React from "react";
import React, { useState } from "react";
import axios from "axios";
import ModalFight from "./ModalFight.js";
import "../style/Fights.css";
import vs from "../img/VS.png";
import left from "../img/left.png";
import right from "../img/right.png";
import newFight from "../img/newFight.png";
import category from "../img/category.png";
function Fights({ accessToken }) {
	//* 왼쪽 제목
	const [leftFights, setLeftFights] = useState("");
	//* 오른쪽 제목
	const [rightFights, setRightFights] = useState("");
	//* 카테고리 체크
	const [checkedCategory, setCheckedCategory] = useState("");
	//* 정상적으로 포스트 완료시 뜨는 메시지
	const [fightErrorMessage, setfightErrorMessage] = useState("");
	//* 제대로 보냈을 경우 뜨는 모달창
	const [checkSendModal, setcheckSendModal] = useState(false);

	//* 카테고리 클릭시 카테고리 이름 저장
	const handleFightsCategoty = (e) => {
		setCheckedCategory(e.target.value);
		console.log(e.target.value);
	};
	//* 왼쪽 제목 저장
	const handleLeftFights = (e) => {
		setLeftFights(e.target.value);
		console.log(leftFights);
	};
	//* 오른쪽 제목 저장
	const handleRightFights = (e) => {
		setRightFights(e.target.value);
		console.log(rightFights);
	};

	//* 등록 버튼 클릭시
	const submitButton = () => {
		//* 모든 항목 입력했는지 검사
		if (leftFights === "" || rightFights === "" || checkedCategory === "") {
			setfightErrorMessage("모든 항목을 입력하세요!");
		} else {
			//* 포스트 요청
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
				//* 성공적으로 포스트를 보냈을 시 성공 모달창 띄우기
				.then((res) => {
					setcheckSendModal(true);

					if (fightErrorMessage) {
						setfightErrorMessage("");
						// history.push("/");
					} else {
						// history.push("/");
					}
				})
				//! 서버 에러
				.catch((err) => {
					setfightErrorMessage("무엇가 잘못됐다.");
					alert("로그인을 하시오!");
				});
		}
	};

	return (
		<>
			{" "}
			<div className="vs-title2">
				<img src={left} alt={left} width="400px"></img>
			</div>
			<div className="vs-title3">
				<img src={right} alt={right} width="400px"></img>
			</div>
			<div id="fights-post-container">
				<div id="fights-post-body">
					{/* <div id="fights-post-title">새로운 결투</div> */}
					<textarea
						className="leftFights"
						maxLength="50"
						wrap="virtual"
						placeholder="그 상대는?(최대 50자)"
						value={leftFights}
						onChange={(e) => {
							handleLeftFights(e);
						}}
					></textarea>
					<div className="vs-title">
						<img src={vs} alt={vs} width="100px"></img>
					</div>
					<textarea
						className="rightFights"
						maxLength="50"
						wrap="virtual"
						placeholder="그 상대는?(최대 50자)"
						value={rightFights}
						onChange={(e) => {
							handleRightFights(e);
						}}
					></textarea>
				</div>
				<div className="category">
					<img src={category} alt="category" width="150px"></img>
				</div>
				<div id="fights-post-category-container">
					<input
						type="radio"
						value="애니메이션"
						name="category"
						id="애니메이션"
						className="post-category"
						onClick={(e) => {
							handleFightsCategoty(e);
						}}
					/>
					<label for="애니메이션">애니메이션</label>
					<input
						type="radio"
						value="음식"
						id="음식"
						name="category"
						className="post-category"
						onClick={(e) => {
							handleFightsCategoty(e);
						}}
					/>
					<label for="음식">음식</label>
					<input
						type="radio"
						value="일상"
						id="일상"
						name="category"
						className="post-category"
						onClick={(e) => {
							handleFightsCategoty(e);
						}}
					/>
					<label for="일상">일상</label>
					<input
						type="radio"
						value="게임"
						id="게임"
						name="category"
						className="post-category"
						onClick={(e) => {
							handleFightsCategoty(e);
						}}
					/>
					<label for="게임">게임</label>
					<input
						type="radio"
						value="소설"
						id="소설"
						name="category"
						className="post-category"
						onClick={(e) => {
							handleFightsCategoty(e);
						}}
					/>
					<label for="소설">소설</label>
					<input
						type="radio"
						value="스포츠"
						id="스포츠"
						name="category"
						className="post-category"
						onClick={(e) => {
							handleFightsCategoty(e);
						}}
					/>
					<label for="스포츠">스포츠</label>
					<input
						type="radio"
						value="철학"
						id="철학"
						name="category"
						className="post-category"
						onClick={(e) => {
							handleFightsCategoty(e);
						}}
					/>
					<label for="철학">철학</label>
				</div>
				<br></br>
				<div className="fightErrorMessage">{fightErrorMessage}</div>
				<br></br>

				<div className="submitButton">
					<img
						alt="newFight"
						src={newFight}
						width="100px"
						onClick={(e) => {
							submitButton(e);
						}}
					></img>
				</div>
			</div>
			{checkSendModal ? (
				<ModalFight
					setcheckSendModal={setcheckSendModal}
					leftFights={leftFights}
					rightFights={rightFights}
				></ModalFight>
			) : (
				<div></div>
			)}
		</>
	);
}

export default Fights;
