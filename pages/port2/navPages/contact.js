import { Content } from "../../../components/components";

const Contact = () => {
	return (
		<Content
			dp="flex"
			fd="column"
			style={{
				color: "#9d9fa1",
				height: "60vh",
				width: "100vw",
				display: "flex",
				justifyContent: "space-between",
				fontFamily: "FiraSans-ExtraLight",
			}}
		>
			<aside
				style={{
					width: "70%",
					height: "55%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
				}}
			>
				<span>Jl. Manyar III Blok O-3 Kav. 29-30 No. 4-6 </span>Bintaro Jaya{" "}
				<span>sektor I </span>
				<span>Jakarta Selatan 12330 </span>
				<span>Indonesia</span>
				<span>telp. +62 21 735 3338</span>
				<span>fax. +62 21 735 6521</span>
				<span>email. admin@andramatin.com </span>
				<span>opportunities. intern@andramatin.com</span>
			</aside>
			<br />
			<aside
				style={{
					width: "30%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
				}}
			>
				<h2
					style={{
						fontWeight: "lighter",
					}}
				>
					get in touch
				</h2>
				<br />

				{/* ///////// */}
				<textarea
					placeholder="name"
					required
					style={{
						outline: "none",
						resize: "none",
						border: "none",
						fontFamily: "FiraSans-Light",
						background: "transparent",
						borderBottom: "1px solid #9d9fa1",
						marginBottom: "10px",

						display: "block",
						width: "100%",
					}}
				/>
				<textarea
					placeholder="subject"
					required
					style={{
						outline: "none",
						resize: "none",
						border: "none",
						fontFamily: "FiraSans-Light",
						background: "transparent",
						borderBottom: "1px solid #9d9fa1",
						marginBottom: "10px",

						display: "block",
						width: "100%",
					}}
				/>
				<textarea
					placeholder="email"
					required
					style={{
						outline: "none",
						resize: "none",
						border: "none",
						fontFamily: "FiraSans-Light",
						background: "transparent",
						borderBottom: "1px solid #9d9fa1",
						marginBottom: "10px",

						display: "block",
						width: "100%",
					}}
				/>
				<textarea
					placeholder="messages"
					required
					style={{
						outline: "none",
						resize: "none",
						border: "none",
						fontFamily: "FiraSans-Light",
						background: "transparent",
						borderBottom: "1px solid #9d9fa1",
						marginBottom: "10px",
						height: "30%",

						display: "block",
					}}
				/>
				<button className="port2button">send</button>
			</aside>
		</Content>
	);
};

export default Contact;
