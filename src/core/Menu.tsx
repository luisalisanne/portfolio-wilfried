import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import NavItem from "../components/global/NavItem";

export default function Menu() {
	const location = useLocation();

	return (
		<nav className="flex justify-between">
			<NavLink
				to="/"
				className={`${location.pathname === "/" ? "invisible" : ""}`}
				end
			>
				<span>Wilfried Nakeu</span>
			</NavLink>

			<ul className="flex gap-2">
				<NavItem destination="/about">About</NavItem>
				<NavItem destination="/works">Works</NavItem>
				<NavItem destination="/exhibitions">Exhibitions</NavItem>
				<NavItem destination="/contact">Contact</NavItem>
			</ul>
		</nav>
	);
}
