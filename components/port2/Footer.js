import { useContext, useState } from "react";
import { ShowContext } from "../../pages/port2/main";

import { FooterC } from "../components";

const Footer = () => {
	const { setShow, setnavVal } = useContext(ShowContext);
	return (
		<FooterC
			m="1.4rem"
			onMouseEnter={() => {
				setnavVal(0);
			}}
		>
			<span onMouseEnter={() => setShow(1)}>Potato Head Beach Club </span>
			<span onMouseEnter={() => setShow(2)}>Katamama </span>
			<span onMouseEnter={() => setShow(3)}>Blimbing Sari Airport </span>
			<span onMouseEnter={() => setShow(4)}>Tubaba Mosque </span>
			<span onMouseEnter={() => setShow(5)}>EH Residence </span>
			<span onMouseEnter={() => setShow(6)}>AM Residence </span>
			<span onMouseEnter={() => setShow(7)}>I&L Residence</span>
		</FooterC>
	);
};

export default Footer;
