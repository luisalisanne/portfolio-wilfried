import React from "react";

export interface GalleryItemProps {
	title: string;
	technique: string;
	size: string;
	year: string;
	imgSrc: string;
}

/**
 * Component that renders an item for the image gallery
 */

export default function GalleryItem(props: GalleryItemProps) {
	const { title, technique, size, year, imgSrc } = props;
	return (
		<div key={title}>
			<img src={imgSrc} alt={title} />
			<span>
				<ul className="flex justify-between bg-black gap-1 md:gap:2 xl:gap-3 text-xs text-white p-1">
					<li>{title}</li>
					<li>{technique}</li>
					<li>{size}</li>
					<li>{year}</li>
				</ul>
			</span>
		</div>
	);
}
