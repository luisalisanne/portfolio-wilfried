import React from "react";
import { useTranslation } from "react-i18next";
import WorksPage from "../components/works/WorksPage";
import Page from "../core/Page";

export default function Works() {
	const { t } = useTranslation();
	return (
		<Page title={t("global.routes.works")}>
			<WorksPage />
		</Page>
	);
}
