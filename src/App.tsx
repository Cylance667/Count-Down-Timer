import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputPage from "./Pages/input_page.tsx";
import Countdown from "./Pages/countdown.tsx";
import NotFound from "./Pages/NotFound.tsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<InputPage />} />
          <Route path="/" element={<InputPage />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
