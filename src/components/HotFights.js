import React from "react";

export default function HotTopic({ hotfights }) {
	return (
		<div className="hot-all">
			<div className="hot-box-container">
				<div className="hot-title">치열하게 싸우는 중</div>
				{!hotfights ? (
					<div className="Loding">로딩중....</div>
				) : (
					hotfights.slice(0, 3).map((fights) => (
						<button className="newFight-name" key={fights.id}>
							{fights.left}
							<span> vs </span>
							{fights.right}
							<div></div>
							<span>{fights.left_vote_count}</span>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span>{fights.right_vote_count}</span>
						</button>
					))
				)}
			</div>
		</div>
	);
}
