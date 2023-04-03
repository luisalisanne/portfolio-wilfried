import React from "react";
import { useTranslation } from "react-i18next";
import GalleryItem from "./GalleryItem";

export interface GalleryProps {
	selectedProject: string;
}

/**
 * Component that renders an image gallery
 */

export default function Gallery(props: GalleryProps) {
	const { selectedProject } = props;
	const { t } = useTranslation();

	const pieces = t(`views.works.${selectedProject}.pieces`, {
		returnObjects: true,
	});

	const listOfPieces: JSX.Element[] = [];

	Object.keys(pieces).map((piece) => {
		listOfPieces.push(
			<GalleryItem
				title={t(`views.works.${selectedProject}.pieces.${piece}.title`)}
				technique={t(
					`views.works.${selectedProject}.pieces.${piece}.technique`
				)}
				size={t(`views.works.${selectedProject}.pieces.${piece}.size`)}
				year={t(`views.works.${selectedProject}.pieces.${piece}.year`)}
				imgSrc={`src/assets/images/${piece}.png`}
			/>
		);
	});

	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-2 mt-3">
			{listOfPieces}
		</div>
	);
}
