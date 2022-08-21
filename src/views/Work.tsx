import React from "react";
import { useTranslation } from "react-i18next";
import Page from "../core/Page";

export default function Works() {
	const { t } = useTranslation();
	return <Page title={t("global.routes.work")}>Works Page content</Page>;
}
