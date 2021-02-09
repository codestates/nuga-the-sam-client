import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Loading from "../components/Loading";
import "../style/GetFight.css";
import ViewComment from "../components/ViewComment";

function GetFight(props) {
	const [fight, setFight] = useState({});
	const [isLoad, setLoad] = useState(true);
	const [alreadyVote, setAlreadyVote] = useState(false);
	const id = props.match.params.id;
	// console.log(props.accessToken, "dsfasdlfkjdsfkljsalkfj");

	console.log(props.accessToken, "dsfasdlfkjdsfkljsalkfj");

	const token = props.accessToken;
	useEffect(() => {
		setLoad(true);
		const url = `https://s.nugathesam.com/fights/${id}`;
		console.log(token);
		axios
			.get(url, { headers: { Authorization: `bearer ${token}` } })
			.then((res) => {
				console.log(
					res.data,
					"다시됩니까?다시됩니까?다시됩니까?다시됩니까?다시됩니까?",
				);
				setFight(res.data);
				setLoad(false);
			});
	}, []);

	/* 
	이제 만들것
	토큰 없을 때 클릭시 로그인 창으로 가게끔 하기
	토큰 있을 때 풋요청으로 vote Count 변경 
	유저에 투표정보도 변환하게하기
	
	중복 투표시 
	날라온 데이터에 어떤 컬럼에 어떤 값이 있으면 클릭불가 뜨게하기 
	클릭시 
	*/
	const handleLeftVoteClick = () => {
		if (!props.accessToken) {
			props.history.push("/login");
		} else {
			console.log("왼쪽에 투표하였습니다.");
			let url = `https://s.nugathesam.com/fights/${id}/left_vote`;
			axios
				.put(url, null, { headers: { Authorization: `bearer ${token}` } })
				.then((res) => {
					setLoad(true);
					props.history.push(`getfight/${id}`);
				})
				.catch((err) => {
					console.log(err.response.status);
					const status = err.response.status;
					if (status === 409) {
						setAlreadyVote(true);
					}
				});
		}
	};
	const handleRightVoteClick = () => {
		if (!props.accessToken) {
			props.history.push("/login");
		} else {
			console.log("오른쪽에 투표하였습니다.");
			let url = `https://s.nugathesam.com/fights/${id}/right_vote`;
			axios
				.put(url, null, { headers: { Authorization: `bearer ${token}` } })
				.then((res) => {
					setLoad(true);
					props.history.push(`getfight/${id}`);
				})
				.catch((err) => {
					console.log(err.response);
					const status = err.response.status;
					if (status === 409) {
						setAlreadyVote(true);
					}
				});
		}
	};

	const HandleChangeAlreadyVoteClick = () => {};

	return (
		<div>
			{isLoad ? (
				<Loading />
			) : (
				<div>
					<div className="fightContainer">
						<div className="leftContainer" onClick={handleLeftVoteClick}>
							<div className="leftFight">{fight.left}</div>
							<div className="leftVote">{fight.left_vote_count}</div>
						</div>
						<div className="vs">vs</div>
						<div className="rightContainer" onClick={handleRightVoteClick}>
							<div className="rightFight">{fight.right}</div>
							<div className="rightVote">{fight.right_vote_count}</div>
						</div>
					</div>
				</div>
			)}
			<ViewComment
				fightId={id}
				accessToken={props.accessToken}
				fight={fight}
				setFight={setFight}
				setLoad={setLoad}
				userInfo={props.userInfo}
			></ViewComment>
		</div>
	);
}

export default withRouter(GetFight);
