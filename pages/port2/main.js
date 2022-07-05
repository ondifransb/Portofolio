import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FirstSection, Nav } from "../../components/components";
import Footer from "../../components/port2/Footer";
import MainContent from "../../components/port2/MainContent";
import Navbar from "../../components/port2/Navbar";

import { createContext } from "react";

export const ShowContext = createContext({});

const Main = () => {
	const [Show, setShow] = useState();

	return (
		<ShowContext.Provider value={{ Show, setShow }}>
			<FirstSection h="100vh" bc="#4444">
				<Navbar />
				<MainContent />
				<Footer />
			</FirstSection>
		</ShowContext.Provider>
	);
};

export default Main;
