import Head from "next/head";
import { MainContainer } from "../components/components";
import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<MainContainer>
			<Head>
				<title>Obportfolio</title>
				<meta
					name="viewport"
					content="width=device-width,height=device-height, initial-scale=1"
				/>
			</Head>
			<Nav />
			<Component {...pageProps} />
		</MainContainer>
	);
}

export default MyApp;
