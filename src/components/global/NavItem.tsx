import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
	destination: string;
	children: string;
}

/**
 * Component that renders a nav item for the menu
 */

export default function NavItem(props: NavItemProps) {
	const { destination, children } = props;
	return (
		<li>
			<NavLink
				to={destination}
				style={({ isActive }) =>
					isActive
						? {
								visibility: "hidden",
						  }
						: {}
				}
				className="hover:text-yellow-300"
			>
				{children}
			</NavLink>
		</li>
	);
}
