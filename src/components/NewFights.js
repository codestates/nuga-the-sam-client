import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/NewFights.css";
// import Loading from "./Loading";
export default function NewFights({ fights, handleNewFightClick }) {
	const [count, setcount] = useState(6);

	//* 더보기 클릭시 9개씩 새로운 글 업로드
	const handleCount = () => {
		if (fights.length > count) {
			setcount(count + 6);
		} else if (fights.length < count) {
			setcount(fights.length);
		}
	};

	return (
		<div id="fights-list-container">
			<div id="fights-list-body">
				<div id="fights-list-title">이제 막 싸우는 중</div>
				<div></div>
				{!fights ? (
					<div></div>
				) : (
					// <Loading></Loading>
					fights.slice(0, count).map((fights) => (
						<Link to={`/getfight/${fights.id}`} key={fights.id}>
							<button className="newFight-name" key={fights.id}>
								<span className="fight-left-title">{fights.left}</span>
								<span className="newFight-vs"> vs </span>
								<span className="fight-right-title">{fights.right}</span>
								<span className="fight-left-votes">
									{fights.left_vote_count}
								</span>
								<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="fight-right-votes">
									{fights.right_vote_count}
								</span>
							</button>
						</Link>
					))
				)}
				<div></div>
				<button className="moreButton" onClick={() => handleCount()}>
					{"더 볼래?"}
				</button>
			</div>
		</div>
	);
}
