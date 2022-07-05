import Image from "next/image";
import Link from "next/link";
import { FirstSection } from "../../components/components";

const Index = () => {
	return (
		<FirstSection ai="center" h="100vh" bc="black">
			<Link href="/port2/main">
				<Image
					className="Images"
					width="200"
					height="200"
					layout="fixed"
					src="/static/Andra Matin/logo-original.svg"
				/>
			</Link>
		</FirstSection>
	);
};

export default Index;
