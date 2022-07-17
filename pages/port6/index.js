import Link from "next/link";
import { useState, useEffect } from "react";
import { Content, Span } from "../../components/components";

const Index = () => {
	const [inputedname, setinputedname] = useState("");
	const herName = "angela manurung";

	const input = (e) => {
		setinputedname(e);
		console.log(inputedname);
	};

	return (
		<Content
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-around",
				alignItems: "center",
				height: "clamp(80px, 12vh, 300px)",
				// background: "green",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
					alignItems: "center",

					// background: "blue",
				}}
			>
				<label className="labelport6" htmlFor="nameinput">
					your name
				</label>
				<input
					onChange={(e) => {
						input(e.target.value);
					}}
					type="text"
					className="inputport6"
					name="nameinput"
				/>
			</div>

			<button
				disabled={inputedname == herName ? false : true}
				className="buttonport6"
			>
				<Link href="/port6/content">
					{inputedname == herName ? "enter" : ""}
				</Link>
			</button>
		</Content>
	);
};

export default Index;
