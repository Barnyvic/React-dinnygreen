import React from "react";
import Advancelearn from "../components/AdvancelearnComp/AdvanceComp";
import ContactComp from "../components/ContactComp/ContactComp";
import FeatureComp from "../components/FeatureComp/FeatureComp";
import InstructionComp from "../components/Instructioncomp/InstructionComp";
import LearningComp from "../components/LearningComp/LearningComp";
import SliderCards from "../components/Slider";
import StudentComp from "../components/StudentComp/StudentComp";
import SuccessComp from "../components/SuccessComp/SuccessComp";
import UniqueComps from "../components/Uniquesection/UniqueComp";

const HomePage = () => {
	return (
		<div>
			<UniqueComps />
			<Advancelearn />
			<FeatureComp />
			<LearningComp />
			{/* <SliderCards /> */}
			<StudentComp />
			<SuccessComp />
			<InstructionComp />
			<ContactComp />
		</div>
	);
};

export default HomePage;
