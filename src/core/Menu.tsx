import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import NavItem from "../components/global/NavItem";

export default function Menu() {
	//TODO: MENU COLLAPSE ON MOBILE
	const location = useLocation();

	return (
		<nav className="flex justify-between font-heading md:items-end hidden md:flex">
			<NavLink
				to="/"
				className={`text-2xl md:text-4xl ${
					location.pathname === "/" ? "invisible" : ""
				}`}
				end
			>
				<span>Wilfried Nakeu</span>
			</NavLink>

			<ul className="flex flex-col md:flex-row gap-1 md:gap-2 md:text-2xl font-sans md:font-heading">
				<NavItem destination="/about">About</NavItem>
				<NavItem destination="/works">Works</NavItem>
				<NavItem destination="/exhibitions">Exhibitions</NavItem>
				<NavItem destination="/contact">Contact</NavItem>
			</ul>
		</nav>
	);
}
