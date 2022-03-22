import React from "react";
import bgimg from "../../assets/Unique2.jpeg";
import Blur from "../../assets/Unique1.png";

import styled from "styled-components";

const UniqueComps = () => {
	return (
		
			<UniqueContainer>
				<img src={Blur} alt="dinner-green-logo" />
				<Container>
					<UniqueContent>
						<div className="Content-wrapper">
							<h1>
								Give Your Child A <br />
								Chance To Be Unique
							</h1>
							<p>
								Experts agree that a child’s personality doesn’t fully form
								<br />
								until they are in elementary school. <br />
								<a href="#" className="sign-in">
									Sign-in
								</a>
								to enroll your child
							</p>
							<ButtonContainer>
								<GreenButton>Sign-up</GreenButton>
								<LGButton>Learn more</LGButton>
							</ButtonContainer>
						</div>
					</UniqueContent>
				</Container>
			</UniqueContainer>
	
	);
};

export default UniqueComps;

const UniqueContainer = styled.div`
	background: url(${bgimg}) no-repeat center center/cover;
	background-position: right;
	padding: 2rem;
	position: relative;
	img {
		position: absolute;
		top: 88%;
		left: 0%;
		width: 100%;
		height: 11vh;
	}
`;
const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 1rem;
	overflow: hidden;
`;
const UniqueContent = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	justify-content: center;
	align-items: center;
	height: 80vh;
	.Content-wrapper {
		margin-left: 5rem;
		line-height: 1.2;
		h1 {
			font-size: 3.5rem;
			line-height: 1.2;
			color: #038c33;
		}
		p {
			margin-top: 1rem;
			font-size: 1.3rem;
			line-height: 1.4;
			color: #1f6036;
			a {
				text-decoration: none;
				color: #7ad420;
				margin-left: 0.3rem;
			}
		}
		@media screen and (max-width: 1300px) {
			h1 {
				font-size: 3rem;
			}
		}
		@media screen and (max-width: 800px) {
			h1 {
				font-size: 2.5rem;
			}
		}
	}
`;
const ButtonContainer = styled.div`
	margin-top: 2rem;
`;
const GreenButton = styled.button`
	background: #038c33;
	color: #ffffff;
	border: none;
	outline: none;
	padding: 1rem 2rem;
	cursor: pointer;
	border-radius: 5px;
	font-size: 1.2rem;
	margin-right: 1.5rem;
	&:hover {
		background: #02a63b;
		transition: ease-in;
	}
`;
const LGButton = styled.button`
	background: #add9bd;
	color: #038c33;
	border: none;
	font-size: 1.2rem;
	outline: none;
	padding: 1rem 2rem;
	cursor: pointer;
	border-radius: 5px;
	margin-right: 1.5rem;
	&:hover {
		background: #b6fccf;
		transition: ease-in;
	}
`;
