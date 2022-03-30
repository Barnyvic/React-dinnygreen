import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { students } from "../components/CardArray";
import { BsCalendarDate } from "react-icons/bs";
import { MdPlayLesson } from "react-icons/md";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SliderCards extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<SliderContainer>
				<Container>
					<Porpular>
						<h1>Porpular Classes</h1>
						<p>
							We have built hospitals, arranged doctor appointments have the
							diagnose and treat <br></br> yourem ipsu r aol ad meniam, quis
							nostrud exercitation.
						</p>
					</Porpular>
					<Slider {...settings} className="card__container--inner">
						{students.map((student, index) => {
							return (
								<MapContainer key={student.id}>
									<img src={`/images/Ellipse ${student.img}.png`} alt="" />
									<TimeStamp>
										<p>
											<MdPlayLesson /> {student.less}
										</p>
										<p>
											<BsCalendarDate /> {student.date}
										</p>
									</TimeStamp>
									<h5>{student.grade}</h5>
									<p>{student.para}</p>
									<EnrollCont>
										<p className="enroll">{student.btn}</p>
									</EnrollCont>
								</MapContainer>
							);
						})}
					</Slider>
					<div>
						<GreenButton>View all courses</GreenButton>
					</div>
				</Container>
			</SliderContainer>
		);
	}
}
const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	div {
		text-align: center;
	}
`;
const SliderContainer = styled.div`
	padding: 4rem;
	background: #f9fcfe;
`;

const EnrollCont = styled.div`
	border-top: 1px solid #038c33;
	border-bottom: 5px solid #038c33;
	margin-top: 2rem;
	color: #ffffff;
	.enroll {
		margin-bottom: 1rem;
		color: #038c33;
		&:hover {
			color: #ffffff;
		}
	}
	&:hover {
		background: #038c33;
		transition: ease-in;
	}
`;

const TimeStamp = styled.div`
	display: flex;
	margin-top: 1.5rem;
	align-items: center;
	color: #6c757d;
	justify-content: space-evenly;
`;

const Porpular = styled.div`
	margin-bottom: 2rem;
	h1 {
		color: #038c33;
		margin-bottom: 1rem;
	}
	p {
		color: #1f6036;
		line-height: 1.6;
		font-size: 1.1rem;
	}
`;

const MapContainer = styled.div`
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	padding: 1rem;
	text-align: center;
	background:#ffffff;
	gap: 1rem;
	img{
			text-align: center;
			margin-left: 2rem;
			@media screen and (max-width: 1300px){
					margin-left: 4rem;
			}
			@media screen and (max-width: 1200px){
					margin-left: 2rem;
			}
				@media screen and (max-width: 1200px){
					margin-left: 1rem;
			}
				@media screen and (max-width: 1000px){
					margin-left: 3rem;
			}
				@media screen and (max-width: 900px){
					margin-left: 2.5rem;
			}
				@media screen and (max-width: 800px){
					margin-left: 10rem;
			}
				@media screen and (max-width: 450px){
				margin-left: 1rem;
					width:80%;
			}
	}
	h5 {
		margin-top: 1rem;
		color: #038c33;
	}
	p {
		margin-top: 1rem;
		color: #6C757D;

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
	@media screen and (max-width: 450px) {
		padding: 0.7rem 1rem;
		font-size: 0.9rem;
	}
`;
