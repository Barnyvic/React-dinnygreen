import React from "react";
import styled from "styled-components";
import ImageAdv from "../../assets/Frame3.png";
import Mask from "../../assets/MaskGroup.png";

const Advancelearn = () => {
	return (
		<AdvanceContainer>
			<Container>
				<AdvanceImgCont>
					<img className="AdvanceImg" src={ImageAdv} alt="A girl Smiling" />
				</AdvanceImgCont>
				<AdvanceContent>
					<img src={Mask} alt="A png img" />
					<h2>
						Advance Learning System <br></br> Around The World
					</h2>
					<p>
						We have made a collaborative effort in bringing together <br></br>
						scientific expertise from other countries, steered jointly <br></br>
						by the government on the basis of shared, <br></br> policy-driven
						interests.
					</p>
					<RateCont>
						<div className="teacher">
							<p className="sup">
								25K<sup>+</sup>
							</p>
							<p>Teacher</p>
						</div>
						<div className="Active_courses">
							<p className="sup">
								74K<sup>+</sup>
							</p>
							<p>Active Courses</p>
						</div>
						<div className="Extra_Curriular">
							<p className="sup">
								250<sup></sup>
							</p>
							<p>Extra Curriular</p>
						</div>
					</RateCont>
					<GreenButton>Learn more</GreenButton>
				</AdvanceContent>
			</Container>
		</AdvanceContainer>
	);
};

export default Advancelearn;

const AdvanceContainer = styled.div`
	width: 100%;
	max-width: 100%;
	padding: 4rem;
	background: #ffffff;
`;
const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 3rem;
	overflow: hidden;
	display: grid;
	justify-content: space-evenly;
	align-items: center;
	grid-template-columns: repeat(2, 1fr);
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const AdvanceContent = styled.div`
	color: #038c33;
	img {
		position: absolute;
		top: 140%;
		right: 0%;
	}
	h2 {
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 500;
	}
	p {
		font-size: 1rem;
		line-height: 1.5;
		font-weight: 500;
		color: #1f6036;
	}
	@media screen and (max-width: 1300px) {
		h2 {
			font-size: 2rem;
		}
	}
`;
const RateCont = styled.div`
	display: grid;
	justify-content: space-around;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	.Active_courses {
		border-right: 1px solid #d6d6d6;
		margin-right: 3rem;
		.sup {
			color: #038c33;
			font-size: 2.5rem;
		}
		p {
			color: #1f6036;
		}
	}
	.teacher {
		border-right: 1px solid #d6d6d6;
		margin-right: 3rem;
		.sup {
			color: #038c33;
			font-size: 2.5rem;
		}
		p {
			color: #1f6036;
		}
	}
	.Extra_Curriular {
		.sup {
			color: #038c33;
			font-size: 2.5rem;
		}
		p {
			color: #1f6036;
		}
	}
	@media screen and (max-width: 1300px) {
		.Active_courses {
			margin-right:1rem;
			.sup {
				font-size: 2rem;
			}
		}
		.Extra_Curriular {
			.sup {
				font-size: 2rem;
			}
		}
		.teacher {
			.sup {
				font-size: 2rem;
			}
		}
	}
`;

const AdvanceImgCont = styled.div`
	padding: 1rem;
	.AdvanceImg {
		@media screen and (max-width: 1300px) {
	
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
