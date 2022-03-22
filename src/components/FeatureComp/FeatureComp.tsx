import React from "react";
import styled from "styled-components";
import FeatureBg from "../../assets/girlsonwhite.png";
import reddotted from "../../assets/Ellipse24.png";

const FeatureComp = () => {
	return (
		<FeatureContainer>
			<FeatureOverlay>
				<Container>
					<FeatureContent>
						<h1>Our Features</h1>
						<p>
							Dinny Green International School is nurtured in grace and truth,
							raising green, <br />
							flourishing and successful children.
						</p>
					</FeatureContent>
					<GridContainer>
						<FlexContainer>
							<div className="dotted_border">
								<img src={reddotted} alt="Red Dotted Circle" />
							</div>
							<div className="awsometeacher_content">
								<h4>Awesome Teachers</h4>
								<p>
									Lorem ipsum dolor sit amet, consecte <br />
									tur adipisicing elit, sed do eiusmod <br />
									ukkf tempor incididunt u.
								</p>
							</div>
						</FlexContainer>
						<FlexContainer>
							<div className="dotted_border">
								<img src={reddotted} alt="Red Dotted Circle" />
							</div>
							<div className="awsometeacher_content">
								<h4>Global Recognition</h4>
								<p>
									Lorem ipsum dolor sit amet, consecte <br />
									tur adipisicing elit, sed do eiusmod <br />
									ukkf tempor incididunt u.
								</p>
							</div>
						</FlexContainer>
						<FlexContainer>
							<div className="dotted_border">
								<img src={reddotted} alt="Red Dotted Circle" />
							</div>
							<div className="awsometeacher_content">
								<h4>Extra curricular activities</h4>
								<p>
									Lorem ipsum dolor sit amet, consecte <br />
									tur adipisicing elit, sed do eiusmod <br />
									ukkf tempor incididunt u.
								</p>
							</div>
						</FlexContainer>
						<FlexContainer>
							<div className="dotted_border">
								<img src={reddotted} alt="Red Dotted Circle" />
							</div>
							<div className="awsometeacher_content">
								<h4>Government Approved</h4>
								<p>
									Lorem ipsum dolor sit amet, consecte <br />
									tur adipisicing elit, sed do eiusmod <br />
									ukkf tempor incididunt u.
								</p>
							</div>
						</FlexContainer>
					</GridContainer>
				</Container>
			</FeatureOverlay>
		</FeatureContainer>
	);
};

export default FeatureComp;

const FeatureContainer = styled.div`
	background: url(${FeatureBg}) no-repeat center center/cover;
`;
const FeatureOverlay = styled.div`
	background: rgba(3, 140, 51, 0.7);
`;
const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 1rem;
	overflow: hidden;
`;
const FeatureContent = styled.div`
	color: #ffffff;
	padding: 3rem;
	text-align: center;
	h1 {
		font-size: 2.5rem;
		font-weight: 500;
		margin-bottom: 1rem;
	}
	p {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.5;
	}
`;
const GridContainer = styled.div`
	display: grid;
	align-items: center;
	margin-top: 3rem;
	margin-left: 3rem;
	grid-template-columns: repeat(2, 3fr);
	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 1.2rem;
	border-radius: 5px;
	gap: 1.5rem;
	width: 90%;
	background: #f2f2f2;
	margin-bottom: 2.5rem;
	img {
		width: 100%;
	}
	.awsometeacher_content {
		color: #038c33;
		h4 {
			font-size: 1.2rem;
			font-weight: 500;
		}
		p {
			font-size: 1.1rem;
		}
	}
`;
