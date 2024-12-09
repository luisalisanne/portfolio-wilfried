import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Gallery from "./Gallery";
import { NavLink } from "react-router-dom";

/**
 * Component that renders a gallery of recent works
 */

export default function WorksPage() {
	const { t } = useTranslation();
	const [selectedProject, setSelectedProject] = useState("0");

	const handleClick = (key: string) => {
		setSelectedProject(key);
	};

	const projects = t("views.works", {
		returnObjects: true,
	});

	const listOfProjects: JSX.Element[] = [];

	// render nav item for each project
	Object.keys(projects).map((project) => {
		listOfProjects.push(
			<NavLink
				to={`/works/${project}`}
				key={project}
				id={project}
				className={`hover:bg-black hover:text-white px-1 ${
					selectedProject === project ? "invisible" : ""
				}`}
				onClick={() => handleClick(project)}
			>
				{t(`views.works.${project}.title`)}
			</NavLink>
		);
	});

	return (
		<>
			<div className="md:sticky md:top-44 lg:top-24 bg-white">
				<ul className="flex flex-col md:flex-row md:justify-between md:gap-x-5 gap-y-1 flex-wrap">
					{listOfProjects}
				</ul>
				<h1 className="mt-5 md:mb-2 mb-1 text-xl text-white bg-black px-1 py-3 flex justify-between">
					<span>{t(`views.works.${selectedProject}.title`)}</span>
					<span>{t(`views.works.${selectedProject}.year`)}</span>
				</h1>
			</div>
			<Gallery selectedProject={selectedProject} />
			<button
				className="m-3 p-3 mx-auto bg-red-300 lg:invisible"
				onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
			>
				back to top
			</button>
		</>
	);
}
