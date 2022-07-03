import Head from "next/head";
import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@1,200&family=Overpass:ital@1&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Nav />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
