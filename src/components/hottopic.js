import React, { useState } from "react";

export default function HotTopic({ FakeData }) {
	return (
		<div className="hot-box-container">
			{FakeData.map((item) => {
				return <div className="hot-box">{item.name}</div>;
			})}
		</div>
	);
}
