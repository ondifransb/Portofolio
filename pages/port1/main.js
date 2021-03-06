import Image from "next/image";
import { useState } from "react";
import {
	Card,
	ContentDiv,
	FirstSection,
	H1,
	SecondSection,
} from "../../components/components";
import { AvanaData, AvanaData2 } from "../../models";

const Main = () => {
	const [Change, setChange] = useState(false);
	const [data, setdata] = useState(AvanaData);

	const LeftArrow = () => {
		setChange(false);
		setdata(AvanaData);
	};

	const RightArrow = () => {
		setChange(true);
		setdata(AvanaData2);
	};

	return (
		<>
			<div className="arrowdiv">
				<span
					className="leftarrow"
					onClick={() => {
						LeftArrow();
					}}
				>
					◀
				</span>
				<span
					className="rightarrow"
					onClick={() => {
						RightArrow();
					}}
				>
					▶
				</span>
			</div>
			<FirstSection>
				<H1 ml="20px">{Change ? "Completed Projects" : "Ongoing Projects"}</H1>

				<ContentDiv>
					{(data || []).map((e) => {
						return (
							<Card
								src={e.src}
								key={e.id}
								layout="fixed"
								width="400"
								height="250"
								object-fit="cover"
								alt="Project Picture"
							/>
						);
					})}
				</ContentDiv>
			</FirstSection>
		</>
	);
};

export default Main;
