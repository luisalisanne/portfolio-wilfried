import React from "react";
import { useTranslation } from "react-i18next";

/**
 * Component that renders a hero section for the Home Page
 */

export default function HeroSection() {
	const { t } = useTranslation();
	return (
		<div className="md:fixed md:bottom-0 flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-evenly items-center md:mt-24">
			<div>
				<h1 className="font-heading text-5xl md:text-7xl md:text-end">
					{t("global.name")}
				</h1>
				<p className="md:text-end">{t("global.description")}</p>
			</div>
			<img
				src="src/assets/images/wilfried_test_1.png"
				alt="Portrait of Wilfried"
				className="md:w-2/3"
			/>
		</div>
	);
}
