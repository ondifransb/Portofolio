import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FirstSection } from "../../components/components";
import Footer from "../../components/port2/Footer";
import MainContent from "../../components/port2/MainContent";
import Navbar from "../../components/port2/Navbar";

import { createContext } from "react";

export const ShowContext = createContext({});

const Main = () => {
	const [Show, setShow] = useState();
	const [navVal, setnavVal] = useState(false);
	const [close, setclose] = useState(false);

	const [width, setwidth] = useState(416);

	useEffect(() => {
		const windoww = () => {
			setwidth(window.innerWidth);
		};

		setclose(false);

		window.addEventListener("resize", windoww);

		return () => {
			window.removeEventListener("resize", windoww);
		};
	}, [width]);

	return (
		<ShowContext.Provider
			value={{ Show, setShow, navVal, setnavVal, close, setclose, width }}
		>
			<FirstSection jc="center" bc="#4444" ps="fixed" ht="100vh" tp="0%">
				<Navbar />
				<MainContent />
				<Footer />
			</FirstSection>
		</ShowContext.Provider>
	);
};

export default Main;
