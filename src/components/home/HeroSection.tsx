import React from "react";

export default function HeroSection() {
	return (
		<div className="flex flex-col-reverse md:flex-row justify-evenly items-center">
			<div>
				<h1 className="font-heading text-5xl md:text-7xl md:text-end">
					Wilfried <br />
					Nakeu
				</h1>
				<p>Multidisciplinary Multimedia Artist</p>
			</div>
			<img
				src="src/assets/images/wilfried_test_1.png"
				alt="Portrait"
				className="md:w-1/2"
			/>
		</div>
	);
}
