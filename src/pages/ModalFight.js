import React, { useState } from "react";
import { Link } from "react-router-dom";
function ModalFight({ setcheckSend, leftFights, rightFights }) {
	return (
		<>
			<div className="ModalFight">
				<div className="ModalFight-content">
					<div>
						{leftFights} vs {rightFights}
					</div>
					<div> 우열을 가리기 힘든 첨예한 대결이군.. </div>
					<div> 결투할 자격이 있다. </div>
					<Link to="/" id="title">
						<button
							className="ModalFightButton"
							onClick={() => setcheckSend(false)}
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
