import React, { useState } from "react";
import { fakedata } from "../datas/fakedata.js";
import Header from "../components/Header";
import HotTopic from "../components/HotTopic";
import NewFights from "../components/NewFights";
function Home() {
	const [FakeData] = useState(fakedata.items);
	const [isLogin, setLogin] = useState(false);
	return (
		<>
			<Header isLogin={isLogin} />
			<div className="hot-all">
				<HotTopic FakeData={FakeData} />
			</div>
			<NewFights data={FakeData} />
		</>
	);
}
export default Home;
