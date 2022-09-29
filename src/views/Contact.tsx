import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/contact/ContactForm";
import Page from "../core/Page";

export default function Contact() {
	const { t } = useTranslation();
	return (
		<Page title={t("global.routes.contact")}>
			<ContactForm />
		</Page>
	);
}
