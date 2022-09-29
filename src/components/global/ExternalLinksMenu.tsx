import React from "react";

/**
 * Component that renders a menu with links to external websites
 */

export default function ExternalLinksMenu() {
	return (
		<nav>
			<ul className="flex gap-1">
				<li className="hover:bg-yellow-200 p-0.5">
					<a href="https://www.instagram.com/wilfriednakeu/" target="_blank">
						Instagram
					</a>
				</li>
				<li className="hover:bg-yellow-200 p-0.5">
					<a href="" target="_blank">
						Test
					</a>
				</li>
			</ul>
		</nav>
	);
}
