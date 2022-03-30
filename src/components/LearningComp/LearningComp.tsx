import React from "react";

import GirlRead from "../../assets/Frame11.png";
import styled from "styled-components";

import { FaCheck } from "react-icons/fa";

const LearningComp = () => {
	return (
		<LearningContainer>
			<Learningimg>
				<img src={GirlRead} alt="A girl reading her book" />
			</Learningimg>
			<Container>
				<LearningContent>
					<h1>
						Find Out More About <br />
						Our Learning Experience
					</h1>
					<p>
						We have built hospitals, arranged doctor appointments <br />
						have the diagnose and treat yourem ipsu r aol ad <br />
						meniam, quis nostrud exercitation.
					</p>
					<ul>
						<li>
							<FaCheck className="green" />
							Culture in diversity
						</li>
						<li>
							<FaCheck className="green" />
							We have built hospitals, arranged doctor.
						</li>
						<li>
							<FaCheck className="green" />
							We have built hospitals, arranged doctor.
						</li>
					</ul>
					<GreenButton>Learn more</GreenButton>
				</LearningContent>
			</Container>
		</LearningContainer>
	);
};

export default LearningComp;

const LearningContainer = styled.div`
	background: #ffffff;
`;

const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 3rem;
	display: flex;
	flex-direction: row;
	@media screen and (max-width: 1300px) {
		flex-direction: column;
	}
`;

const LearningContent = styled.div`
	color: #038c33;
	h1 {
		font-size: 2.5rem;
		font-weight: 500;
		margin-bottom: 1rem;
		@media screen and (max-width: 1300px) {
			font-size: 3.5rem;
		}
		@media screen and (max-width: 800px) {
			font-size: 2.5rem;
		}
		@media screen and (max-width: 750px) {
			font-size: 2rem;
		}
	}
	p {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.7rem;
		margin-bottom: 1rem;
		@media screen and (max-width: 1300px) {
			font-size: 1.7rem;
			font-weight: 300;
			line-height: 2.5rem;
		}
		@media screen and (max-width: 800px) {
			font-size: 1.2rem;
			font-weight: 300;
			line-height: 2rem;
		}
	}
	ul {
		list-style: none;
		line-height: 1.4rem;
		@media screen and (max-width: 1300px) {
			font-size: 1.7rem;
			font-weight: 300;
			line-height: 2.5rem;
		}
		@media screen and (max-width: 800px) {
			font-size: 1.2rem;
			font-weight: 300;
			line-height: 2rem;
		}
		@media screen and (max-width: 750px) {
			font-size: 1rem;
			font-weight: 300;
			line-height: 2rem;
		}
		li {
			color: #6c757d;
		}
		.green {
			background: #038c33;
			color: #ffffff;
			border-radius: 50%;
			margin-right: 0.5rem;
		}
	}
`;
const GreenButton = styled.button`
	background: #038c33;
	color: #ffffff;
	border: none;
	outline: none;
	padding: 1rem 2rem;
	cursor: pointer;
	border-radius: 5px;
	margin-top: 2rem;
	&:hover {
		background: #02a63b;
		transition: ease-in;
	}
`;

const Learningimg = styled.div`
	position: relative;
	img {
		position: absolute;
		right: 0%;
		margin-top: 6%;
		width: 40%;
	}
	@media screen and (max-width: 1300px) {
		display: none;
	}
`;
