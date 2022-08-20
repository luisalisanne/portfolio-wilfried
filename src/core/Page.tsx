import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";

interface PageProps {
	title?: string;
	children: React.ReactNode;
}
export default function Page(props: PageProps) {
	const { title, children } = props;
	return (
		<div className="w-2/3 mx-auto p-3">
			<header>
				<Menu />
			</header>
			<main>
				<h1>{title}</h1>
				<div>{children}</div>
			</main>
			<footer className="flex justify-end">
				<Footer />
			</footer>
		</div>
	);
}
