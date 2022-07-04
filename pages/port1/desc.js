import Link from "next/link";
import { FirstSection } from "../../components/components";

const Main = () => {
	return (
		<FirstSection ai="center">
			<div className="avdesc">
				<h1>
					Based in Bandung, Indonesia. <br /> An architecture - Interior Design
					and Build Studio
				</h1>
				<h3>
					Studio AVANA was established by three architects with same vision.
					<span>
						Our vision is to achieve a good quality and the harmony between the
						building, the user and the surrounding. We combined art, research,
						and technology to create high quality space for the user.
					</span>
				</h3>
				<br />
				<Link href="/port1/main">✈️</Link>
			</div>
		</FirstSection>
	);
};

export default Main;
