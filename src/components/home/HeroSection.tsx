import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col-reverse md:flex-row justify-evenly items-center">
			<div>
				<h1 className="font-heading text-5xl md:text-7xl md:text-end">
					{t("global.name")}
				</h1>
				<p>{t("global.description")}</p>
			</div>
			<img
				src="src/assets/images/wilfried_test_1.png"
				alt="Portrait"
				className="md:w-1/2"
			/>
		</div>
	);
}
