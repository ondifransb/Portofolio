import Image from "next/image";
import Link from "next/link";
import { Nav } from "../components";

const Navbar = () => {
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
			</div>
		</Nav>
	);
};

export default Navbar;
