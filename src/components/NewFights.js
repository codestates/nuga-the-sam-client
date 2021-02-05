import React, { useState } from "react";

export default function NewFights({ fights, handleNewFightClick }) {
	console.log(fights);
	const [count, setcount] = useState(9);

	const handleCount = () => {
		setcount(count + 9);
	};
	return (
		<div id="fights-list-container">
			<div id="fights-list-body">
				<div id="fights-list-title">이제 막 싸우는 중</div>
				<div></div>
				{!fights ? (
					<div className="Loding">로딩중....</div>
				) : (
					fights.slice(0, count).map((fights) => (
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
				<button className="moreButton" onClick={() => handleCount()}>
					더 보기{" "}
				</button>
			</div>
		</div>
	);
}
