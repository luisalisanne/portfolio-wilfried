import i18next, { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ExhibitionsPage() {
	const { t } = useTranslation();

	const exhibitions = t("views.exhibitions", {
		returnObjects: true,
	});

	console.log("exhibitions", exhibitions, typeof exhibitions, exhibitions[0]);

	//todo: sort array by year descending

	const listOfExhibitions: JSX.Element[] = [];

	// render list item for each exhibition
	Object.keys(exhibitions).map((exhibition) => {
		const i18nextPath = `views.exhibitions.${exhibition}`;

		listOfExhibitions.push(
			<li
				className={`my-2 bg-gray-100 text-xs md:text-sm lg:text-base md:flex gap-1 ${
					Number(exhibition) % 2 !== 0 ? "md:flex-row-reverse" : ""
				}`}
			>
				<div className="p-2 md:w-1/2 flex flex-col gap-3 md:h-68">
					<p className="text-xl">
						{t(`${i18nextPath}.title`)} | {t(`${i18nextPath}.year`)}
					</p>
					<p>
						{t(`${i18nextPath}.city`)}, {t(`${i18nextPath}.country`)}
					</p>
					<p>{t(`${i18nextPath}.description`)}</p>

					<a
						className="underline hover:font-bold"
						href={t(`${i18nextPath}.link`)}
					>
						{t(`${i18nextPath}.link`)}
					</a>
				</div>
				<div className="md:w-1/2 md:h-full">
					<img
						src="../src/assets/images/test.png"
						alt=""
						className="object-fill"
					/>
				</div>
			</li>
		);
	});

	return <ul>{listOfExhibitions}</ul>;
}
