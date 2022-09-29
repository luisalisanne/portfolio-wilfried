import ExternalLinksMenu from "../components/global/ExternalLinksMenu";
import LanguageSwitch from "../components/global/LanguageSwitch";

export default function Footer() {
	return (
		<footer className="fixed bottom-0 w-screen p-3 bg-white text-end flex justify-between">
			<ExternalLinksMenu />
			<LanguageSwitch />
		</footer>
	);
}
