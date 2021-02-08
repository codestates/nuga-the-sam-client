// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/ModalFight.css";

function ModalFight({ setcheckSendModal, leftFights, rightFights }) {
	return (
		<>
			<div className="ModalFight">
				<div className="ModalFight-body">
					<div className="ModalFight-title">
						{leftFights} vs {rightFights}
					</div>
					<div className="ModalFight-text">
						우열을 가리기 힘든 첨예한 대결이군..
					</div>
					<div className="ModalFight-text">결투할 자격이 있다. </div>
					<Link to="/" className="ModalFightButton">
						<button
							className="ModalFightButton"
							onClick={() => setcheckSendModal(false)}
						>
							닫기
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default ModalFight;
