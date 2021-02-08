// import React from "react";
import React, { useState } from "react";
import axios from "axios";
import ModalFight from "./ModalFight.js";

function Fights({ accessToken }) {
	//* 왼쪽 제목
	const [leftFights, setLeftFights] = useState(" ");
	//* 오른쪽 제목
	const [rightFights, setRightFights] = useState(" ");
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
				});
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
			{checkSendModal ? (
				<ModalFight
					setcheckSendModal={setcheckSendModal}
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
