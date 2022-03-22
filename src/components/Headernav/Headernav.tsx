import React from "react";
import styled from "styled-components";

const Headernav = () => {
	return (
		<Topnav>
			<div className="Container">
				<div className="header__contact-info">
					<div className="header__contacts">
						<li className="Header_nav_content">
							<span className="info">Call:</span> +234 9012624162
						</li>
						<li className="Header_nav_content">
							<span className="info">Support:</span>
							<a href="#">info@yourcompany.com</a>
						</li>
					</div>
					<div className="top_nav_btn_container">
						<a href="#" className="top_nav_link">
							Login
						</a>
						<button className=" btn_green">Register</button>
					</div>
				</div>
			</div>
		</Topnav>
	);
};

export default Headernav;

const Topnav = styled.header`
	width: 100%;
	height: 10vh;
	max-width: 100%;
	padding: 1rem;
	background: #ffffff;
	.Container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
		overflow: hidden;
		font-size: 1.2rem;
		.header__contact-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.header__contacts {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.Header_nav_content {
					list-style: none;
					margin-left: 1rem;
					color: #003412;
					span {
						font-weight: 550;
					}
					a {
						text-decoration: none;
						color: #000000;
					}
				}
			}
		}
		.top_nav_btn_container {
			.top_nav_link {
				margin-right: 1rem;
				text-decoration: none;
				color: #038c33;
			}
			.btn_green {
				background: #038c33;
				color: #ffffff;
				border: none;
				outline: none;
				font-size: 1.1rem;
				padding: 0.7rem 1rem;
				border-radius: 5px;
				cursor: pointer;
				transition: ease-in-out;
				&:hover {
					background: #02a63b;
				}
			}
		}
		@media (max-width: 850px) {
			font-size: 1rem;
			.top_nav_btn_container {
				.btn_green {
					font-size: 1rem;
					padding: 0.5rem 1.5rem;
				}
			}
		}
		@media (max-width: 750px) {
			font-size: 0.8rem;
			.top_nav_btn_container {
				.top_nav_link {
					font-size: 0.7rem;
				}
				.btn_green {
					font-size: 0.7rem;
					padding: 0.5rem 1.5rem;
				}
			}
		}
		@media (max-width: 575px) {
			padding: 0rem;
			.header__contact-info {
				margin-right: 1.5rem;
			}
			.top_nav_btn_container {
				padding: 0rem 0.9rem;
				.top_nav_link {
					font-size: 0.8rem;
					margin-left: 1rem;
				}
				.btn_green {
					font-size: 0.7rem;
					padding: 0.5rem 0.8rem;
				}
			}
		}
	}
`;
