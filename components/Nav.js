import style from "../styles/nav.module.css"; //build-in
import Link from "next/link";

const Nav = () => {
	return (
		<nav className={style.nav}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
			</ul>
		</nav>
	);
};

// Link's href name should be the same name with the page's target name to work, else it wont work

export default Nav;
