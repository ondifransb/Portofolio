import Link from "next/link";
import { Navbar } from "./components";

const Nav = () => {
	return (
		<Navbar>
			<ul>
				<li>
					<Link href="/">🍀</Link>
				</li>
			</ul>
		</Navbar>
	);
};

// Link's href name should be the same name with the page's target name to work, else it wont work

export default Nav;
