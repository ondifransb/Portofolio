import { FirstSection, H1, Span } from "../components";

const FirstPage = ({ animate }) => {
	return (
		<FirstSection>
			<H1 animateit={animate}>
				Hi <br /> <Span>Thank you for coming</Span> <br />{" "}
				<Span>to my simplified portfolio website</Span>
			</H1>
		</FirstSection>
	);
};

export default FirstPage;
