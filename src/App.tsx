import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Exhibitions from "./views/Exhibitions";
import Home from "./views/Home";
import Work from "./views/Work";
import "./config/i18n.ts";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="work" element={<Work />} />
				<Route path="exhibitions" element={<Exhibitions />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}
