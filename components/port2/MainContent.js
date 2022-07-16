import Image from "next/image";
import React, { useContext } from "react";
import { AMData } from "../../models";
import { ShowContext } from "../../pages/port2/main";

import { Content } from "../components";
import Project from "../..//pages/port2/navPages/projects";
import Journal from "../..//pages/port2/navPages/journal";
import About from "../..//pages/port2/navPages/about";
import Contact from "../..//pages/port2/navPages/contact";
import { BigScreen } from "./bigNav";

const MainContent = () => {
	const data = AMData;
	const { Show, navVal, close, width } = useContext(ShowContext);
	console.log(width);

	const renderit2 = () => {
		return (data || []).map((e) => {
			return Show == e.id && navVal == 0 ? (
				<Content key={e.id} ty={width <= 414 ? "-12%" : "0"}>
					<div className="wrapper">
						<div className="desc" key={e.id}>
							<span className="category">{e.category}</span>
							<span className="title">{e.title}</span>
							<span className="year">{e.year}</span>
							<span className="description">{e.desc}</span>
						</div>
						<div className="img">
							<Image
								src={e.src}
								key={e.id}
								height="700"
								width="700"
								layout="intrinsic"
								objectFit="contain"
								alt="project picture"
								sizes="(min-width: 767px) 50vw, 100vw"
							/>
						</div>
					</div>
				</Content>
			) : (
				<div key={e.id}></div>
			);
		});
	};

	const renderit = () => {
		if (navVal === 1 && close == false) {
			return <Project />;
		}
		if (navVal === 1 && close == true) {
			return <Project />;
		}
		if (navVal === 2 && close == false) {
			return <Journal />;
		}
		if (navVal === 2 && close == true) {
			return <Journal />;
		}
		if (navVal === 3 && close == false) {
			return <About />;
		}
		if (navVal === 3 && close == true) {
			return <About />;
		}
		if (navVal === 4 && close == false) {
			return <Contact />;
		}
		if (navVal === 4 && close == true) {
			return <Contact />;
		}
		if (navVal === 0) {
			return renderit2();
		}
		if (navVal == true || close == true) {
			return <BigScreen />;
		}
	};

	return <>{renderit()}</>;
};

export default MainContent;
