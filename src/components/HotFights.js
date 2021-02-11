import React from "react";
import "../style/HotFights.css";
import { Link } from "react-router-dom";
// import Loading from "./Loading";
export default function HotTopic({ hotfights }) {
	return (
		<div className="hot-box-container">
			<div className="hot-box-body">
				<div className="hot-title">치열하게 싸우는 중</div>
				{!hotfights ? (
					<div></div>
				) : (
					// <Loading></Loading>
					hotfights.slice(0, 3).map((fights) => (
						<Link to={`/getfight/${fights.id}`} key={fights.id}>
							<button className="hot-Fight-name" key={fights.id}>
								<span className="hot-fight-left-title">{fights.left}</span>
								<span className="hot-Fight-vs"> vs </span>
								<span className="hot-fight-right-title">{fights.right}</span>
								<div></div>
								<span className="hot-fight-left-votes">
									{fights.left_vote_count}
								</span>
								<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="hot-fight-right-votes">
									{fights.right_vote_count}
								</span>
							</button>
						</Link>
					))
				)}
			</div>
		</div>
	);
}
