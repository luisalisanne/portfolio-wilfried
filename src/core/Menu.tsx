import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import NavItem from "../components/global/NavItem";

export default function Menu() {
	//TODO: MENU COLLAPSE ON MOBILE
	const location = useLocation();
	const { t } = useTranslation();

	return (
		<nav className="flex justify-between font-heading items-end">
			<NavLink
				to="/"
				className={`text-2xl md:text-4xl hover:text-slate-500 ${
					location.pathname === "/" ? "invisible" : ""
				}`}
				end
			>
				<span>{t("global.name")}</span>
			</NavLink>

			<ul className="flex gap-2 text-xl">
				<NavItem destination="/about">{t("global.routes.about")}</NavItem>
				<NavItem destination="/work">{t("global.routes.work")}</NavItem>
				<NavItem destination="/exhibitions">
					{t("global.routes.exhibitions")}
				</NavItem>
				<NavItem destination="/contact">{t("global.routes.contact")}</NavItem>
			</ul>
		</nav>
	);
}
