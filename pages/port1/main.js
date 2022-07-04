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

	const Changedata = () => {
		setChange(!Change);
		if (Change) {
			setdata(AvanaData);
		} else {
			setdata(AvanaData2);
		}
	};

	console.log(Change);

	return (
		<>
			<div className="arrowdiv">
				<span
					onClick={() => {
						Changedata();
					}}
				>
					◀
				</span>
				<span
					onClick={() => {
						Changedata();
					}}
				>
					▶
				</span>
			</div>
			<FirstSection>
				<H1 mb="5px" ml="20px">
					{Change ? "Ongoing Projects" : "Completed Projects"}
				</H1>

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
