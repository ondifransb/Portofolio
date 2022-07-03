import { SecondSection } from "../components";
import Image from "next/image";
import Link from "next/link";

const SecondPage = ({ animate }) => {
	return (
		<SecondSection animateit={animate}>
			<Image
				className="Images"
				src={"/static/ProfilePict.jpeg"}
				width="300"
				height="300"
				alt="Profile Picture"
			/>
			<div className="firstdiv">
				<span className="wkwkwk">ONDI FRANS BUTARBUTAR</span>
				<p>
					I always want to <span>explore</span>. Getting into app development
					has changed me a lot and since then, i try to push myself and
					especially my work to the <span>new whole level</span> with each
					project. I always put the <span>quality first</span> for each project
					i work on and i pay particular attention to the interaction,
					animations and <span>obviously</span> the performances.{" "}
					<span>This is just the beginning</span> and i really can’t wait to{" "}
					<span>push my limit</span> even further by working with you on our
					next project. i usually want my work to use <span>less</span>{" "}
					third-parties library, it allows me to feel a{" "}
					<span>complete freedom</span> and also i want to <span>test</span>{" "}
					myself, my competence, my creativity, and my imagination.
				</p>
				<div className="portfolio">
					<Link href="/portfolio">⮞</Link>
				</div>
			</div>
		</SecondSection>
	);
};

export default SecondPage;
