import React from "react";
import { ShowContext } from "../../pages/port2/main";
import { useContext } from "react";

export const BigScreen = () => {
	const { setnavVal, setclose } = useContext(ShowContext);
	const change = (e) => {
		setnavVal(e);
		setclose(false);
	};

	return (
		<>
			<span onMouseEnter={() => change(1)}>
				<span className="spann">p</span>rojects
			</span>

			<span onMouseEnter={() => change(2)}>
				<span className="spann">j</span>ournal
			</span>

			<span onMouseEnter={() => change(3)}>
				<span className="spann">a</span>bout
			</span>

			<span onMouseEnter={() => change(4)}>
				<span className="spann">c</span>ontact
			</span>

			<span>
				<span className="spann">s</span>earch
			</span>
		</>
	);
};

export const LilScreen = () => {
	const { close, setclose, setnavVal, navVal } = useContext(ShowContext);
	const changeState = () => {
		setclose(!close);
		setnavVal(!navVal);
	};
	return (
		<>
			<div className="hamburger" onClick={changeState}>
				{close ? (
					<>
						<div></div>
						<div></div>
						<div></div>
					</>
				) : (
					<>
						<div></div>
						<div></div>
					</>
				)}
			</div>
		</>
	);
};
