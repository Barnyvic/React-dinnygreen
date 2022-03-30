import React from "react";
import styled from "styled-components";
import frame15 from "../../assets/Frame15.png";

const StudentComp = () => {
	return (
		<StudentContainer>
			<Container>
				<StudentContent>
					<h1>Find Out How We Help Students</h1>
					<p>
						authentic ‘voice and choice’ matter and a big part of this is
						leaving ‘room for interpretation’ in the assignment. Those gray
						areas <br />
						can confuse students unaccustomed to agency and choice, but once
						they become comfortable with it, it can be a significant <br />
						factor in helping them show what their ‘best’ actually is.
					</p>
					<img src={frame15} alt="A girl reading" />
				</StudentContent>
			</Container>
		</StudentContainer>
	);
};

export default StudentComp;

const StudentContainer = styled.div``;

const StudentContent = styled.div`
	text-align: center;
	padding: 2rem;
	h1 {
		color: #038c33;
		margin-bottom: 1rem;
	}
	p {
		line-height: 1.5rem;
		font-size: 1.1rem;
		color: #6c757d;
	}
	img {
		width: 100%;
	}
`;

const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 2rem;
	overflow: hidden;
`;
