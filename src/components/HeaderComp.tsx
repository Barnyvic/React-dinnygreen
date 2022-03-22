import React from "react";

import styled from "styled-components";
import Headernav from "./Headernav/Headernav";
import Navbar from "./Navbar/Navbar";

const HeaderComp = () => {
	return (
		<Header>
	
				<Headernav />
				<Navbar />
		
		</Header>
	);
};

export default HeaderComp;

const Header = styled.header`
	width: 100%;
	max-width: 100%;
`;
