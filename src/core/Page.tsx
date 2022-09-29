import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
	title?: string;
	children: React.ReactNode;
}
export default function Page(props: PageProps) {
	const { title, children } = props;
	return (
		<div className="w-screen h-screen">
			<Header />
			<main className="pt-24 md:w-2/3 mx-auto">
				<h1 className="font-heading text-2xl fixed bg-white">{title}</h1>
				<div className="mt-10">{children}</div>
			</main>
			<Footer />
		</div>
	);
}
