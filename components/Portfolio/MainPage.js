import { Card, ContentDiv, FirstSection, H1 } from "../components";
import { Alldata } from "../../models";
import Image from "next/image";

const MainPage = () => {
	const Data = Alldata;
	return (
		<FirstSection ai={"center"} ht={"fit-content"}>
			<H1>PROJECTS</H1>
			<ContentDiv>
				{Data.map((e) => {
					return (
						<div key={e.id}>
							<Card
								src={e.src}
								key={e.id}
								layout="fixed"
								width="400"
								height="250"
								alt="Project Picture"
							/>
						</div>
					);
				})}
			</ContentDiv>
		</FirstSection>
	);
};

export default MainPage;
