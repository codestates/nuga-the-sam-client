import React from "react";
import "../style/Category.css";
export default function Category({
	category,
	handleCategoryClick,
	handleAllCategoryClick,
}) {
	return (
		<div id="category-list-container">
			<div id="category-list-body">
				<div id="category-list-title">카테고리</div>
				<button
					className="category-name"
					onClick={(e) => handleAllCategoryClick()}
				>
					전체
				</button>
				{category.map((category) => (
					<button
						className="category-name"
						key={category.id}
						onClick={(e) => handleCategoryClick(category.category)}
					>
						{category.category}
					</button>
				))}
			</div>
		</div>
	);
}
