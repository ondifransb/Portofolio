import styled, { keyframes, css } from "styled-components";
import Image from "next/image";

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	overflow-y: hidden;

	width: clamp(320px, 100vw, 1980px);
	height: 100%;

	.arrowdiv {
		display: flex;
		background-color: transparent;
		.leftarrow {
			margin-right: auto;
			float: left;
		}
		.rightarrow {
			margin-left: auto;
			float: right;
		}
	}
`;

export const H1 = styled.h1`
	font-size: clamp(1.7rem, -0.875rem + 8.333vw, 3.5rem);
	color: black;
	margin-left: ${({ ml }) => (ml ? ml : "")};
	margin-bottom: ${({ mb }) => (mb ? mb : "")};

	@media only screen and (max-width: 767px) {
		margin-left: 10px;
	}
`;

export const Span = styled.span`
	font-weight: lighter;
`;

export const Navbar = styled.nav`
	color: black;
	font-weight: bolder;
	font-size: 2rem;

	width: clamp(55px, 2vw, 100px);
	height clamp(55px, 2vw, 100px);
	
	border-radius: 50%;
	
	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 2;
	position: fixed;
	bottom: 0;

	ul {
		all: unset;
		display: flex;
		list-style: none;
		
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

	align-items: ${({ ai }) => (ai ? ai : "flex-start")};
	justify-content: ${({ jc }) => (jc ? jc : "space-evenly")};

	background-color: ${({ bc }) => (bc ? bc : "transparent")};
	position: ${({ ps }) => (ps ? ps : "")};
	top: ${({ tp }) => (tp ? tp : "")};

	min-height: ${({ ht }) => (ht ? ht : "fit-content")};
	width: 100vw;
	overflow-x: hidden;

	.vidwrap {
		-o-object-fit: cover;
		object-fit: cover;
		position: fixed;
		top: 0;
		left: 0;
	}

	.Images {
		filter: blur(3px);
		transition: 0.2s ease-out;
		:hover {
			filter: blur(0px);
			cursor: pointer;
		}
	}

	.NavImages {
		transition: 0.2s ease-out;
		:hover {
			cursor: pointer;
		}
	}

	.avdesc {
		width: 95%;
		text-align: justify;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const SecondSection = styled.section`
	margin: 0;
	padding: 2rem;
	z-index: 1;

	width: 100vw;

	background-color: white;

	display: ${(props) => (props.animateit ? "flex" : "none")};
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;

	transform: translateX(100%);

	animation: ${(props) =>
		props.animateit &&
		css`
			${animation1} 1s ease-out forwards;
		`};

	.Images {
		border-radius: 50%;
	}

	.firstdiv {
		margin-left: 10px;
		padding: 10px;
		border-left: 2px solid black;
		width: 53%;

		flex-wrap: wrap;
		text-align: justify;

		.wkwkwk {
			display: block;
			font-size: clamp(1.8rem, -0.875rem + 8.333vw, 3.5rem);
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
			height: 250px;

			border-left: none;
			border-top: 2px solid black;

			margin-left: 0px;
			margin-top: 20px;

			::-webkit-scrollbar {
				width: 0px;
			}
			::-moz-scrollbar {
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

export const ContentDiv = styled.div`
	display: flex;
	justify-content: space-around;

	flex-wrap: wrap;
	gap: 20px;

	width: clamp(320px, 100vw, 1980px);
`;

export const Card = styled(Image)`
	transition: 0.3s ease-out;
	border: none;

	:hover {
		cursor: pointer;
		transform: scale(1.09);
	}
`;

export const Nav = styled.nav`
	width: clamp(600px, 60%, 900px);
	height: fit-content;
	margin: ${({ m }) => (m ? m : "")};
	z-index: 3;

	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: space-between;

	/* position: fixed;
	top: 0; */

	font-family: "FiraSans-Light";

	Image {
		background-color: yellow;
	}

	.linkdiv {
		width: 90%;

		display: flex;
		justify-content: space-around;

		span {
			color: #9d9fa1;

			transition: 0.2s ease-out;

			:hover {
				cursor: pointer;
				.spann {
					color: #303132;
				}
			}
		}
	}

	@media only screen and (max-width: 767px) {
		width: 90%;

		.linkdiv {
			display: block;
			.hamburger {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				width: 20px;
				height: 20px;
				float: right;
				:hover {
					cursor: pointer;
				}

				div {
					width: 100%;
					height: 10%;
					border-radius: 5px;
					background-color: black;
				}
			}
		}
	}
`;

export const FooterC = styled.footer`
	max-width: clamp(500px, 55%, 1000px);
	max-height: 20vh;
	z-index: 3;

	margin: ${({ m }) => (m ? m : "")};

	display: flex;
	flex-wrap: wrap;
	flex-shrink: 0;

	span {
		height: 25px;

		display: flex;
		align-items: center;

		font-size: clamp(10px, 1.375rem, 1.375rem);
		line-height: 0;
		text-transform: capitalize;
		padding: 0 10px;
		letter-spacing: 0;
		color: #9d9fa1;
		border-right: 1px solid #9d9fa1;

		:hover {
			cursor: pointer;
			color: white;
		}

		@media only screen and (max-width: 767px) {
			font-size: 0.9rem;
			height: 20px;
		}
	}
`;

export const Content = styled.div`
	padding: 0 2rem;
	width: 100vw;

	height: ${({ ht }) => (ht ? ht : "fit-content")};

	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.desc {
			width: 50%;
			display: flex;
			flex-direction: column;
			order: 1;

			.category {
				font-size: 12px;
				color: #5f5f5f;
				font-weight: 300;
			}
			.title {
				font-size: 22px;
				font-weight: 400;
				color: #444444;
			}
			.year {
				font-size: 12px;
				margin-bottom: 20px;
				font-weight: 300;
			}
			.description {
				color: 4444;
				width: 95%;
				height: 30vh;
				overflow: scroll;
				text-align: justify;
				font-weight: lighter;
			}
		}

		.img {
			height: min-content;
			order: 2;
			transform: perspective(1000px) rotateY(-15deg);
		}
	}

	

	.ulwrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		li {
			color: #9d9fa1;
			transition: 0.3s ease-out;
			:hover {
				cursor: pointer;
				transform: translateX(20px);
			}
		}
	}

	aside {
		.port2button {
			all: unset;
			outline: none;
			resize: none;
			border: none;
			font-family: "FiraSans-Light";
			display: block,
			transition: 0.2s ease-out;
			color: #676768;
			:hover {
				cursor: pointer;
			}
		}
	}

	.labelport6{
		opacity: 0.5;
		/* background-color: red; */
	}

	.inputport6{
	all: unset;
	width: clamp(200px, 20vw, 400ox);
	resize: "none";
	outline: "1px solid black";
	border: "none";
	border-bottom: 1px solid black;
	height: 20px;
	white-space: normal;
    
	
	
	}

	.buttonport6{
		all: unset;
		text-align: center;
		width: 100px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;

		border-radius: 10px;
		border: 1px solid black;

		:hover{
			cursor: pointer;
		}

	}

	@media only screen and (max-width: 767px) {
		display: ${({ dp }) => (dp ? dp : "")};
		flex-direction: ${({ fd }) => (fd ? fd : "")};;
		position: fixed;
		/* height: ${({ ht }) => (ht ? ht : "clamp(350px, 82%, 1000px)")}; */
		/* transform: translateY(${({ ty }) => (ty ? ty : "")}); */	

		.wrapper {
			flex-direction: column;
			align-items: flex-start;
			/* overflow-y: scroll; */

			.desc {
				width: fit-content;
				order: 2;
				transform: translateY(-10%);

				.category {
					background-color: transparent;
				}
				.title {
					background-color: transparent;
				}
				.year {
					background-color: transparent;
				}
				.description {
					width: 100%;
					overflow-y: scroll;
				}
			}
			.img {
				height: 50% !important;
				order: 1;
				transform: perspective(0px) rotateY(0deg);
			}
		}

		aside{
			width: 100% !important;
			
		}

		
	}
`;

const animation1 = keyframes`
0%{
    width: 100%;
	transform: translateX(100%);
}
100%{
    width: 100%;
	transform: translateX(0%);
}
`;
