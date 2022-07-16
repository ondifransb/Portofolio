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
			<span
				style={{ color: "#9d9fa1", margin: "1rem" }}
				onMouseEnter={() => change(1)}
			>
				<span className="spann">p</span>rojects
			</span>

			<span
				style={{ color: "#9d9fa1", margin: "1rem" }}
				onMouseEnter={() => change(2)}
			>
				<span className="spann">j</span>ournal
			</span>

			<span
				style={{ color: "#9d9fa1", margin: "1rem" }}
				onMouseEnter={() => change(3)}
			>
				<span className="spann">a</span>bout
			</span>

			<span
				style={{ color: "#9d9fa1", margin: "1rem" }}
				onMouseEnter={() => change(4)}
			>
				<span className="spann">c</span>ontact
			</span>

			<span style={{ color: "#9d9fa1", margin: "1rem" }}>
				<textarea
					placeholder="search"
					style={{
						fontSize: "1rem",
						outline: "none",
						resize: "none",
						border: "none",
						fontFamily: "FiraSans-Light",
						background: "transparent",

						display: "block",
						width: "max-content",
						height: "16px",
					}}
				/>
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
				{close && navVal ? (
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
