import React, { useState } from "react";
import NewFights from "./components/NewFights.js";
import "./App.css";
import { fakedata } from "./datas/fakedata.js";
function App() {
	const [FakeData] = useState(fakedata.items);

	return (
		<div>
			<NewFights data={FakeData} />
		</div>
	);
}

export default App;
