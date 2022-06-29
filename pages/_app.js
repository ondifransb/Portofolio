import { createGlobalStyle } from "styled-components";
import Nav from "../components/Nav";

const GlobalStyle = createGlobalStyle`
html,
body {
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin: 0;
	font-family: "Overpass", sans-serif;

	overflow: hidden;
}

a {
	color: inherit;
	text-decoration: none;
}

* {
	box-sizing: border-box;
}

`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			{/* <Nav /> */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
