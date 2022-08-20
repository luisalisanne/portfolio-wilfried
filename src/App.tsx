import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Exhibitions from "./views/Exhibitions";
import Home from "./views/Home";
import Works from "./views/Works";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="works" element={<Works />} />
				<Route path="exhibitions" element={<Exhibitions />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}
