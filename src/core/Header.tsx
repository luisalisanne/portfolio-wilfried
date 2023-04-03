import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import NavItem from "../components/global/NavItem";

export default function Header() {
	const location = useLocation();
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const hamburgerLine = `h-1 w-8 my-1 bg-black transition ease transform duration-300`;

	return (
		<header className="w-screen fixed top-0 pt-5 pb-5 bg-white">
			<button
				className="flex flex-col h-10 w-10 justify-center items-center group text-end absolute right-5 top-3 md:hidden"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div
					className={`${hamburgerLine} ${
						isOpen
							? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
							: "opacity-50 group-hover:opacity-100"
					}`}
				/>
				<div
					className={`${hamburgerLine} ${
						isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
					}`}
				/>
				<div
					className={`${hamburgerLine} ${
						isOpen
							? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
							: "opacity-50 group-hover:opacity-100"
					}`}
				/>
			</button>

			<nav className="md:w-2/3 mx-auto flex justify-between font-heading md:items-end">
				<NavLink
					to="/"
					className={`text-2xl md:text-4xl hover:text-yellow-300 ${
						location.pathname === "/" ? "invisible" : ""
					}`}
					end
				>
					{t("global.name")}
				</NavLink>

				<ul
					className={`flex flex-col md:flex-row gap-2 absolute md:relative text-end md:text-xl top-10 right-5 md:top-0 md:right-0 ${
						isOpen ? "" : "invisible md:visible"
					}`}
				>
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
