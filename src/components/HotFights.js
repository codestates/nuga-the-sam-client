import React from "react";
import "../style/HotFights.css";
export default function HotTopic({ hotfights }) {
	return (
		<div className="hot-box-container">
			<div className="hot-box-body">
				<div className="hot-title">치열하게 싸우는 중</div>
				{!hotfights ? (
					<div className="Loding">로딩중....</div>
				) : (
					hotfights.slice(0, 3).map((fights) => (
						<button className="hot-Fight-name" key={fights.id}>
							<span className="hot-fight-title">{fights.left}</span>
							<span className="hot-Fight-vs"> vs </span>
							<span className="hot-fight-title">{fights.right}</span>
							<div></div>
							<span className="hot-fight-votes">{fights.left_vote_count}</span>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="hot-fight-votes">{fights.right_vote_count}</span>
						</button>
					))
				)}
			</div>
		</div>
	);
}
