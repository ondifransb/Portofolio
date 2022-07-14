import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ShowContext } from "../../pages/port2/main";
import { Nav } from "../components";

const Navbar = () => {
	const [width, setwidth] = useState();
	const [close, setclose] = useState(false);
	const { setnavVal } = useContext(ShowContext);

	useEffect(() => {
		const windoww = () => {
			setwidth(window.innerWidth);
		};

		window.addEventListener("resize", windoww);

		return () => {
			window.removeEventListener("resize", windoww);
		};
	});

	return (
		<Nav m="1.4rem">
			<Link href="/port2">
				<Image
					className="NavImages"
					src="/static/Andra Matin/logo-white.svg"
					width="130"
					layout="fixed"
					objectFit="cover"
					priority
					height="20"
					alt="Profile Picture"
				/>
			</Link>
			<div className="linkdiv">
				{width > 414 ? (
					<>
						<span onMouseEnter={() => setnavVal(1)}>
							<span className="spann">p</span>rojects
						</span>

						<span onMouseEnter={() => setnavVal(2)}>
							<span className="spann">j</span>ournal
						</span>

						<span onMouseEnter={() => setnavVal(3)}>
							<span className="spann">a</span>bout
						</span>

						<span onMouseEnter={() => setnavVal(4)}>
							<span className="spann">c</span>ontact
						</span>

						<span>
							<span className="spann">s</span>earch
						</span>
					</>
				) : (
					<>
						<div className="hamburger" onClick={() => setclose(!close)}>
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
				)}
			</div>
		</Nav>
	);
};

export default Navbar;
