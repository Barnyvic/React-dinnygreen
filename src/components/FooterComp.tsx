import React from "react";
import styled from "styled-components";
import { FaMousePointer } from "react-icons/fa";

import logo from "../assets/dinnerlogo.png";
import Vector10 from "../assets/Vector(10).png";
import Vector11 from "../assets/Vector(11).png";
import Vector12 from "../assets/Vector(12).png";

const FooterComp = () => {
	return (
		<Footer>
			<FooterContainer>
				<Container>
					<Footer1>
						<img src={logo} width="120.64px" height="99.64px" alt="" />
						<p>
							Replenish him third creature and meat <br /> blessed void a fruit
							gathered you’re, <br /> they’re two waters own morning <br />{" "}
							gathered greater.
						</p>
					</Footer1>
					<Footer2>
						<h4>About Us</h4>
						<div className="underline"></div>
						<li>Afficiates</li>
						<li>Partners</li>
						<li>Reviews</li>
						<li>Blogs</li>
					</Footer2>
					<Footer2>
						<h4>Popular Classes</h4>
						<div className="underline"></div>
						<li>Creche</li>
						<li>Primary</li>
						<li>Secondary</li>
						<li>Highschool</li>
					</Footer2>
					<Footer3>
						<h4>Newsletter</h4>
						<div className="underline"></div>
						<p className="news">
							Sign up to newsletter to get <br />
							Latest updates
						</p>
						<input type="email" placeholder="Enter Email address" required />
						<span>
							<FaMousePointer className="Mouse" />
						</span>
						<div className="socials">
							<div>
								<a href="">
									<img src={Vector10} alt="" />
								</a>
							</div>
							<div className="space">
								<a href="">
									<img src={Vector11} alt="" />
								</a>
							</div>
							<div>
								<a href="">
									<img src={Vector12} alt="" />
								</a>
							</div>
						</div>
					</Footer3>
				</Container>
				<div className="underline"></div>
				<div className="align">
					<p>
						Copywrite @ DinnyGreen International Schools
						{new Date().getFullYear()}
					</p>
				</div>
			</FooterContainer>
		</Footer>
	);
};

export default FooterComp;

const Footer = styled.footer`
	background-color: #003412;
`;
const FooterContainer = styled.div`
	background-color: #003412;
	padding: 2rem;
	.underline {
		border-bottom: 4px solid gray;
		width: 100%;
		margin-top: 5%;
	}
	.align {
		text-align: center;
		color: #ffffff;
		margin-top: 1rem;
		p {
			font-size: 1.2rem;
		}
	}
`;

const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	display: grid;
	align-items: center;
	grid-template-columns: repeat(4, 1fr);
	@media screen and (max-width: 1300px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 450px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const Footer1 = styled.div`
	p {
		color: #f2f2f2;
		line-height: 1.5;
		font-size: 1.1rem;
	}
`;
const Footer2 = styled.div`
	margin-top: 7%;
	margin-left: 7%;
	color: #ffffff;
	h4 {
		font-weight: 500;
		font-size: 1.5rem;
		margin-bottom: 0.3rem;
	}
	.underline {
		border-bottom: 4px solid gray;
		width: 20%;
		margin-bottom: 0.7rem;
	}

	li {
		margin-top: 0.3rem;
		padding-bottom: 0.6rem;
		font-size: 1.2rem;
		list-style: none;
	}
`;
const Footer3 = styled.div`
	margin-top: 7%;
	h4 {
		font-weight: 500;
		font-size: 1.5rem;
		margin-bottom: 0.3rem;
		color: #ffffff;
	}
	.underline {
		border-bottom: 4px solid gray;
		width: 20%;
		margin-bottom: 0.7rem;
	}
	.news {
		color: #ffffff;
		font-size: 1.2rem;
	}
	input {
		margin-top: 0.5rem;
		padding: 0.8rem 1.6rem;
		border: none;
		outline: none;
	}
	span {
		background: #038c33;
		padding: 0.7rem;
		.Mouse {
			font-size: 1.5rem;
			color: #ffffff;
		}
	}
	.socials {
		gap: 2rem;
		margin-top: 5%;
		display: flex;
		align-items: center;
	}
`;
