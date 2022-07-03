import { Card, ContentDiv, FirstSection, H1 } from "../components";
import { Alldata } from "../../models";
import Image from "next/image";

const MainPage = () => {
	const Data = Alldata;
	return (
		<FirstSection ai={"center"}>
			<H1>PROJECTS</H1>
			<ContentDiv>
				{Data.map((e) => {
					return (
						<div>
							<Card
								src={e.src}
								key={e.id}
								layout="fixed"
								width="400"
								height="250"
							/>
							<br />
						</div>
					);
				})}
			</ContentDiv>
		</FirstSection>
	);
};

export default MainPage;
