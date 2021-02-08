import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Loading from "../components/Loading";
import ViewComment from "../components/ViewComment";
function GetFight(props) {
	const [fight, setFight] = useState([]);
	const [isLoad, setLoad] = useState(true);
	let fightInfo = {};

	const id = props.match.params.id;
	useEffect(() => {
		const url = `https://s.nugathesam.com/fights/`;
		axios.get(url).then((res) => {
			console.log(res);
			const data = res.data.filter((data) => {
				return data.id === parseInt(id);
			});
			console.log(id);
			setFight(data);
			setLoad(false);
		});
	}, []);

	fightInfo = fight[0];
	/* 
	이제 만들것
	토큰 없을 때 클릭시 로그인 창으로 가게끔 하기
	토큰 있을 때 풋요청으로 vote Count 변경 
	유저에 투표정보도 변환하게하기
	
	중복 투표시 
	날라온 데이터에 어떤 컬럼에 어떤 값이 있으면 클릭불가 뜨게하기 
	클릭시 

	*/
	return (
		<div>
			{isLoad ? (
				<Loading />
			) : (
				<>
					<div className="fightContainer">
						<div className="leftContainer">
							<div className="leftFight">{fightInfo.left}</div>
							<div className="leftVote">{fightInfo.left_vote_count}</div>
						</div>
						<div className="vs">vs</div>
						<div className="rightContainer">
							<div className="rightFight">{fightInfo.right}</div>
							<div className="rightVote">{fightInfo.right_vote_count}</div>
						</div>
					</div>

					<ViewComment fightId={id} />
				</>
			)}
		</div>
	);
}

export default withRouter(GetFight);
