import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
	destination: string;
	children: string | React.ReactNode;
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
								visibility: "hidden",
						  }
						: {}
				}
				className="hover:text-slate-500"
			>
				{children}
			</NavLink>
		</li>
	);
}
