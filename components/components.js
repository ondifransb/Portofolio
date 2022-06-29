import styled, { keyframes, css } from "styled-components";

export const FirstSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	width: 100%;
	height: 100vh;
`;

export const SecondSection = styled.section`
	margin: 0;
	padding: 2rem;
	z-index: 1;

	display: ${(props) => (props.animateit ? "flex" : "none")};
	flex-direction: row;
	justify-content: center;
	align-items: center;

	height: 100vh;
	width: 100%;

	background-color: white;

	position: absolute;
	left: 50%;
	transform: translateX(50%);

	animation: ${(props) =>
		props.animateit &&
		css`
			${animation1} 1s ease-out forwards;
		`};

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
			font-size: clamp(1.7rem, -0.875rem + 8.333vw, 3.5rem);
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
from{
    width: 100%;
	transform: translateX(50%);
}
to{
    width: 100%;
	transform: translateX(-50%);
}
`;
