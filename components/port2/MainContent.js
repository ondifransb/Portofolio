import Image from "next/image";
import React, { useContext } from "react";
import { AMData } from "../../models";
import { ShowContext } from "../../pages/port2/main";

import { Content } from "../components";

const MainContent = () => {
	const data = AMData;
	const { Show, setShow } = useContext(ShowContext);
	return (
		<>
			{(data || []).map((e) => {
				return Show == e.id ? (
					<Content>
						<div className="wrapper">
							<div className="desc">
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
									objectFit="contain"
									alt="project picture"
								/>
							</div>
						</div>
					</Content>
				) : (
					<></>
				);
			})}
		</>
	);
};

export default MainContent;
