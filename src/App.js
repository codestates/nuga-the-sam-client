import React, { useState } from "react";
import HotTopic from "./components/HotTopic";
import "./App.css";
import { fakedata } from "./datas/fakedata";
function App() {
	const [items] = useState(fakedata.items);
	return (
		<div>
			<div className="hot-all">
				<HotTopic FakeData={items} />
			</div>
		</div>
	);
}

export default App;
