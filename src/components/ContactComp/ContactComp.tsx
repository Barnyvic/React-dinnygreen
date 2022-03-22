import React from "react";
import styled from "styled-components";

const ContactComp = () => {
	return (
		<ContactContainer>
			<Container>
				<ContactContent>
					<h1>Contact Us</h1>
					<ContactGrid>
						<input type="text" required placeholder="Name" />
						<input type="email" required placeholder="Email" />
						<input type="text" required placeholder="Phone" />
						<input type="text" required placeholder="Subject" />
					</ContactGrid>
					<textarea required placeholder="Message"></textarea>
					<div className="btnCOnt">
						<GreenButton>Send now</GreenButton>
					</div>
				</ContactContent>
			</Container>
		</ContactContainer>
	);
};

export default ContactComp;

const ContactContainer = styled.div`
	padding: 1rem;
	background:#ffffff;
`;

const ContactContent = styled.div`
	padding: 2rem;
	h1 {
		text-align: center;
		color: #038c33;
		font-size: 2.5rem;
		font-weight: 500;
	}
	textarea {
		margin-top: 2rem;
		padding: 2rem;
		width: 100%;
	}
	.btnCOnt {
		text-align: center;
	}
`;

const ContactGrid = styled.div`
	text-align: center;
	grid-template-columns: repeat(2, 1fr);
	display: grid;
	padding-top: 3.5rem;
	gap: 2rem;
	input{
		padding:1rem;
		width: 100%;
		outline:none;
	}
`;

const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 2rem;
	overflow: hidden;
`;

const GreenButton = styled.button`
	background: #038c33;
	color: #ffffff;
	border: none;
	outline: none;
	margin-top: 3rem;
	padding: 0.7rem 1.5rem;
	cursor: pointer;
	border-radius: 5px;
	font-size: 1.2rem;
	margin-right: 1.5rem;
	&:hover {
		background: #02a63b;
		transition: ease-in;
	}
`;