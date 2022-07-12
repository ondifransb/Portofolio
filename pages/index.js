import { useEffect, useState } from "react";
import {
	FirstSection,
	MainContainer,
	SecondSection,
} from "../components/components";
import FirstPage from "../components/HomePage/FirstSection";
import SecondPage from "../components/HomePage/SecondSection";

export default function Home() {
	//MODEL
	const [show, setshow] = useState(false);
	///////////////////////////////////////////////

	//CONTROLLER
	useEffect(() => {
		let timer = setTimeout(() => {
			setshow(true);
		}, 2000);
		alert("for the full experience, please use desktop");

		return () => {
			clearTimeout(timer);
		};
	}, []);
	///////////////////////////////////////////////

	//VIEW
	return (
		<>
			<FirstPage />
			<SecondPage animate={show} />
		</>
	);
}
