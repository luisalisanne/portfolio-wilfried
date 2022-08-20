import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
	destination: string;
	children: string;
}

export default function NavItem(props: NavItemProps) {
	const { destination, children } = props;
	return (
		<li>
			<NavLink
				to={destination}
				style={({ isActive }) =>
					isActive
						? {
								textDecoration: "underline",
						  }
						: {}
				}
			>
				{children}
			</NavLink>
		</li>
	);
}
