import Document, { Html, Head, Main, NextScript } from "next/document";
import { MainContainer } from "../components/components";

class MyDocument extends Document {
	render() {
		return (
			<MainContainer>
				<Html>
					<Head>
						<meta charset="utf-8" />
						<meta
							name="viewport"
							content="width=device-width, height=device-height,initial-scale=1"
						/>
						<meta
							name="description"
							content="web developer portfolio, programming, frontend-developer, frontend portfolio"
						/>

						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link rel="preconnect" href="https://fonts.gstatic.com" />
						<link
							href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@1,200&family=Overpass:ital@1&display=swap"
							rel="stylesheet"
						/>
					</Head>
					<body>
						<Main />
						<NextScript />
					</body>
				</Html>
			</MainContainer>
		);
	}
}

export default MyDocument;
