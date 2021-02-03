import React from "react";

export default function NewFights({ data }) {
	return (
		<div id="fights-list-container">
			<div id="fights-list-body">
				<div id="fights-list-title">이제 막 싸우는 중</div>
				{data.map((data) => (
					<button
						className="newFight-name"
						key={data.id}
						// onClick={(e) => handleClick(e, item.id)}
					>
						{data.name}
					</button>
				))}
			</div>
		</div>
	);
}
