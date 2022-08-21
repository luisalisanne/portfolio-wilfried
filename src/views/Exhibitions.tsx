import React from "react";
import { useTranslation } from "react-i18next";
import Page from "../core/Page";

export default function Exhibitions() {
	const { t } = useTranslation();
	return (
		<Page title={t("global.routes.exhibitions")}>Exhibitions Page content</Page>
	);
}
