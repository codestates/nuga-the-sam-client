import React, { useState } from "react";

export default function HotTopic({ FakeData }) {
	return (
		<div className="hot-box-container">
			{FakeData.map((item) => {
				return (
					<div className="hot-box" key={item.id}>
						{item.name}
					</div>
				);
			})}
		</div>
	);
}
