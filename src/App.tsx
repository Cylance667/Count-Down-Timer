import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputPage from "./Pages/input_page.tsx";
import CountdownPage from "./Pages/countdown.tsx";
import NotFound from "./Pages/NotFound.tsx";
import { UpdateCountdown } from "./Components/Functions.ts";

const App: React.FC = () => {
	UpdateCountdown();

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route index element={<InputPage />} />
					<Route path="/" element={<InputPage />} />
					<Route path="/countdown" element={<CountdownPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
