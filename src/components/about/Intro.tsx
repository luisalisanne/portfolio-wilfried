import React from "react";
import { useTranslation } from "react-i18next";

export default function Intro() {
	const { t } = useTranslation();

	return (
		<div className="mt-24">
			<p className="uppercase">{t("views.about.headline")}</p>
			<br />
			<p className="text-justify">{t("views.about.intro")}</p>
		</div>
	);
}
