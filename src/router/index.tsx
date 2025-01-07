import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import SciencesAndTechnologies from "../pages/sciencesAndTechnologies";
import { SCIENCES_AND_TECHNOLOGIES } from "./constant";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path={SCIENCES_AND_TECHNOLOGIES}
        element={<SciencesAndTechnologies />}
      />
    </Routes>
  </BrowserRouter>
);
