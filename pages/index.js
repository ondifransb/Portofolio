import { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import { FirstSection, SecondSection } from "../components/components";
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
		}, 3000);
		console.log("i fire once");

		return () => {
			clearTimeout(timer);
		};
	}, []);
	///////////////////////////////////////////////

	//VIEW
	return (
		<div className={styles.container}>
			<FirstPage />
			<SecondPage animate={show} />
		</div>
	);
}
