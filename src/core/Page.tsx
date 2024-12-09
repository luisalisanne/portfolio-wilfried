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
			<main className="pt-16 pb-16 lg:w-2/3 mx-auto">
				<h1 className="font-heading md:text-2xl lg:3xl sticky top-16 md:bg-white w-1/2 lg:w-full px-1 lg:px-0">
					{title}
				</h1>
				<div className="mt-24">{children}</div>
			</main>
			<Footer />
		</div>
	);
}
