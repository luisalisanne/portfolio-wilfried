import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";

interface PageProps {
	title?: string;
	children: React.ReactNode;
}
export default function Page(props: PageProps) {
	const { title, children } = props;
	const location = useLocation();
	return (
		<div
			className={`md:w-2/3 mx-auto p-3 ${
				location.pathname === "/"
					? "justify-between h-screen flex flex-col"
					: ""
			}`}
		>
			<header>
				<Menu />
			</header>
			<main>
				<h1 className="font-heading text-2xl">{title}</h1>
				<div>{children}</div>
			</main>
			<footer className="flex justify-end">
				<Footer />
			</footer>
		</div>
	);
}
