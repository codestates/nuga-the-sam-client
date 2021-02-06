import React, { useEffect, useState } from "react";
import NewFights from "../components/NewFights.js";
import "../App.css";
import { category } from "../datas/categorydata.js";
import HotFights from "../components/HotFights.js";
import Category from "../components/category.js";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MakeFights from "../components/makefights.js";
import axios from "axios";
import Mypage from "../components/Mypage.js";
function Home() {
	const [fights, setFights] = useState();
	const [CategoryData] = useState(category.name);
	const [hotfights, setHotFights] = useState();

	const getDataAndRender = async () => {
		const result = await axios.get(`https://s.nugathesam.com/fights`);

		const sortID = result.data.sort(function (a, b) {
			return a.id < b.id ? 1 : -1;
		});
		setFights(sortID);
	};

	const getHotDataAndRender = async () => {
		const result = await axios.get(`https://s.nugathesam.com/fights`);
		const sortVotes = result.data.sort(function (a, b) {
			return a.left_vote_count + a.right_vote_count <
				b.left_vote_count + b.right_vote_count
				? 1
				: -1;
		});
		setHotFights(sortVotes);
	};

	useEffect(() => {
		getDataAndRender();
		getHotDataAndRender();
	}, []);

	const handleNewFightClick = (e) => {
		console.log(e);
	};

	const handleCategoryClick = (categoryname) => {
		axios
			.get(`https:s.nugathesam.com/fights/category/${categoryname}`)
			.then((data) => {
				const sortID2 = data.data.sort(function (a, b) {
					return a.id < b.id ? 1 : -1;
				});
				setFights(sortID2);
			});
	};

	const handleAllCategoryClick = () => {
		getDataAndRender();
	};

	return (
		<>
			<MakeFights category={CategoryData} />
			<Category
				category={CategoryData}
				handleCategoryClick={handleCategoryClick}
				handleAllCategoryClick={handleAllCategoryClick}
			/>
			<HotFights hotfights={hotfights} />
			<NewFights fights={fights} handleNewFightClick={handleNewFightClick} />
		</>
	);
}

export default Home;
