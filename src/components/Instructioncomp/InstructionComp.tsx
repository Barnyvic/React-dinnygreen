import React from "react";
import styled from "styled-components";
import man from "../../assets/man.jpeg";
import woman from "../../assets/woman.jpeg";
import red from "../../assets/redcloud.jpeg";
import { BsCalendarDate } from "react-icons/bs";

const InstructionComp = () => {
	return (
		<InstructionContainer>
			<Container>
				<InstructionContent>
					<h1>Our Instructors & Teachers</h1>
					<p>
						We have the best teachers and instructors that would be able to
						train your kids, making <br></br>
						them Creative, God fearing, Respectfull and Intelligent.
					</p>
					<Instructionimg>
						<Imgdiv>
							<div className="Overlay">
								<button>Full time</button>
								<p>Masters in Geology</p>
								<p className="font">28th April 2021</p>
							</div>
						</Imgdiv>
						<Imgdiv1>
							<div className="Overlay">
								<button>Full time</button>
								<p>Doctor appointments have the </p>
								<p className="dia">diagnose</p>
								<p className="font">
									<BsCalendarDate /> 28th April 2021
								</p>
							</div>
						</Imgdiv1>
						<Imgdiv2>
							<div className="Overlay">
								<button>Full time</button>
								<p>Doctor appointments have the </p>
								<p className="dia">diagnose</p>
								<p className="font">
									<BsCalendarDate /> 28th April 2021
								</p>
							</div>
						</Imgdiv2>
					</Instructionimg>
					<div className="btnCOnt">
						<GreenButton>See all</GreenButton>
					</div>
				</InstructionContent>
			</Container>
		</InstructionContainer>
	);
};

export default InstructionComp;

const InstructionContainer = styled.div`
	background: rgba(143, 191, 38, 0.08);
`;

const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 2rem;
	overflow: hidden;
`;

const InstructionContent = styled.div`
	h1 {
		text-align: center;
		color: #038c33;
		font-size: 2.5rem;
		font-weight: 500;
		padding-bottom: 1rem;
	}
	p {
		text-align: center;
		color: #6c757d;
		line-height: 2rem;
		font-size: 1.2rem;
	}
	.btnCOnt {
		text-align: center;
	}
`;

const Instructionimg = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	padding-top: 3.5rem;
	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const Imgdiv = styled.div`
	background: url(${woman}) no-repeat center center/cover;
	height: 50vh;
	width: 100%;
	border-radius: 5px;
	position: relative;
	.Overlay {
		position: absolute;
		width: 100%;
		height: 48%;
		top: 52%;
		border-radius: 0px 0px 5px 5px;
		background: linear-gradient(
			180deg,
			rgba(3, 140, 51, 0) 22.57%,
			rgba(3, 140, 51, 0.497159) 77.2%,
			#038c33 100%
		);
		button {
			position: absolute;
			top: 17%;
			left: 5%;
			outline: none;
			border: none;
			padding: 0.5rem 1.5rem;
			background-color: #add9bd;
			border-radius: 3.4px;
			color: #038c33;
		}
		p {
			position: absolute;
			top: 35%;
			left: 5%;
			color: #ffffff;
		}
		.font {
			position: absolute;
			top: 55%;
			color: #ffffff;
			left: 5%;
		}
	}
`;

const Imgdiv1 = styled.div`
	background: url(${man}) no-repeat center center/cover;
	height: 50vh;
	width: 100%;
	border-radius: 5px;
	position: relative;
	.Overlay {
		position: absolute;
		width: 100%;
		height: 48%;
		top: 52%;
		border-radius: 0px 0px 5px 5px;
		background: linear-gradient(
			180deg,
			rgba(3, 140, 51, 0) 22.57%,
			rgba(3, 140, 51, 0.497159) 77.2%,
			#038c33 100%
		);
		button {
			position: absolute;
			top: 17%;
			left: 5%;
			outline: none;
			border: none;
			padding: 0.5rem 1.5rem;
			background-color: #add9bd;
			border-radius: 3.4px;
			color: #038c33;
		}
		p {
			position: absolute;
			top: 35%;
			left: 5%;
			color: #ffffff;
		}
		.dia {
			position: absolute;
			top: 45%;
			left: 5%;
			color: #ffffff;
		}
		.font {
			position: absolute;
			top: 60%;
			color: #ffffff;
			left: 5%;
		}
	}
`;

const Imgdiv2 = styled.div`
	background: url(${red}) no-repeat center center/cover;
	height: 50vh;
	width: 100%;
	border-radius: 5px;
	position: relative;
	.Overlay {
		position: absolute;
		width: 100%;
		height: 48%;
		top: 52%;
		border-radius: 0px 0px 5px 5px;
		background: linear-gradient(
			180deg,
			rgba(3, 140, 51, 0) 22.57%,
			rgba(3, 140, 51, 0.497159) 77.2%,
			#038c33 100%
		);
		button {
			position: absolute;
			top: 17%;
			left: 5%;
			outline: none;
			border: none;
			padding: 0.5rem 1.5rem;
			background-color: #add9bd;
			border-radius: 3.4px;
			color: #038c33;
		}
		p {
			position: absolute;
			top: 35%;
			left: 5%;
			color: #ffffff;
		}
		.dia {
			position: absolute;
			top: 45%;
			left: 5%;
			color: #ffffff;
		}
		.font {
			position: absolute;
			top: 60%;
			color: #ffffff;
			left: 5%;
		}
	}
`;

const GreenButton = styled.button`
	background: #038c33;
	color: #ffffff;
	border: none;
	outline: none;
	margin-top: 3rem;
	padding: 0.7rem 2rem;
	cursor: pointer;
	border-radius: 5px;
	font-size: 1.2rem;
	margin-right: 1.5rem;
	&:hover {
		background: #02a63b;
		transition: ease-in;
	}
`;
