import React from "react";
import { useTranslation } from "react-i18next";
import Page from "../core/Page";

export default function About() {
	const { t } = useTranslation();
	return (
		<Page title={t("global.routes.about")}>
			<p className="mt-24">{t("views.about.intro")}</p>
		</Page>
	);
}
