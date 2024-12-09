import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import NavItem from "../components/global/NavItem";

export default function Header() {
	const location = useLocation();
	const { t } = useTranslation();

	return (
		<header className="w-screen fixed top-0 px-1 md:px-0 pt-5 pb-5 bg-white">
			<nav className="md:w-2/3 mx-auto flex justify-between font-heading md:items-end">
				<NavLink
					to="/"
					className={`text-2xl sm:text-3xl md:text-4xl hover:text-pink-400 ${
						location.pathname === "/" ? "invisible" : ""
					}`}
					end
				>
					{t("global.name")}
				</NavLink>

				<ul className="flex flex-col lg:flex-row gap-2 text-end md:text-xl md:top-0 md:right-0">
					<NavItem destination="/about">{t("global.routes.about")}</NavItem>
					<NavItem destination="/works">{t("global.routes.works")}</NavItem>
					<NavItem destination="/exhibitions">
						{t("global.routes.exhibitions")}
					</NavItem>
					<NavItem destination="/contact">{t("global.routes.contact")}</NavItem>
				</ul>
			</nav>
		</header>
	);
}
