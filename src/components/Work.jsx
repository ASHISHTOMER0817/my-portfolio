import React from "react";
import cardmitra from "../assets/images/cardmitra.png";
import chiton from "../assets/images/chiton.png";

const Work = () => {
	return (
		<div
			name="work"
			className="w-full h-screen text-gray-300 bg-[#0a192f]"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
						Work
					</p>
					<p className="py-6"></p>
				</div>
				<div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
					<div
						style={{
							backgroundImage: `url(${cardmitra})`,
						}}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								CardMitra
							</span>
							<div className="">
								<a
									href="https://cardmitra.netlify.app"
									className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
								>
									Demo
								</a>

								<a
									href="https://github.com/ASHISHTOMER0817/CardMitra"
									className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
								>
									Code
								</a>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${chiton})`,
						}}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Chiton App
							</span>
							<div className="">
								<a href="https://chiton.netlify.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/ASHISHTOMER0817/chiton-1.0">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
