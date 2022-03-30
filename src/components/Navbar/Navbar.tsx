import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../assets/dinnerlogo.png";
import { FaStream } from "react-icons/fa";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", changeWidth);

		return () => {
			window.removeEventListener("resize", changeWidth);
		};
	}, []);

	return (
		<Nav>
			<Container>
				<Logoimg>
					<img src={Logo} alt="dinner-green-logo" />
				</Logoimg>
				{(toggleMenu || screenWidth > 1300) && (
					<ul className="list">
						<li className="items">
							<a href="#">Home</a>
						</li>
						<li className="items">
							<a href="#">About</a>
						</li>
						<li className="items">
							<a href="#">Services</a>
						</li>
						<li className="items">
							<a href="#">Instructors</a>
						</li>
						<li className="items">
							<a href="#">Courses</a>
						</li>
						<li className="items">
							<a href="#">Blog</a>
						</li>
						<Greenbutton>Contact</Greenbutton>
					</ul>
				)}
				<div>
					<FaStream className="btn" onClick={toggleNav} />
				</div>
			</Container>
		</Nav>
	);
};

export default Navbar;

const Nav = styled.nav`
	position: sticky;
	position: -webkit-sticky;
	position: sticky;
	z-index: 3;
	top: 50%;
	background: #003412;
	width: 100%;

	.list {
		list-style-type: none;
		display: flex;
		gap: 3rem;
		justify-content: space-evenly;
		align-items: center;
		position: relative;
		.items {
			margin-right: 20px;
			font-size: 20px;
			cursor: pointer;
			a {
				text-decoration: none;
				color: #f1f1f1;
				&:hover {
					color: #038c33;
				}
			}
		}
	}
	.btn {
		display: none;
		padding: 5px;
		color: #000;
		margin-bottom: 2rem;
		font-size: 0.7rem;
	}
	@media screen and (max-width: 1300px) {
		.list {
			flex-direction: column;
			height: auto;
			position: absolute;
			top: 100%;
			width: 100%;
			z-index: 1;
			background: #003412;
			padding: 1rem;
			.items:nth-child(1) {
				margin-top: 50px;
			}
			.items {
				width: 100%;
				text-align: center;
				padding: 1rem 0;
			}
		}
		.btn {
			display: block;
			margin-top: 2rem;
			font-size: 2.5rem;
			color: #ffffff;
			// margin-right: 5rem;
		}
	}
`;
const Logoimg = styled.div`
	flex: 1;
	// width: 50%;
	img {
		width: 120px;
	}
	@media screen and (max-width: 1300px) {
		img {
			width: 100px;
		}
	}
	@media screen and (max-width: 850px) {
		img {
			width: 70px;
		}
	}
`;
const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;
const Greenbutton = styled.button`
	background: #038c33;
	color: #ffffff;
	border: none;
	outline: none;
	margin-right: 1rem;
	font-size: 1.1rem;
	padding: 1.1rem 3rem;
	border-radius: 5px;
	cursor: pointer;
	transition: ease-in-out;
	&:hover {
		background: #02a63b;
	}
`;
