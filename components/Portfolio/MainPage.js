import { Card, ContentDiv, FirstSection, H1 } from "../components";
import { Alldata } from "../../models";
import Image from "next/image";
import Link from "next/link";

const MainPage = () => {
	const Data = Alldata;
	return (
		<>
			<FirstSection ai={"center"} jc="center">
				<H1>PROJECTS</H1>
				<ContentDiv>
					{Data.map((e) => {
						return (
							<div key={e.id}>
								<Link href={`/port${e.id}`}>
									<Card
										src={e.src}
										key={e.id}
										layout="fixed"
										width="400"
										height="250"
										alt="Project Picture"
										href="/"
									/>
								</Link>
							</div>
						);
					})}
				</ContentDiv>
			</FirstSection>
		</>
	);
};

export default MainPage;
