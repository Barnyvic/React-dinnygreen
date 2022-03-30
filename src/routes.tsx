import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderComp";
import HomePage from "./pages";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

const RouterComp = () => {
	return (
		<Wrapper>
			<Router>
				<HeaderComp />
				<div className="main-app">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/contact" element={<ContactPage />} />
					</Routes>
				</div>
				{/* <FooterComp /> */}
			</Router>
		</Wrapper>
	);
};

export default RouterComp;

const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	.main-app {
		flex: 1;
	}
`;
