import Image from "next/image";
import Link from "next/link";
import { FirstSection } from "../../components/components";

const Index = () => {
	return (
		<FirstSection ai="center">
			<div className="vidwrap">
				<video autoPlay muted loop height="100%">
					<source src={"/static/file.mp4"} type="video/mp4" />
				</video>
			</div>
			<Link href="/port1/desc">
				<Image
					className="Images"
					src={"/static/AvLogo.png"}
					width="250"
					layout="fixed"
					objectFit="cover"
					priority
					height="50"
					alt="Profile Picture"
				/>
			</Link>
		</FirstSection>
	);
};

export default Index;
