import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ShowContext } from "../../pages/port2/main";
import { Nav } from "../components";
import { BigScreen, LilScreen } from "./bigNav";

export const Navbar = () => {
	const { close, setclose, setnavVal, width } = useContext(ShowContext);

	return (
		<Nav m="1rem">
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
				{width > 414 ? <BigScreen /> : <LilScreen />}
			</div>
		</Nav>
	);
};

export default Navbar;
