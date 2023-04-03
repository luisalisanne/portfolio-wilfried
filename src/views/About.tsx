import React from "react";
import { useTranslation } from "react-i18next";
import Intro from "../components/about/Intro";
import Page from "../core/Page";

export default function About() {
	const { t } = useTranslation();

	return (
		<Page title={t("global.routes.about")}>
			<Intro />
		</Page>
	);
}
