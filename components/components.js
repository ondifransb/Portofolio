import styled, { keyframes, css } from "styled-components";

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: clamp(320px, 100vw, 1980px);
`;

export const H1 = styled.h1`
	font-size: clamp(1.7rem, -0.875rem + 8.333vw, 3.5rem);
	color: black;
	animation: ${(props) =>
		props.animateit &&
		css`
			${animation1} 0.5s  ease-out forwards;
		`};
`;

export const Span = styled.span`
	font-weight: lighter;
`;

export const Navbar = styled.nav`
	background: #000;
	color: #fff;
	width: 100%;
	position: fixed;

	z-index: 2;

	ul {
		all: unset;
		display: flex;
		list-style: none;
		/* background-color: blue; */
		justify-content: space-between;
		align-items: flex-start;
	}

	li {
		margin: 10px 0px;
	}
`;

export const FirstSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	width: 100vw;
	height: 100vh;
`;

export const SecondSection = styled.section`
	margin: 0;
	padding: 2rem;
	z-index: 1;

	background-color: white;

	display: ${(props) => (props.animateit ? "flex" : "none")};
	flex-direction: row;
	justify-content: center;
	align-items: center;

	height: 100vh;
	width: 100vw;

	/* background-color: white; */

	position: absolute;
	left: 50%;
	transform: translateX(50%);

	animation: ${(props) =>
		props.animateit &&
		css`
			${animation2} 1s ease-out forwards;
		`};

	.Images {
		border-radius: 50%;
	}

	div {
		margin-left: 10px;
		padding: 10px;
		border-left: 2px solid black;
		width: 53%;

		flex-wrap: wrap;
		text-align: justify;

		cursor: none;

		.wkwkwk {
			display: block;
			font-size: clamp(1.6rem, -0.875rem + 8.333vw, 3.5rem);
			font-weight: lighter;
		}

		p {
			display: block;

			span {
				font-weight: bolder;
			}
		}
		@media only screen and (max-width: 767px) {
			height: 30%;
			overflow-y: scroll;
			width: 100%;

			border-left: none;
			border-top: 2px solid black;

			margin-left: 0px;
			margin-top: 20px;

			::-webkit-scrollbar {
				width: 0px;
			}
		}
	}

	.portfolio {
		all: unset;
		color: grey;
	}

	@media only screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

const animation1 = keyframes`
0%{
	color: black;
}
100%{
	color: white;
}
`;

const animation2 = keyframes`
0%{
    width: 100%;
	transform: translateX(50%);
}
100%{
    width: 100%;
	transform: translateX(-50%);
}
`;
