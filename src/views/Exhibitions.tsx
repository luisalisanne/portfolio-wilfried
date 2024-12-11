import React from "react";
import { useTranslation } from "react-i18next";
import Page from "../core/Page";
import ExhibitionsPage from "../components/exhibitions/ExhibitionsPage";

export default function Exhibitions() {
	const { t } = useTranslation();

	return (
		<Page title={t("global.routes.exhibitions")}>
			<ExhibitionsPage />
		</Page>
	);
}
