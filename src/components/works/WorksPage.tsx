import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Gallery from "./Gallery";

export default function WorksPage() {
	const { t } = useTranslation();
	const [selectedProject, setSelectedProject] = useState("la_mer_noire");

	const handleClick = (key: string) => {
		setSelectedProject(key);
	};

	const projects = t("views.works", {
		returnObjects: true,
	});

	const listOfProjects: JSX.Element[] = [];

	Object.keys(projects).map((project) => {
		listOfProjects.push(
			<li
				id={project}
				key={project}
				className="hover:cursor-pointer hover:bg-black hover:text-white px-1"
				onClick={() => handleClick(project)}
			>
				{t(`views.works.${project}.title`)}
			</li>
		);
	});

	return (
		<>
			<ul className="flex flex-col md:flex-row md:justify-between md:gap-x-5 gap-y-1 flex-wrap">
				{listOfProjects}
			</ul>
			<h1 className="mt-5 text-xl text-white bg-black px-1 flex justify-between">
				<span>{t(`views.works.${selectedProject}.title`)}</span>
				<span>{t(`views.works.${selectedProject}.year`)}</span>
			</h1>
			<Gallery selectedProject={selectedProject} />
		</>
	);
}
