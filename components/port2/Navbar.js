import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Nav } from "../components";

const Navbar = () => {
	const [width, setwidth] = useState();

	useEffect(() => {
		const windoww = () => {
			setwidth(window.innerWidth);
		};

		window.addEventListener("resize", windoww);

		return () => {
			window.removeEventListener("resize", windoww);
		};
	}, []);

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
				{width >= 767 ? (
					<>
						<Link href="/port2">
							<span>
								<span className="spann">p</span>rojects
							</span>
						</Link>
						<Link href="/port2">
							<span>
								<span className="spann">j</span>ournal
							</span>
						</Link>
						<Link href="/port2">
							<span>
								<span className="spann">a</span>bout
							</span>
						</Link>
						<Link href="/port2">
							<span>
								<span className="spann">c</span>ontact
							</span>
						</Link>
						<Link href="/port2">
							<span>
								<span className="spann">s</span>earch
							</span>
						</Link>
					</>
				) : (
					<>
						<div className="hamburger">
							<div></div>
							<div></div>
							<div></div>
						</div>
					</>
				)}
			</div>
		</Nav>
	);
};

export default Navbar;
