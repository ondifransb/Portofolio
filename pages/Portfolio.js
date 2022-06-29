import styles from "../styles/Port.module.css";

const Portfolio = () => {
	return (
		<div className={styles.container}>
			<section className={styles.firstsection}>
				<h1 className={styles.welcometext}>
					Hi <br />{" "}
					<span className={styles.spantext}>Thank you for coming</span> <br />{" "}
					<span className={styles.spantext}>
						to my simplified portfolio website
					</span>
				</h1>
			</section>
		</div>
	);
};

export default Portfolio;
