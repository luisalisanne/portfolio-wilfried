import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import GalleryItem from "./GalleryItem";
import { useParams } from "react-router-dom";

export interface GalleryProps {
	selectedProject: string;
}

/**
 * Component that renders an image gallery
 */

export default function Gallery(props: GalleryProps) {
	const { t } = useTranslation();
	const { selectedProject } = props;

	const pieces = t(`views.works.${selectedProject}.pieces`, {
		returnObjects: true,
	});

	const listOfPieces: JSX.Element[] = [];

	Object.keys(pieces).forEach((piece) => {
		listOfPieces.push(<GalleryItem project={selectedProject} piece={piece} />);
	});

	return (
		<div className="bg-grey-100 grid md:grid-cols-2 xl:grid-cols-3 gap-1 lg:gap-2">
			{listOfPieces}
		</div>
	);
}
