import React from "react";

export default function NewFights({ fights, handleNewFightClick }) {
	console.log(fights);
	return (
		<div id="fights-list-container">
			<div id="fights-list-body">
				<div id="fights-list-title">이제 막 싸우는 중</div>
				{!fights ? (
					<div className="Loding">로딩중....</div>
				) : (
					fights.map((fights) => (
						<button
							className="newFight-name"
							key={fights.id}
							onClick={(e) => handleNewFightClick(fights.id)}
						>
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
