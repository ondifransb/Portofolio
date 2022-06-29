import styles from "../../styles/Main.module.css";
import { FirstSection } from "../components";

const FirstPage = () => {
	return (
		<FirstSection>
			<h1 className={styles.welcometext}>
				Hi <br /> <span className={styles.spantext}>Thank you for coming</span>{" "}
				<br />{" "}
				<span className={styles.spantext}>
					to my simplified portfolio website
				</span>
			</h1>
		</FirstSection>
	);
};

export default FirstPage;
