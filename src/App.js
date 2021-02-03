import React, { useState } from "react";
import NewFights from "./components/NewFights.js";
import "./App.css";
import { fakedata } from "./datas/fakedata.js";
import HotTopic from "./components/hottopic.js";
function App() {
	const [FakeData] = useState(fakedata.items);

	return (
		<div>
			<div className="hot-all">
				<HotTopic FakeData={FakeData} />
			</div>
			<NewFights data={FakeData} />
		</div>
	);
}

export default App;
