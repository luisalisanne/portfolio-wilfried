import React from "react";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

/**
 * Component that renders a button to switch between English and French translations
 */

export default function LanguageSwitch() {
	const { t, i18n } = useTranslation();
	const currentLang = i18n.resolvedLanguage;

	const toggleLang = (lang: string) => {
		changeLanguage(lang);
	};

	return (
		<button onClick={() => toggleLang(currentLang === "en" ? "fr" : "en")}>
			{t("global.language.switch")}
		</button>
	);
}
