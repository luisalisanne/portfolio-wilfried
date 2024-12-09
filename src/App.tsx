import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Exhibitions from "./views/Exhibitions";
import Home from "./views/Home";
import Works from "./views/Works";
import "./config/i18n.ts";
import WorksPage from "./components/works/WorksPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="works" element={<Works />}>
					<Route path=":series" element={<WorksPage />} />
				</Route>
				<Route path="exhibitions" element={<Exhibitions />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}
