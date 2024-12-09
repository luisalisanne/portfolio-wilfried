import React from "react";
import { useTranslation } from "react-i18next";

export interface GalleryItemProps {
	project: string;
	piece: string;
}

/**
 * Component that renders an item for the image gallery
 */

export default function GalleryItem(props: GalleryItemProps) {
	const { project, piece } = props;
	const { t } = useTranslation();
	const i18nextPath = `views.works.${project}.pieces.${piece}`;

	return (
		<div key={t(`${i18nextPath}.title`)}>
			<img
				src={`../${t(`${i18nextPath}.src`)}`}
				alt={t(`${i18nextPath}.alt`)}
			/>
			<span>
				<ul className="flex justify-between bg-black gap-1 md:gap:2 xl:gap-3 text-xs text-white p-1">
					<li>{t(`${i18nextPath}.title`)}</li>
					<li>{t(`${i18nextPath}.technique`)}</li>
					<li>{t(`${i18nextPath}.size`)}</li>
					<li>{t(`${i18nextPath}.year`)}</li>
				</ul>
			</span>
		</div>
	);
}
