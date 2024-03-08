import React from "react";
import github from "../assets/images/github.png";
import javascript from "../assets/images/javascript.png";
import mongo from "../assets/images/mongo.png";
import node from "../assets/images/node.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";

const Skills = () => {
	return (
		<div name="skills" className=" w-full h-screen bg-[#0a192f] text-gray-300">
			{/* container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600  "> Skills</p>
				</div>
                        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                    <img className="w-20 mx-auto" src={tailwind} alt="html icon" />
                                    <p>TAILWIND</p>
                              </div>
                              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                    <img className="w-20 mx-auto" src={github} alt="html icon" />
                                    <p>GITHUB</p>
                              </div>
                              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                    <img className="w-20 mx-auto" src={javascript} alt="html icon" />
                                    <p>JAVASCRIPT</p>
                              </div>
                              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                    <img className="w-20 mx-auto" src={react} alt="html icon" />
                                    <p>REACT</p>
                              </div>
                              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                    <img className="w-20 mx-auto" src={mongo} alt="html icon" />
                                    <p>MONGODB</p>
                              </div>
                              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                    <img className="w-20 mx-auto" src={node} alt="html icon" />
                                    <p>NODE JS</p>
                              </div>
                        </div>
			</div>
		</div>
	);
};

export default Skills;
