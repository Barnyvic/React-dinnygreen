import React from "react";
import styled from "styled-components";
import Success from "../../assets/success.jpeg";
import Boy from "../../assets/boywithbag.jpeg";
import Girl from "../../assets/girlwithlong.png";
import guy from "../../assets/Ellipse21.png";

const SuccessComp = () => {
	return (
		<SuccessContainer>
			<Container>
				<SucessContent>
					<h1>Success Stories</h1>
					<Sucessimg>
						<div className="guy">
							<img src={guy} alt="Boy with bag" />
						</div>
						<div className="girl">
							<img src={Girl} alt=" A girl" />
						</div>
						<div className="boy">
							<img src={Boy} alt="Boy with bag" />
						</div>
					</Sucessimg>
					<p>
						We have built hospitals, arranged doctor appointments have the
						diagnose and treat yourem ipsu r aol ad <br />
						meniam, quis nostrud exercitation.We doctor appointments have the
						diagnose and treat yourem ipsu r <br />
						exercitatranged docts have the diagnose and treat ipsu r aol
					</p>
				</SucessContent>
			</Container>
		</SuccessContainer>
	);
};

export default SuccessComp;

const SuccessContainer = styled.div`
	background: url(${Success}) no-repeat center center/cover;
	background-position: right;
`;

const SucessContent = styled.div`
	text-align: center;
	h1 {
		color: #d6e9f7;
    padding:1rem;
	}

	p {
		color: #003412;
		padding: 2.5rem 0;
		line-height: 2rem;
		font-size: 1.1rem;
		font-style: italic;
	}
`;

const Sucessimg = styled.div`
	display: flex;
	justify-content: center;
  align-items:flex-end;
	.boy {
		img {
			border-radius: 50%;
       100%
		}
	}
  .guy{
    img {
       100%
		}
  }
	.girl {
		border: 3px dashed #ffffff;
		border-radius: 50%;
    padding: 0.5rem;
    margin:0 1rem;
		img {
			border-radius: 50%;
      100%
		}
	}
`;

const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 1rem;
	overflow: hidden;
`;
